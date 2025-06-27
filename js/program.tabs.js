function initMobileTabs() {
  const tabButtons = document.querySelectorAll('.programs__tab-btn');
  const tabItems = document.querySelectorAll('.programs__medical-item');

  function activateTab(index) {
    tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      tabItems[i].classList.toggle('active', i === index);
    });
  }

  function updateTabsBasedOnWidth() {
    if (window.innerWidth < 1025) {
      // Включаем табы: показываем только активный
      const activeIndex = document.querySelector('.programs__tab-btn.active')?.dataset.tab || 0;
      activateTab(Number(activeIndex));
    } else {
      // На десктопе: показываем всё
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabItems.forEach(item => item.classList.add('active'));
    }
  }

  // Обработка кликов
  tabButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth < 1025) {
        activateTab(index);
      }
    });
  });

  // Инициализация
  window.addEventListener('DOMContentLoaded', updateTabsBasedOnWidth);
  window.addEventListener('resize', updateTabsBasedOnWidth);
}

initMobileTabs();
