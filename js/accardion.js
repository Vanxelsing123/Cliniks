const headers = document.querySelectorAll('.price__header');

headers.forEach(header => {
  let scrollBeforeOpen = 0;

  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const svg = header.querySelector('.accordion__svg'); 
    const isOpen = content.classList.contains('open'); 

    if (isOpen) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      header.classList.remove('transparent');
      svg?.classList.remove('rotated');

      window.scrollTo({
        top: scrollBeforeOpen,
        behavior: 'smooth'
      });
    } else {
      scrollBeforeOpen = window.pageYOffset || document.documentElement.scrollTop;

      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('transparent');
      svg?.classList.add('rotated');

      const headerRect = header.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = headerRect.top + scrollTop;

      window.scrollTo({
        top: offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});
