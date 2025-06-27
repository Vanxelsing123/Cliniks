document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".news__tab-btn");
  const newsItems = document.querySelectorAll(".news__item");

  tabButtons.forEach(button => {
    button.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      // Меняем активную кнопку
      tabButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      // Показываем только нужные карточки
      newsItems.forEach(item => {
        if (item.getAttribute("data-tab") === tabId) {
          item.style.display = "block"; // или "block" — в зависимости от твоей верстки
        } else {
          item.style.display = "none";
        }
        
      });
    });
  });
  tabButtons[0].click();
});


