/* Burger */

<<<<<<< HEAD
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const header = document.querySelector('.header');
const body = document.body;
=======


  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');
  const header = document.querySelector('.header');
  const body = document.body;
>>>>>>> ccfbdf4ab9f7875d6fd60b14dd9aebec8e44b9e0

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
<<<<<<< HEAD
});
=======

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
  
>>>>>>> ccfbdf4ab9f7875d6fd60b14dd9aebec8e44b9e0

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


