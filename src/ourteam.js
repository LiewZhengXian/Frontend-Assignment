let detailOverlay = document.getElementById("detailOverlay");
let detailImage = document.getElementById("detailImage");
let detailName = document.getElementById("detailName");
let detailDescription = document.createElement("p");

function showDetail(element) {
    let imageSrc = element.querySelector("img").src;
    let name = element.querySelector("h3").innerText;
    let description = element.nextElementSibling.innerHTML;

    detailImage.src = imageSrc;
    detailName.innerText = name;
    detailDescription.innerHTML = description;

    let detailContent = document.querySelector(".detail-content");
    if (!detailContent.contains(detailDescription)) {
        detailContent.insertBefore(detailDescription, detailContent.lastElementChild);
    }

    detailOverlay.style.display = "block";
    detailOverlay.classList.remove("fade-out");
    detailOverlay.classList.add("fade-in");
}

function hideDetail() {
    detailOverlay.classList.remove("fade-in");
    detailOverlay.classList.add("fade-out");

    setTimeout(() => {
        detailOverlay.style.display = "none";
    }, 500);
}

// Add event listeners to all team members
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        showDetail(this);
    });
});