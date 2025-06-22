const swiper = new Swiper('.swiper', {
  direction: 'horizontal',

  loop: true,

  slidesPerView: 1,     // показывать по 1 слайду
  slidesPerGroup: 1,    // прокручивать по 1 слайду

  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loopAdditionalSlides: 0,
});
