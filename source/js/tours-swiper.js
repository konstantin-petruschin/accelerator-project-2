
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

