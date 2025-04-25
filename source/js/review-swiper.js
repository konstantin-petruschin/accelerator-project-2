import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


export const initReviewsSlider = () => {
  new Swiper('.reviews-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 40,
    watchOverflow: true,
    simulateTouch: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerView: 1.2,
        spaceBetween: 36,
      },
      1440: {
        slidesPerView: 3,
        slidesPerView: 1.693,
        spaceBetween: 198,
        allowTouchMove: false,
      },
    },
  });
};
