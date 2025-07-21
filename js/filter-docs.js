/* Filters docs */

const input = document.querySelector('.doctors__search');
const listItems = document.querySelectorAll('.doctors__item');
const autocomplete = document.querySelector('.doctors__autocomplete');

// Кастомный селект
const customSelect = document.querySelector('.doctors__custom-select');
const trigger = customSelect.querySelector('.doctors__select-trigger');
const placeholder = customSelect.querySelector('.doctors__select-placeholder');
const options = customSelect.querySelectorAll('.doctors__select-options li');
const arrow = customSelect.querySelector('.doctors__arrow');
const arrowPath = arrow.querySelector('path');

let selectedSpec = ''; // текущее значение селекта

const doctorsData = Array.from(listItems).map(item => {
  const name = item.querySelector('.doctors__name').textContent.trim();
  const reception = item.querySelector('.doctors__reception').textContent.trim();
  const link = item.querySelector('a').getAttribute('href');
  return { name, reception, element: item, link };
});

function updateVisibility() {
  const query = input.value.toLowerCase().trim();

  doctorsData.forEach(doctor => {
    const nameMatches = doctor.name.toLowerCase().includes(query);
    const specMatches = !selectedSpec || doctor.reception === selectedSpec;

    doctor.element.style.display = (nameMatches && specMatches) ? '' : 'none';
  });
}

function updateAutocomplete() {
  const query = input.value.toLowerCase().trim();
  autocomplete.innerHTML = '';

  if (!query) {
    autocomplete.style.display = 'none';
    return;
  }

  const matches = doctorsData.filter(doc => doc.name.toLowerCase().includes(query));
  if (matches.length) {
    matches.forEach(doc => {
      const li = document.createElement('li');
      li.textContent = doc.name;
      li.addEventListener('click', () => {
        window.location.href = doc.link;
      });
      autocomplete.appendChild(li);
    });
    autocomplete.style.display = 'block';
  } else {
    autocomplete.style.display = 'none';
  }
}

// Поиск
input.addEventListener('input', () => {
  updateVisibility();
  updateAutocomplete();
});

// Автозакрытие автокомплита
document.addEventListener('click', (e) => {
  if (!e.target.closest('.doctors__search-wrap')) {
    autocomplete.style.display = 'none';
  }
});

/* === Кастомный select === */

// Открытие/закрытие селекта
trigger.addEventListener('click', (e) => {
  e.stopPropagation(); // чтобы клик не дошел до документа и не закрыл селект сразу

  const isOpen = customSelect.classList.toggle('open');

  // Меняем бордер у trigger
  trigger.style.borderColor = isOpen ? '#897CFF' : '#C4C3D3';

  // Меняем цвет стрелки
  arrowPath.setAttribute('stroke', isOpen ? '#897CFF' : '#6A6A6A');
});

// Закрытие селекта по клику вне
document.addEventListener('click', (e) => {
  if (!customSelect.contains(e.target)) {
    customSelect.classList.remove('open');

    // Сброс стилей trigger и стрелки
    trigger.style.borderColor = '#C4C3D3';
    arrowPath.setAttribute('stroke', '#6A6A6A');
  }
});

// Выбор опции
options.forEach(option => {
  option.addEventListener('click', () => {
    selectedSpec = option.getAttribute('data-value');
    placeholder.textContent = option.textContent;

    customSelect.classList.remove('open');

    // Сброс стилей trigger и стрелки
    trigger.style.borderColor = '#C4C3D3';
    arrowPath.setAttribute('stroke', '#6A6A6A');

    updateVisibility();
  });
});
