document.addEventListener('DOMContentLoaded', () => {
  const cardiologyBlock = document.querySelector('.programs__cardiology');
  const svg = cardiologyBlock.querySelector('.programs__svg');
  const title = cardiologyBlock.querySelector('.programs__children-title');
  const buttonsContainer = cardiologyBlock.querySelector('.programs__buttons');
  const details = cardiologyBlock.querySelector('.programs__details');
  const closeBtn = cardiologyBlock.querySelector('.programs__close-btn');

  // Создаем модальное окно динамически
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.cssText = `
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0; top: 0; width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.5);
    justify-content: center;
    align-items: center;
  `;
  modal.innerHTML = `
    <div style="
      background: white; padding: 25px 30px; border-radius: 8px;
      max-width: 400px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      position: relative;
    ">
      <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 15px;">Запрос отправлен</h2>
      <p>Наш оператор свяжется с Вами!</p>
      <p><strong>В рабочие часы</strong><br>мы перезвоним через несколько минут</p>
      <p><strong>В нерабочие часы</strong><br>мы перезвоним на следующий день</p>
      <p><strong>По записи в лист ожидания</strong><br>мы перезвоним, если освободится место</p>
      <button style="
        margin-top: 20px; background-color: #007bff; border: none; padding: 10px 24px;
        color: white; font-size: 16px; border-radius: 5px; cursor: pointer;
      ">Понятно</button>
    </div>
  `;
  document.body.appendChild(modal);

  const modalContent = modal.querySelector('div');
  const modalCloseBtn = modal.querySelector('button');

  modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Закрытие модального окна при клике вне содержимого
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Закрытие модального окна при нажатии Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // Изначально скрываем кнопку закрытия и детали
  closeBtn.style.display = 'none';
  details.style.display = 'none';

  const programDetails = {
    arrhythmia: `
      <h3>Аритмия, тахикардия</h3>
      <p>Состав комплексной программы:</p>
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
      </button>
    `,
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
      </button>
    `,
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
      </button>
    `,
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
      </button>
    `
  };

  buttonsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('programs__btn')) {
      const programKey = e.target.dataset.program;
      if (!programDetails[programKey]) return;

      // Скрываем исходные элементы
      svg.style.display = 'none';
      title.style.display = 'none';
      buttonsContainer.style.display = 'none';

      // Показываем и наполняем блок с деталями
      details.innerHTML = programDetails[programKey];
      details.style.display = 'block';

      // Показываем кнопку закрытия
      closeBtn.style.display = 'flex';
    }
  });

  // Обработка клика по кнопке закрытия деталей
  closeBtn.addEventListener('click', () => {
    svg.style.display = '';
    title.style.display = '';
    buttonsContainer.style.display = 'flex';

    details.style.display = 'none';
    details.innerHTML = '';

    closeBtn.style.display = 'none';
  });

  // Делегируем событие клика по кнопкам "Купить" внутри details
  details.addEventListener('click', (e) => {
    let target = e.target;

    while (target && target !== details) {
      if (target.classList && target.classList.contains('programs__buy-btn')) {
        e.preventDefault();
        modal.style.display = 'flex';
        break;
      }
      target = target.parentNode;
    }
  });
});


// деактивация левого блока
const leftBlock = document.querySelector('.programs__children');
const rightBlock = document.querySelector('.programs__cardiology');

rightBlock.addEventListener('mouseenter', () => {
  leftBlock.classList.add('inactive');
});

rightBlock.addEventListener('mouseleave', () => {
  leftBlock.classList.remove('inactive');
});


