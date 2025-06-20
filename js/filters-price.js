document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('#search');
  const checkboxes = document.querySelectorAll('.category-checkbox');
  const items = document.querySelectorAll('.price__item');
  const autocompleteList = document.querySelector('#autocomplete-list');

  if (!searchInput || !checkboxes.length || !items.length) {
    console.error('❌ Один из элементов не найден: #search, .category-checkbox, .price__item');
    return;
  }

  function filterItems() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategories = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    items.forEach(item => {
      const titleEl = item.querySelector('.price__header');
      const title = titleEl ? titleEl.textContent.toLowerCase() : '';
      const category = item.dataset.category;

      const matchesSearch = title.includes(searchTerm);
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(category);

      item.style.display = matchesSearch && matchesCategory ? '' : 'none';
    });
  }

  function updateAutocomplete() {
    const term = searchInput.value.trim().toLowerCase();
    autocompleteList.innerHTML = '';
    if (!term) {
      autocompleteList.style.display = 'none';
      return;
    }

    const titles = Array.from(items).map(item => {
      const el = item.querySelector('.price__header');
      return el ? el.textContent.trim() : '';
    });

    const uniqueMatches = [...new Set(
      titles.filter(title => title.toLowerCase().includes(term))
    )];

    if (!uniqueMatches.length) {
      autocompleteList.style.display = 'none';
      return;
    }

    uniqueMatches.forEach(title => {
      const li = document.createElement('li');
      li.textContent = title;
      li.addEventListener('click', () => {
        searchInput.value = title;
        autocompleteList.style.display = 'none';
        filterItems();
      });
      autocompleteList.appendChild(li);
    });

    autocompleteList.style.display = 'block';
  }

  searchInput.addEventListener('input', () => {
    updateAutocomplete();
    filterItems();
  });

  document.addEventListener('click', (e) => {
    if (e.target !== searchInput && !autocompleteList.contains(e.target)) {
      autocompleteList.style.display = 'none';
    }
  });

  checkboxes.forEach(cb => cb.addEventListener('change', filterItems));
  filterItems();
});
