document.addEventListener("DOMContentLoaded", function () {
  const normalHeader = document.querySelector(".header-normal");
  const minHeader = document.querySelector(".header-min");

  minHeader.style.display = "flex";
  const minHeaderHeight = minHeader.offsetHeight;
  minHeader.style.display = "none";

  window.addEventListener("scroll", function () {
    if (window.scrollY > minHeaderHeight) {
      normalHeader.style.display = "none";
      minHeader.style.display = "flex";
    } else {
      normalHeader.style.display = "flex";
      minHeader.style.display = "none";
    }
  });

  const toggleBtn = document.getElementById("benefitsToggleBtn");
  const popup = document.getElementById("benefitsPopup");

  toggleBtn.addEventListener("click", () => {
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !popup.contains(e.target)) {
      popup.style.display = "none";
    }
  });
});
