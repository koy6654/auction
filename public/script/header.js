document.addEventListener("DOMContentLoaded", function () {
    const normalHeader = document.querySelector(".header-normal");
    const minHeader = document.querySelector(".header-min");

    minHeader.style.display = "block";
    const minHeaderHeight = minHeader.offsetHeight;
    minHeader.style.display = "none";

    window.addEventListener("scroll", function () {
        if (window.scrollY > minHeaderHeight) {
        normalHeader.style.display = "none";
        minHeader.style.display = "block";
        } else {
        normalHeader.style.display = "block";
        minHeader.style.display = "none";
        }
    });
});