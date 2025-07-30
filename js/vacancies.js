const openBtn = document.getElementById('openModalBtn');
const opensBtn = document.getElementById('opensModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeModalBtn');
const closesModalBtn = document.getElementById('closesModalBtn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

opensBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

closesModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрытие по клику вне модального окна
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Закрытие по Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
  }
});
