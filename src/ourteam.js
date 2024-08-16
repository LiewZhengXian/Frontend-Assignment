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

document.addEventListener("DOMContentLoaded", function() {
    const ourMissionSection = document.getElementById("our-mission-section-id");
    const ourCoreSection = document.getElementById("our-core-value-id");
    const teamMemberSection = document.getElementById("team-member-section-id");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.01
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ourMissionSection.style.animationPlayState = 'running';
                entry.target.querySelectorAll('.our-mission-section-title, .our-mission-section-desc').forEach(el => {
                    el.style.animationPlayState = 'running';
                });
                observer1.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('h1, h2, .our-core-value-detail > div').forEach(el => {
                    el.style.animationPlayState = 'running';
                });
                observer2.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.team-member-section h1, .team-description, .team-member').forEach(el => {
                    el.style.animationPlayState = 'running';
                });
                observer3.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer1.observe(ourMissionSection);
    observer2.observe(ourCoreSection);
    observer3.observe(teamMemberSection);
});