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

  function setupPopup(toggleId, popupId) {
    const toggleBtn = document.getElementById(toggleId);
    const popup = document.getElementById(popupId);

    toggleBtn.addEventListener("click", () => {
      popup.style.display = popup.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
      if (!toggleBtn.contains(e.target) && !popup.contains(e.target)) {
        popup.style.display = "none";
      }
    });
  }

  setupPopup("benefitsToggleBtn", "benefitsPopup");
  setupPopup("loggedInToggleBtn", "loggedInPopup");
  setupPopup("categoryToggleBtn", "categoryPopup");
  setupPopup("min-categoryToggleBtn", "min-categoryPopup");
  setupPopup("applyForTrialToggleBtn", "applyForTrialPopup");

  const menuItems = document.querySelectorAll(".menu-area-item");
  const mainMenuPopup = document.querySelector(".main-menu-popup");
  const menuArea = document.querySelector(".menu-area");
  let timeout;

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      mainMenuPopup.style.display = "flex";
    });
  });

  menuArea.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      mainMenuPopup.style.display = "none";
    }, 100);
  });

  mainMenuPopup.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
  });

  mainMenuPopup.addEventListener("mouseleave", () => {
    mainMenuPopup.style.display = "none";
  });

  const closeButton = mainMenuPopup.querySelector(".support button");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mainMenuPopup.style.display = "none";
    });
  }
});
