const headers = document.querySelectorAll('.price__header');
let scrollBeforeOpen = 0;

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const svg = header.querySelector('.accordion__svg');
    const isOpen = content.classList.contains('open');

    const wasAnotherOpen = [...headers].some(h => 
      h !== header && h.nextElementSibling.classList.contains('open')
    );

    if (isOpen) {
      // Закрываем текущий
      content.style.maxHeight = null;
      content.classList.remove('open');
      header.classList.remove('transparent');
      svg?.classList.remove('rotated');

      window.scrollTo({
        top: scrollBeforeOpen,
        behavior: 'smooth'
      });
    } else {
      // Закрываем все остальные
      headers.forEach(otherHeader => {
        const otherContent = otherHeader.nextElementSibling;
        const otherSvg = otherHeader.querySelector('.accordion__svg');

        otherContent.style.maxHeight = null;
        otherContent.classList.remove('open');
        otherHeader.classList.remove('transparent');
        otherSvg?.classList.remove('rotated');
      });

      // Открываем текущий
      scrollBeforeOpen = window.pageYOffset || document.documentElement.scrollTop;

      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('transparent');
      svg?.classList.add('rotated');

      // Скроллим только если до этого не было открыто других
      if (!wasAnotherOpen) {
        const headerRect = header.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = headerRect.top + scrollTop;

        window.scrollTo({
          top: offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }
  });
});
