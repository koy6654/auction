document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
  });

  const topButton = document.querySelector(".top");
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
