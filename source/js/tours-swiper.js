
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const initToursSlider = () => {
  new Swiper('.tours-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    watchOverflow: true,
    simulateTouch: true,
    navigation: {
      nextEl: '.tours__swiper-buttons .swiper-button-next',
      prevEl: '.tours__swiper-buttons .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};
