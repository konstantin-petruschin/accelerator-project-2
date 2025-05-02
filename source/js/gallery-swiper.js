import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const initGallerySlider = () => {
  const swiper = new Swiper('.gallery-swiper', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    watchOverflow: true,
    simulateTouch: true,
    navigation: {
      nextEl: '.gallery__swiper-buttons .swiper-button-next',
      prevEl: '.gallery__swiper-buttons .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
        allowTouchMove: false,
        enabled: false,
      },
    },
  });


  const handleResize = () => {
    if (window.innerWidth > 1440) {
      swiper.disable();
    } else {
      swiper.enable();
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();
};
