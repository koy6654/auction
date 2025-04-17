document.addEventListener("DOMContentLoaded", function () {
  /**
   * @description lnb(Local Navigation Bar) > 테마 핸들러
   * - light, dark 로 토글된다
   * @see {@link public/stylesheets/02_theme.css} - css 컬러 코드를 참조하여 토글한다
   */
  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
  });

  /**
   * @description lnb > TOP 버튼
   * - 스크롤을 모니터 상의 좌표계 y: 0 으로 이동 시킨다, 이 때, smooth 애니메이션 처리한다
   */
  const topButton = document.querySelector(".top");
  topButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /**
   * @description lnb > `알림, 관심, 최근 본` 핸들러
   * - 오른쪽에서 왼쪽으로 나타난다
   * - 콘텐츠가 사라질 때, 바로 사라지면 이질감이 드므로(예를 들어, display: none) `transitionend` 이벤트를 감지하여 트랜지션이 모두 종료되면 사라지는것으로 처리한다
   * - 이미 표시된 콘텐츠가 있다면, 새로 표시 될 콘텐츠를 override 한다
   */
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("lnbBackdrop");

  const sidebarMap = {
    lnbAlarmBtn: "lnbSidebarAlaram",
    lnbFavoriteBtn: "lnbSidebarFavorite",
    lnbRecentBtn: "lnbSidebarRecent",
  };

  let currentPopup = null;

  Object.entries(sidebarMap).forEach(([btnId, popupId]) => {
    const button = document.getElementById(btnId);
    const popup = document.getElementById(popupId);

    button.addEventListener("click", () => {
      const isOpen = sidebar.classList.contains("open");
      const isThisPopupOpen = popup.style.display === "flex";

      if (isOpen && isThisPopupOpen) {
        // close
        sidebar.classList.remove("open");
        backdrop.classList.remove("show");
        currentPopup = popup;
      } else {
        // 다른 메뉴 클릭 시, 기존 콘텐츠를 숨긴다
        if (currentPopup && currentPopup !== popup) {
          currentPopup.style.display = "none";
        }

        // open
        sidebar.classList.add("open");
        popup.style.display = "flex";
        backdrop.classList.add("show");

        currentPopup = popup;
      }
    });
  });

  // transitionend 이벤트로 popup 을 제거한다
  sidebar.addEventListener("transitionend", () => {
    if (!sidebar.classList.contains("open") && currentPopup) {
      currentPopup.style.display = "none";
      currentPopup = null;
    }
  });

  // 클릭 이벤트가 발생한 경우, sidebar 이외의 영역이면 sidebar와 backdrop 을 제거한다
  document.addEventListener("click", (e) => {
    const isInsideSidebar = sidebar.contains(e.target);
    const isAnyButton = Object.keys(sidebarMap).some((id) =>
      document.getElementById(id).contains(e.target)
    );

    if (!isInsideSidebar && !isAnyButton) {
      sidebar.classList.remove("open");
      backdrop.classList.remove("show");

      currentPopup = document.querySelector(
        ".sidebar .content[style*='display: flex']"
      );
    }
  });
});
