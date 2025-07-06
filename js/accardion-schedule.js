const headers = document.querySelectorAll('.schedule__header');

const svgLeft = `
<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.0571 1.91944L2.0712 9.90537M2.0712 9.90537L10.0571 17.8913M2.0712 9.90537L22.6358 9.90534" stroke="#535353" stroke-width="2.6551" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const svgRight = `
<svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7481 17.8892L22.734 9.90323M22.734 9.90323L14.7481 1.91731M22.734 9.90323L2.16937 9.90326" stroke="#535353" stroke-width="2.6551" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

headers.forEach(header => {
  const accordionItem = header.parentElement;
  const contents = accordionItem.querySelectorAll('.schedule__content');
  const svg = header.querySelector('.accordion__svg');
  let btnContainer = null;
  let currentIndex = 0;

  function createButtons() {
    btnContainer = document.createElement('div');
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '20px';
    btnContainer.style.marginLeft = 'auto';
    btnContainer.style.alignItems = 'center';

    const btnLeft = document.createElement('button');
    btnLeft.classList.add('bth-reset', 'schedule__btn');
    btnLeft.innerHTML = svgLeft;

    const btnRight = document.createElement('button');
    btnRight.classList.add('bth-reset', 'schedule__btn');
    btnRight.innerHTML = svgRight;

    btnContainer.appendChild(btnLeft);
    btnContainer.appendChild(btnRight);

    btnLeft.addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + contents.length) % contents.length;
      updateContentVisibility();
    });

    btnRight.addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % contents.length;
      updateContentVisibility();
    });
  }

  function updateContentVisibility() {
    contents.forEach((content, idx) => {
      if (idx === currentIndex) {
        content.classList.add('active');
        // Плавное раскрытие
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.classList.remove('active');
        // Плавное закрытие
        content.style.maxHeight = '0';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';
      }
    });
  }

  header.addEventListener('click', () => {
    const isOpen = Array.from(contents).some(c => c.classList.contains('active'));

    if (isOpen) {
      // Закрываем все
      contents.forEach(c => {
        c.classList.remove('active');
        c.style.maxHeight = '0';
        c.style.paddingTop = '0';
        c.style.paddingBottom = '0';
      });
      header.classList.remove('transparent');
      svg?.classList.remove('rotated');

      if (btnContainer && header.contains(btnContainer)) {
        header.removeChild(btnContainer);
      }
    } else {
      // Открываем первый блок
      currentIndex = 0;
      updateContentVisibility();

      header.classList.add('transparent');
      svg?.classList.add('rotated');

      if (!btnContainer) {
        createButtons();
      }
      if (!header.contains(btnContainer)) {
        header.appendChild(btnContainer);
      }
    }
  });
});
