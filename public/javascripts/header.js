document.addEventListener("DOMContentLoaded", function () {
  /**
   * @description browser scroll header handler
   * - 스크롤이 될 때, `.header-min` 높이에 도달하면 `.header-normal` 을 감추고 `.header-min` 을 표시함
   */
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

  /**
   * @function setupHeaderMultiPopup
   * @description 헤더메뉴의 토글 핸들러
   * @param {string[]} toggleIds - 토글 동작 시킬 DOM 엘리먼트 버튼 id
   * @param {string[]} popupIds - 토글이 동작될때 엘리먼트 스타일을 콘트롤 할 id
   */
  function setupHeaderMultiPopup(toggleIds = [], popupIds = []) {
    const toggleButtons = toggleIds.map((id) => document.getElementById(id));
    const popups = popupIds.map((id) => document.getElementById(id));

    toggleButtons.forEach((toggleBtn) => {
      toggleBtn.addEventListener("click", () => {
        const isVisible =
          popups[0].classList.contains("show") ||
          popups[0].style.display === "flex";

        popups.forEach((popup) => {
          const isBackdrop = popup.classList.contains("backdrop");
          if (isBackdrop) {
            if (isVisible) {
              popup.classList.remove("show");
            } else {
              popup.classList.add("show");
            }
          } else {
            popup.style.display = isVisible ? "none" : "flex";
          }
        });
      });
    });

    document.addEventListener("click", (e) => {
      const clickedOutside =
        !toggleButtons.some((btn) => btn.contains(e.target)) &&
        !popups.some((popup) => popup.contains(e.target));
      if (clickedOutside) {
        popups.forEach((popup) => {
          if (popup.classList.contains("backdrop")) {
            popup.classList.remove("show");
          } else {
            popup.style.display = "none";
          }
        });
      }
    });
  }

  // 헤더 토글 호출
  setupHeaderMultiPopup(["benefitsToggleBtn"], ["benefitsPopup"]); // 헤더 노멀 > 회원혜택 > 드롭다운
  setupHeaderMultiPopup(["loggedInToggleBtn"], ["loggedInPopup"]); // 헤더 노멀 > OOO님 > 드롭다운
  setupHeaderMultiPopup(["categoryToggleBtn"], ["categoryPopup"]); // 헤더 노멀 > 사건번호 > 드롭다운
  setupHeaderMultiPopup(["min-categoryToggleBtn"], ["min-categoryPopup"]); // 헤더 최소화 > 사건번호 > 드롭다운
  setupHeaderMultiPopup(["applyForTrialToggleBtn"], ["applyForTrialPopup"]); // 헤더 노멀 > 무료체험신청 > 배너 표시(이미지)

  /**
   * @description 헤더 > 메인메뉴 핸들러
   * - `경매, 공매, 지도검색 ...` 메뉴에 마우스 오버시 이 메뉴가 나타난다
   * @caution
   * - 마우스 진입 후, `.menu-area` 에 머무르는 동안 메뉴가 계속 표시된다
   * - 마우스가 `.menu-area` 영역을 벗어나고 200ms 동안은 메뉴를 감추지 않는다
   */
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

  mainMenuPopup.addEventListener("mouseenter", () => clearTimeout(timeout));
  mainMenuPopupMin.addEventListener("mouseenter", () => clearTimeout(timeout));

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

  /**
   * @description 헤더 > 사건번호가 표기된 검색박스 핸들러
   * @rules
   * - 검색박스 > 인풋박스(input) 선택하면 `.search-popup` 의 `.type-has-search-word` (최근검색어를 포함) 한 검색팝업이 표시된다
   * - 검색박스 > 돋보기 버튼(button)을 선택하면 `.search-popup` 의 `.type-only-result` (검색결과만 포함) 한 검색팝업이 표시된다
   * @caution
   * - (공통) `.under-prepare`의 `.backdrop`은 항상 표시된다
   * - `.backdrop` 은 css의 pointer-events 속성을 none, auto 로 설정해가며, 하위 DOM 선택 영역에 방해가 되지 않도록 이벤트 버블링을 제어하도록 되어있다
   * - 컴포넌트로 개발하는 경우, 예를 들어) 리액트의 경우 헤더 컴포넌트안에 `.search-popup` 뎁스 한단계 아래쪽으로 <Backdrop /> 을 한 개 만들어 두어야 한다
   * - 컴포넌트로 개발하는 경우, `.search-popup` 의  `.type-has-search-word`, `.type-only-result` 두 가지 타입에서 `.recent-content-lists` 로 설계된
   *   리스트 내용물을 재활용하여 사용할 수 있도록 작업하였으나, 현재 이 팝업구조가 복잡해질 우려가 있으므로,
   *   <SearchPopupHasSearchWord />, <SearchPopupOnlyResult /> 로 나뉘어 개발할 것을 고려 할 만 하다
   */

  // 헤더 노멀 > 인풋박스 선택 (최근검색어를 포함)
  setupHeaderMultiPopup(
    ["typeHasSearchWordInput"],
    ["typeHasSearchWordBackdrop", "typeHasSearchWordPopup"]
  );

  // 헤더 최소화 > 인풋박스 선택 (최근검색어를 포함)
  setupHeaderMultiPopup(
    ["typeHasSearchWordInput2"],
    ["typeHasSearchWordBackdrop2", "typeHasSearchWordPopup2"]
  );

  // 헤더 노멀 > 검색 버튼 (검색 결과만)
  setupHeaderMultiPopup(
    ["typeHasSearchWordBtn"],
    ["typeOnlyResultBackdrop", "typeOnlyResultSearchPopup"]
  );

  // 헤더 최소화 > 검색 버튼 (검색 결과만)
  setupHeaderMultiPopup(
    ["typeHasSearchWordBtn2"],
    ["typeOnlyResultBackdrop2", "typeOnlyResultSearchPopup2"]
  );

  // 헤더 > 검색박스의 닫기 버튼 (공통)
  [
    ["#typeHasSearchWordBackdrop", "#typeHasSearchWordPopupCloseBtn"],
    ["#typeOnlyResultBackdrop", "#typeOnlyResultSearchPopupCloseBtn"],
    ["#typeHasSearchWordBackdrop2", "#typeHasSearchWordPopupCloseBtn2"],
    ["#typeOnlyResultBackdrop2", "#typeOnlyResultSearchPopupCloseBtn2"],
  ].forEach(([backdropSel, closeBtnSel]) => {
    document
      .querySelectorAll(`${backdropSel}, ${closeBtnSel}`)
      .forEach((el) => {
        el.addEventListener("click", () => {
          const backdrop = document.querySelector(backdropSel);
          const popup = document.querySelector(
            closeBtnSel.replace("CloseBtn", "")
          );
          if (backdrop) backdrop.classList.remove("show");
          if (popup) popup.style.display = "none";
        });
      });
  });
});
