document.addEventListener("DOMContentLoaded", function () {
  const normalHeader = document.querySelector(".header-normal");
  const minHeader = document.querySelector(".header-min");

  minHeader.style.display = "flex";
  const minHeaderHeight = minHeader.offsetHeight;
  minHeader.style.display = "none";

  window.addEventListener("scroll", function () {
    if (window.scrollY > minHeaderHeight) {
      normalHeader.style.display = "none";
      // document.querySelector(".main-menu-popup").style.display = 'none';
      minHeader.style.display = "flex";
    } else {
      normalHeader.style.display = "flex";
      minHeader.style.display = "none";
      // document.querySelector(".main-menu-popup.min").style.display = 'none';
    }
  });

  // dropdown features
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

  // main-menu-popup features
  const menuItems = document.querySelectorAll(".menu-area-item");
  const mainMenuPopup = document.querySelector(".main-menu-popup");
  const mainMenuPopupMin = document.querySelector(".main-menu-popup.min");
  const menuArea = document.querySelector(".menu-area");
  const delayMs = 100;
  let timeout;

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      clearTimeout(timeout);
      mainMenuPopup.style.display = "flex";
      mainMenuPopupMin.style.display = "flex";
    });
  });

  menuArea.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      mainMenuPopup.style.display = "none";
      mainMenuPopupMin.style.display = "none";
    }, delayMs);
  });

  mainMenuPopup.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
  });

  mainMenuPopupMin.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
  });

  mainMenuPopup.addEventListener("mouseleave", () => {
    mainMenuPopup.style.display = "none";
  });

  mainMenuPopupMin.addEventListener("mouseleave", () => {
    mainMenuPopupMin.style.display = "none";
  });

  const closeButton = mainMenuPopup.querySelector(".support button");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mainMenuPopup.style.display = "none";
    });
  }

  const closeButtonMin = mainMenuPopupMin.querySelector(".support button");
  if (closeButtonMin) {
    closeButtonMin.addEventListener("click", () => {
      mainMenuPopupMin.style.display = "none";
    });
  }
});
