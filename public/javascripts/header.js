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
  function setupMultiPopup(toggleIds = [], popupIds = []) {
    const toggleButtons = toggleIds.map((id) => document.getElementById(id));
    const popups = popupIds.map((id) => document.getElementById(id));

    toggleButtons.forEach((toggleBtn) => {
      toggleBtn.addEventListener("click", () => {
        const isVisible = popups[0].style.display === "flex";
        popups.forEach((popup) => {
          popup.style.display = isVisible ? "none" : "flex";
        });
      });
    });

    document.addEventListener("click", (e) => {
      const clickedOutside =
        !toggleButtons.some((btn) => btn.contains(e.target)) &&
        !popups.some((popup) => popup.contains(e.target));
      if (clickedOutside) {
        popups.forEach((popup) => {
          popup.style.display = "none";
        });
      }
    });
  }

  setupMultiPopup(["benefitsToggleBtn"], ["benefitsPopup"]);
  setupMultiPopup(["loggedInToggleBtn"], ["loggedInPopup"]);
  setupMultiPopup(["categoryToggleBtn"], ["categoryPopup"]);
  setupMultiPopup(["min-categoryToggleBtn"], ["min-categoryPopup"]);
  setupMultiPopup(["applyForTrialToggleBtn"], ["applyForTrialPopup"]);

  // main-menu-popup features
  const menuItems = document.querySelectorAll(".menu-area-item");
  const mainMenuPopup = document.querySelector(".main-menu-popup");
  const mainMenuPopupMin = document.querySelector(".main-menu-popup.min");
  const menuArea = document.querySelector(".menu-area");
  const delayMs = 200;
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

  const closeButton = mainMenuPopup.querySelector(".support .close");
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

  // search-popup: `type has search word` handle
  // input
  setupMultiPopup(
    ["typeHasSearchWordInput"],
    ["typeHasSearchWordBackdrop", "typeHasSearchWordPopup"]
  );

  document
    .querySelectorAll(
      "#typeHasSearchWordBackdrop, #typeHasSearchWordPopupCloseBtn"
    )
    .forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("#typeHasSearchWordBackdrop").style.display =
          "none";
        document.querySelector("#typeHasSearchWordPopup").style.display =
          "none";
      });
    });

  // search button
  setupMultiPopup(
    ["typeHasSearchWordBtn"],
    ["typeOnlyResultBackdrop", "typeOnlyResultSearchPopup"]
  );

  document
    .querySelectorAll(
      "#typeOnlyResultBackdrop, #typeOnlyResultSearchPopupCloseBtn"
    )
    .forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("#typeOnlyResultBackdrop").style.display =
          "none";
        document.querySelector("#typeOnlyResultSearchPopup").style.display =
          "none";
      });
    });

  // search-popup: `type has search word` handle
  // input
  setupMultiPopup(
    ["typeHasSearchWordInput2"],
    ["typeHasSearchWordBackdrop2", "typeHasSearchWordPopup2"]
  );

  document
    .querySelectorAll(
      "#typeHasSearchWordBackdrop2, #typeHasSearchWordPopupCloseBtn2"
    )
    .forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("#typeHasSearchWordBackdrop2").style.display =
          "none";
        document.querySelector("#typeHasSearchWordPopup2").style.display =
          "none";
      });
    });

  setupMultiPopup(
    ["typeHasSearchWordBtn2"],
    ["typeOnlyResultBackdrop2", "typeOnlyResultSearchPopup2"]
  );

  document
    .querySelectorAll(
      "#typeOnlyResultBackdrop2, #typeOnlyResultSearchPopupCloseBtn2"
    )
    .forEach((el) => {
      el.addEventListener("click", () => {
        document.querySelector("#typeOnlyResultBackdrop2").style.display =
          "none";
        document.querySelector("#typeOnlyResultSearchPopup2").style.display =
          "none";
      });
    });
});
