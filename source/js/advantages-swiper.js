import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const initAdvantagesSlider = () => {
  const swiperEl = document.querySelector('.advantages-swiper');
  if (window.innerWidth >= 1440) {
    new Swiper(swiperEl, {
      modules: [Navigation],
      loop: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.advantages__swiper-buttons .swiper-button-next',
        prevEl: '.advantages__swiper-buttons .swiper-button-prev',
      },
      enabled: true,
      spaceBetween: 30,
      slidesPerGroup: 2,
      initialSlide: 1,
      allowTouchMove: false,
    });
  }
};
