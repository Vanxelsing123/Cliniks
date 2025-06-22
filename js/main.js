// Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})

/* map Yandex   */
const map = document.getElementById('yandex-map');
map.parentElement.addEventListener('click', () => {
  map.style.pointerEvents = 'auto';
});
map.parentElement.addEventListener('mouseleave', () => {
  map.style.pointerEvents = 'none';
});


