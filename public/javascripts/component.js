document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".select");

  selects.forEach((select) => {
    const button = select.querySelector(".select-button");
    const dropdown = select.querySelector(".select-dropdown");

    if (!button || !dropdown) return;

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllSelectsExcept(select);
      select.classList.toggle("open");
    });

    dropdown.querySelectorAll("button").forEach((option) => {
      option.addEventListener("click", () => {
        const label = option.textContent.trim();
        const span = button.querySelector("span");
        if (span) {
          span.textContent = label;
          span.classList.remove("placeholder"); // 스타일 전환
        }
        select.classList.remove("open");
      });
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".select.open")
      .forEach((s) => s.classList.remove("open"));
  });

  function closeAllSelectsExcept(current) {
    document.querySelectorAll(".select.open").forEach((s) => {
      if (s !== current) s.classList.remove("open");
    });
  }
});
