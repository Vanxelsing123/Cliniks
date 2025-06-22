// Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    const header = document.querySelector("header");
    header.classList.toggle("open");

    // блокировка скролла
    document.body.classList.toggle("no-scroll");
  });
});


/* map Yandex   */
const map = document.getElementById('yandex-map');
map.parentElement.addEventListener('click', () => {
  map.style.pointerEvents = 'auto';
});
map.parentElement.addEventListener('mouseleave', () => {
  map.style.pointerEvents = 'none';
});


