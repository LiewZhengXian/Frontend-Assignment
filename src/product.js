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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll(".featured");

    sections.forEach(section => {
        const list = section.querySelector(".list");
        const item = section.querySelector(".item");
        const itemWidth = item.offsetWidth;

        section.querySelector(".button--previous").addEventListener("click", function() {
            list.scrollBy({ left: -itemWidth, behavior: "smooth" });
        });

        section.querySelector(".button--next").addEventListener("click", function() {
            list.scrollBy({ left: itemWidth, behavior: "smooth" });
        });

    });
});

document.addEventListener("DOMContentLoaded", function() {
    const newsLetter = document.getElementById("newsletter-section");
    const fitnessProductSection = document.getElementById("fitness-and-product-section");
    const vitaminsSupplementsSection = document.getElementById("vitamins-and-supplements-section");
    const personalTrainingSection = document.getElementById("personal-training-section");

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.01 // Trigger when 10% of the section is visible
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("sup");
                newsLetter.style.animationPlayState = 'running';
                observer1.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fitnessProductSection.style.animationPlayState = 'running';
                observer2.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer3 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                vitaminsSupplementsSection.style.animationPlayState = 'running';
                observer3.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const observer4 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                personalTrainingSection.style.animationPlayState = 'running';
                observer4.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer1.observe(newsLetter);
    observer2.observe(fitnessProductSection);
    observer3.observe(vitaminsSupplementsSection);
    observer4.observe(personalTrainingSection);
});