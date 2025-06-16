const headers = document.querySelectorAll('.price__header');

headers.forEach(header => {
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
    } else {
      // Открываем
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('transparent');
      svg?.classList.add('rotated');
    }
  });
});



 

