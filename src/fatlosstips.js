// Loading animation
$(window).on('load', function() {
    $('.loading-spinner').fadeOut('slow');
});

// Flip card
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
        card.querySelector('.flip-card-inner').classList.toggle('flipped');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navbar
$(window).on('scroll', function() {
    var scrollDistance = $(window).scrollTop();
    $('section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.navbar-nav .nav-link.active').removeClass('active');
            $('.navbar-nav .nav-link').eq(i).addClass('active');
        }
    });
}).scroll();

// Back to top button
var backToTopBtn = document.getElementById('back-to-top');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide a');
const totalSlides = slides.length;

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    updateSlidePosition();
}

// Update slide position on window resize
window.addEventListener('resize', updateSlidePosition);
