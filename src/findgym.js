const API_KEY = 'sqj8xQXg9BYHTkXHI5KkCLGSNWdsyyHM';

var map = L.map('map').setView([4.3336777,101.1337836], 50);
if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!");
  } else {


    navigator.geolocation.getCurrentPosition(getPosition)

  }

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker, circle, lat, long, accuracy;

function getPosition(position) {
  // console.log(position)
  lat = parseFloat(position.coords.latitude);
  long = parseFloat(position.coords.longitude);
  accuracy = 1000;

  if (marker) {
    map.removeLayer(marker);
  }

  if (circle) {
    map.removeLayer(circle);
  }

  marker = L.marker([lat, long]);
  circle = L.circle([lat, long], { radius: accuracy });

  var featureGroup = L.featureGroup([marker, circle]).addTo(map);

  map.fitBounds(featureGroup.getBounds());

  console.log(
    "Your coordinate is: Lat: " +
      lat +
      " Long: " +
      long +
      " Accuracy: " +
      accuracy
  );
}

map.on('click', function(e) {
  // Remove existing marker, if any
  if (marker != undefined) {
      map.removeLayer(marker);
      map.removeLayer(circle);
  }
  marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  circle = L.circle([e.latlng.lat, e.latlng.lng], 2000).addTo(map);

  // Add a new marker at the clicked position


  // Update the coordinates display
  document.getElementById('coordinates').innerHTML = 
      'Latitude: ' + e.latlng.lat.toFixed(6) + ', Longitude: ' + e.latlng.lng.toFixed(6);
  fetch(`https://api.tomtom.com/search/2/poiSearch/gym.json?key=${API_KEY}&lat=${e.latlng.lat}&lon=${e.latlng.lng}&radius=2000&limit=10`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to retrieve gyms');
          }
          return response.json();

      })
      .then(data => {


        displayGyms(data.results);
      })

      .catch(error => console.error('Error searching for gyms:', error))

});


function displayGyms(gyms) {
        console.log(gyms);
        const gymListElement = document.getElementById('gymList');
        gymListElement.innerHTML = '<h3>Nearby Gyms:</h3>';

        if (gyms.length === 0) {
            gymListElement.innerHTML += '<p>No gyms found within the specified radius.</p>';
            return;
        }
        
        const ul = document.createElement('ul');
        ul.className = 'list-group';

        gyms.forEach(function(gym) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <strong>${gym.poi.name}</strong><br>
                Address: ${gym.address.freeformAddress}<br>
                Distance: ${(gym.dist / 1000).toFixed(2)} km
            `;
            ul.appendChild(li);
            //L.marker([gym.position.lat, gym.position.lon]).addTo(map)
        });

        gymListElement.appendChild(ul);
}
