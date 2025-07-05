const headers = document.querySelectorAll('.schedule__header');

headers.forEach(header => {
  let scrollBeforeOpen = 0; // для хранения позиции скролла

  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const svg = header.querySelector('.accordion__svg');
    const isOpen = content.style.maxHeight;

    if (isOpen) {
      // Закрываем
      content.style.maxHeight = null;
      content.classList.remove('open');
      header.classList.remove('transparent');
      svg?.classList.remove('rotated');

      // Возвращаем скролл на прежнее место
      window.scrollTo({
        top: scrollBeforeOpen,
        behavior: 'smooth'
      });
    } else {
      // Запоминаем позицию скролла перед открытием
      scrollBeforeOpen = window.pageYOffset || document.documentElement.scrollTop;

      // Открываем
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('transparent');
      svg?.classList.add('rotated');

      // Прокручиваем страницу к заголовку аккордеона
      const headerRect = header.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = headerRect.top + scrollTop;

      // Можно добавить небольшой отступ сверху, например 20px
      window.scrollTo({
        top: offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});
