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