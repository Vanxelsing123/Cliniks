/* Burger */

const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const header = document.querySelector('.header');
const body = document.body;

function closeMenu() {
  burger.classList.remove('active');
  mobileNav.classList.remove('open');
  overlay.classList.remove('show');
  header.classList.remove('menu-open');
  body.classList.remove('menu-open');
}

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileNav.classList.toggle('open');
  overlay.classList.toggle('show');
  header.classList.toggle('menu-open');
  body.classList.toggle('menu-open');
});

overlay.addEventListener('click', closeMenu);


mobileNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});

/* map Yandex   */

{

  const map = document.getElementById('yandex-map');
  map.parentElement.addEventListener('click', () => {
    map.style.pointerEvents = 'auto';
  });
  map.parentElement.addEventListener('mouseleave', () => {
    map.style.pointerEvents = 'none';
  });
}


