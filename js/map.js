/* map Yandex   */
const map = document.getElementById('yandex-map');
map.parentElement.addEventListener('click', () => {
  map.style.pointerEvents = 'auto';
});
map.parentElement.addEventListener('mouseleave', () => {
  map.style.pointerEvents = 'none';
});
