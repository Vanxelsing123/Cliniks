document.addEventListener('DOMContentLoaded', () => {
  // Получаем основные элементы блока кардиологии
  const cardiology = document.querySelector('.programs__cardiology');
  const svg = cardiology.querySelector('.programs__svg');
  const svgMobile = cardiology.querySelector('.programs__svg--mobile');
  const title = cardiology.querySelector('.programs__children-title');
  const buttons = cardiology.querySelector('.programs__buttons');
  const details = cardiology.querySelector('.programs__details');
  const closeBtn = cardiology.querySelector('.programs__close-btn');

  // Создаем модальное окно один раз и добавляем в DOM
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal__content">
      <h2 class="modal__title">Запрос отправлен</h2>
      <p class="modal__text">Наш оператор свяжется с Вами!</p>
      <div class="modal__content-wrap">
        <div class="modal__content-wraps">
          <!-- SVG и текст для рабочего времени -->
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25.6549" cy="25.9513" r="17.9967" stroke="#897CFF" stroke-width="2.66" />
            <path d="M35.0303 25.9513H25.9053C25.7672 25.9513 25.6553 25.8394 25.6553 25.7013V18.6597" stroke="#897CFF" stroke-width="2.66" stroke-linecap="round" />
          </svg>
          <p class="modal__texts">В рабочие часы<br><span>мы перезвоним через несколько минут</span></p>
        </div>
        <div class="modal__content-wraps">
          <!-- SVG и текст для нерабочего времени -->
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.887 11.7329C22.6819 10.5993 25.7488 10.3146 28.7046 10.9142C31.6604 11.5139 34.3739 12.9713 36.506 15.1045C38.6382 17.2376 40.0943 19.9518 40.6926 22.9079C41.2908 25.864 41.0046 28.9308 39.8697 31.7251" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36.5034 36.8008C33.626 39.6783 29.7233 41.2948 25.654 41.2948C21.5846 41.2948 17.682 39.6783 14.8045 36.8008C11.927 33.9233 10.3105 30.0207 10.3105 25.9513C10.3105 21.882 11.927 17.9793 14.8045 15.1019" stroke="#897CFF" stroke-width="2.64641" />
            <path d="M41.2783 41.5764L10.0283 10.3264" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M38.0314 8.21951C39.3155 8.56358 40.4863 9.23959 41.4264 10.1796C42.3664 11.1196 43.0424 12.2905 43.3864 13.5746" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
          </svg>
          <p class="modal__texts">В нерабочие часы<br><span>мы перезвоним на следующий день</span></p>
        </div>
        <div class="modal__content-wraps">
          <!-- SVG и текст для листа ожидания -->
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.2389 28.0347V32.2014C40.2389 38.094 40.2389 41.0402 38.4083 42.8708C36.5778 44.7014 33.6315 44.7014 27.7389 44.7014H23.5723C17.6797 44.7014 14.7334 44.7014 12.9028 42.8708C11.0723 41.0402 11.0723 38.094 11.0723 32.2014V19.7014C11.0723 13.8089 11.0723 10.8626 12.9028 9.032C14.7334 7.20142 17.6797 7.20142 23.5723 7.20142H25.6556" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
            <path d="M38.1553 7.20142L38.1553 19.7014" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
            <path d="M44.4053 13.4514L31.9053 13.4514" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
            <path d="M19.4053 28.0347L31.9053 28.0347" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
            <path d="M19.4053 19.7014L27.7386 19.7014" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
            <path d="M19.4053 36.3682L27.7386 36.3682" stroke="#897CFF" stroke-width="2.64641" stroke-linecap="round" />
          </svg>
          <p class="modal__texts">По записи в лист ожидания<br><span>мы перезвоним, если освободится место</span></p>
        </div>
        <button class="modal__button bth-reset">
          Понятно
          <svg class="modal__content-wraps-svg" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
            <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445" stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);

  // Кнопка "Понятно" закрывает модалку
  const modalCloseBtn = modal.querySelector('button');
  modalCloseBtn.onclick = () => modal.style.display = 'none';

  // Закрываем модалку при клике вне содержимого
  modal.onclick = e => {
    if (e.target === modal) modal.style.display = 'none';
  };

  // Закрываем модалку при нажатии Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // Изначально скрываем детали и кнопку закрытия
  closeBtn.style.display = 'none';
  details.style.display = 'none';

  // Объект с подробным описанием каждой программы
  const programDetails = {
    arrhythmia: `
      <h3>Аритмия, тахикардия</h3>
      <p>Состав комплексной <br>программы:</p>
      <ul>
        <li>Консультация врача кардиолога;</li>
        <li>ЭКГ с расшифровкой;</li>
        <li>Холтеровское мониторирование ЭКГ;</li>
        <li>Клинический анализ крови с лейкоформулой + СОЭ;</li>
        <li>Анализ электролитного состава крови: Натрий(Na+), Калий(K+), Хлор(Cl+);</li>
        <li>Б/х анализ крови: АЛТ, АСТ;</li>
        <li>Гормоны щитовидной железы (расширенная): Т3своб., Т4своб., ТТГ, АТ-ТГ, АТ-ТПО;</li>
        <li>Забор крови из вены;</li>
        <li>Консультация врача кардиолога по результатам обследования.</li>
      </ul>
      <p class="programs__medical-wrap-text">Стоимость</p>
      <span class="programs__buy-button">7 900 ₽</span>
      <button class="programs__buy-btn bth-reset">
        <a class="programs__medical-wrap-price-link" href="#">Купить
          <svg class="programs__medical-wrap-price-svg" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
            <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445" stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </button>`,
    hypertension: `
      <h3>Гипертония</h3>
      <p>Состав программы:</p>
      <ul>
        <li>Консультация врача кардиолога;</li>
        <li>Измерение артериального давления;</li>
        <li>ЭКГ с расшифровкой;</li>
        <li>Анализы крови и мочи;</li>
        <li>Консультация по коррекции образа жизни.</li>
      </ul>
      <p class="programs__medical-wrap-text">Стоимость</p>
      <span class="programs__buy-button">6 500 ₽</span>
      <button class="programs__buy-btn bth-reset">
        <a class="programs__medical-wrap-price-link" href="#">Купить
          <svg class="programs__medical-wrap-price-svg" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
            <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445" stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </button>`,
    ischemic: `
      <h3>Ишемическая болезнь сердца</h3>
      <p>Состав программы:</p>
      <ul>
        <li>Консультация кардиолога;</li>
        <li>ЭКГ с нагрузкой;</li>
        <li>Эхокардиография;</li>
        <li>Анализы крови;</li>
        <li>Консультация по лечению и профилактике.</li>
      </ul>
      <p class="programs__medical-wrap-text">Стоимость</p>
      <span class="programs__buy-button">8 200 ₽</span>
      <button class="programs__buy-btn bth-reset">
        <a class="programs__medical-wrap-price-link" href="#">Купить
          <svg class="programs__medical-wrap-price-svg" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
            <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445" stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </button>`,
    'full-checkup': `
      <h3>Полное кардиообследование</h3>
      <p>Состав программы:</p>
      <ul>
        <li>Общий прием кардиолога;</li>
        <li>ЭКГ и Холтер ЭКГ;</li>
        <li>Эхокардиография;</li>
        <li>Нагрузочные тесты;</li>
        <li>Полный спектр лабораторных исследований;</li>
        <li>Индивидуальная консультация и рекомендации.</li>
      </ul>
      <p class="programs__medical-wrap-text">Стоимость</p>
      <span class="programs__buy-button">15 000 ₽</span>
      <button class="programs__buy-btn bth-reset">
        <a class="programs__medical-wrap-price-link" href="#">Купить
          <svg class="programs__medical-wrap-price-svg" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
            <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445" stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </button>`
  };

  // Обработчик клика на кнопки выбора программ
  buttons.onclick = e => {
    if (!e.target.classList.contains('programs__btn')) return; // Проверяем, что клик по кнопке
    const key = e.target.dataset.program; // Получаем ключ программы из data-атрибута
    if (!programDetails[key]) return; // Если описание не найдено, ничего не делаем

    // Скрываем основные элементы блока для показа деталей
    [svgMobile, svg, title, buttons].forEach(el => el.style.display = 'none');

    // Вставляем описание выбранной программы
    details.innerHTML = programDetails[key];

    // Для мобильных устройств корректируем стили заголовка и списка
    if (window.innerWidth <= 768) {
      const h3 = details.querySelector('h3');
      const ul = details.querySelector('ul');
      if (h3) {
        h3.style.fontSize = '30px';
        h3.style.maxWidth = '300px';
      }
      if (ul) ul.style.maxWidth = '313px';
      details.style.maxWidth = '300px';
    }

    // Показываем блок с деталями и кнопку закрытия
    details.style.display = 'block';
    closeBtn.style.display = 'flex';
  };

  // Обработчик кнопки закрытия деталей программы
  closeBtn.onclick = () => {
    // Возвращаем видимость основным элементам
    [svgMobile, svg, title].forEach(el => el.style.display = '');
    buttons.style.display = 'flex';

    // Скрываем детали и очищаем их содержимое
    details.style.display = 'none';
    details.innerHTML = '';

    // Скрываем кнопку закрытия
    closeBtn.style.display = 'none';
  };

  // Обработка кликов внутри блока деталей
  details.onclick = e => {
    // Проверяем, был ли клик на кнопке "Купить"
    let t = e.target;
    while (t && t !== details) {
      if (t.classList?.contains('programs__buy-btn')) {
        e.preventDefault(); // Отменяем переход по ссылке
        modal.style.display = 'flex'; // Показываем модальное окно
        break;
      }
      t = t.parentNode; // Поднимаемся вверх по DOM в поисках нужного элемента
    }
  };

  // При наведении на правый блок кардиологии деактивируем левый блок
  const leftBlock = document.querySelector('.programs__children');
  const rightBlock = cardiology;

  rightBlock.onmouseenter = () => leftBlock.classList.add('inactive');
  rightBlock.onmouseleave = () => leftBlock.classList.remove('inactive');
});

