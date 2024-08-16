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

document.getElementById("name").setAttribute("placeholder", "Name");
document.getElementById("email").setAttribute("placeholder", "Email Address");

document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector(".list");
    const item = document.querySelector(".item");
    const itemWidth = item.offsetWidth;

    document.querySelector(".button--previous").addEventListener("click", function() {
        list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    });

    document.querySelector(".button--next").addEventListener("click", function() {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    });

    // Auto-scroll every 5 seconds
    setInterval(function() {
        list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }, 10000);
});

document.addEventListener("DOMContentLoaded", function() {
    const featuredSection = document.getElementById("featured-section");
    const foodAndNutrition = document.getElementById("food-and-nutrition-section");
    const recipe = document.getElementById("recipes-section");
    const newsLetter = document.getElementById("newsletter-section");

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.01 // Trigger when 10% of the section is visible
    };

    const observer4 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("sup");
                newsLetter.style.animationPlayState = 'running';
                observer4.unobserve(entry.target);
            }
        });
    }, observerOptions);

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
                foodAndNutrition.style.animationPlayState = 'running';
                observer2.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                recipe.style.animationPlayState = 'running';
                observer3.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer1.observe(featuredSection);
    observer2.observe(foodAndNutrition);
    observer3.observe(recipe);
    observer4.observe(newsLetter);
});