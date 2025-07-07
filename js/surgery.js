const technologiesSwiper = new Swiper('.technologies-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.technologies-swiper .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.technologies-swiper .swiper-button-next',
      prevEl: '.technologies-swiper .swiper-button-prev',
    },
    breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    1025: {
      slidesPerView: 2, // Если хочешь по 2 карточки только на десктопе
    },
  },
  });

 

  