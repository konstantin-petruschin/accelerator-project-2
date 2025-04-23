
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const initTrainingSlider = () => {
  new Swiper('.training-swiper', {
    modules: [Navigation],
    initialSlide: 2,
    slidesPerView: 1,
    spaceBetween: 40,
    watchOverflow: true,
    // simulateTouch: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
        initialSlide: 0,
      },
    },
  });
};

