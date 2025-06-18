/* Filters docs */

const input = document.querySelector('.doctors__search');
  const select = document.querySelector('.doctors__select');
  const listItems = document.querySelectorAll('.doctors__item');
  const autocomplete = document.querySelector('.doctors__autocomplete');

 
  const doctorsData = Array.from(listItems).map(item => {
    const name = item.querySelector('.doctors__name').textContent.trim();
    const reception = item.querySelector('.doctors__reception').textContent.trim();
    const link = item.querySelector('a').getAttribute('href');
    return { name, reception, element: item, link };
  });

  function updateVisibility() {
    const query = input.value.toLowerCase().trim();
    const selectedSpec = select.value;

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
          window.location.href = doc.link; // 
        });
        autocomplete.appendChild(li);
      });
      autocomplete.style.display = 'block';
    } else {
      autocomplete.style.display = 'none';
    }
  }

  input.addEventListener('input', () => {
    updateVisibility();
    updateAutocomplete();
  });

  select.addEventListener('change', updateVisibility);

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.doctors__search-wrap')) {
      autocomplete.style.display = 'none';
    }
  });