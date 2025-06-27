document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 768) {
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
            item.style.display = "block"; // Или "block" — зависит от вёрстки
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    
    tabButtons[0].click();
  }
});



