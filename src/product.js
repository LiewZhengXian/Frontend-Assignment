// product-script.js
document.getElementById('consent').addEventListener('change', function () {
  document.getElementById('submit-btn').disabled = !this.checked;
});

document.getElementById('newsletter-info').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  sessionStorage.setItem('newsletterName', name);
  sessionStorage.setItem('newsletterEmail', email);

  document.querySelector('.newsletter-title').classList.add('blur');
  document.querySelector('.newsletter-success').style.display = 'block';
});

// Adding placeholders to inputs
document.getElementById("name").setAttribute("placeholder", "Name");
document.getElementById("email").setAttribute("placeholder", "Email Address");

document.addEventListener('DOMContentLoaded', function() {
    // Sample product data
    const product = {
        title: "Premium Fitness Package",
        description: "Elevate your fitness journey with our comprehensive package.",
        details: "This all-in-one fitness solution includes top-of-the-line equipment, personalized workout plans, and premium supplements to help you achieve your fitness goals faster and more efficiently.",
        image: "https://source.unsplash.com/random/400x300?fitness-equipment"
    };

    // Update product information
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productDetails').textContent = product.details;
    document.getElementById('productImage').src = product.image;

    // Initialize product grids
    initializeProductGrid('fitnessEquipment', 'Fitness Equipment');
    initializeProductGrid('vitaminsSupplements', 'Vitamins & Supplements');
    initializeProductGrid('type3', 'Workout Apparel');
});

function initializeProductGrid(id, category) {
    const grid = document.getElementById(id);
    for (let i = 0; i < 4; i++) {
        const item = createProductItem(category, i + 1);
        grid.appendChild(item);
    }
}

function createProductItem(category, index) {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
        <img src="../images/member1.jpg${category.toLowerCase()}" alt="${category} ${index}">
        <h5>${category} ${index}</h5>
        <p>Product description goes here.</p>
    `;
    return item;
}

function loadMore(id) {
    const grid = document.getElementById(id);
    const category = grid.previousElementSibling.textContent;
    for (let i = 0; i < 2; i++) {
        const item = createProductItem(category, grid.children.length + 1);
        grid.appendChild(item);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const featuredSection = document.getElementById("featured-section");
    const newsLetter = document.getElementById("newsletter-section");

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.01 // Trigger when 10% of the section is visible
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                featuredSection.style.animationPlayState = 'running';
                observer1.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("sup");
                newsLetter.style.animationPlayState = 'running';
                observer2.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer1.observe(featuredSection);
    observer2.observe(newsLetter);
});