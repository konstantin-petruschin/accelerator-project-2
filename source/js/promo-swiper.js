import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export const initPromoSlider = () => {
  new Swiper('.promo-swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    initialSlide: 0,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      renderBullet: function (index, className) {
        // Исправлено на возврат HTML-строки
        return `<button class="${className}" tabindex="0" aria-label="Слайд ${index + 1}"></button>`;
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
   
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
  });
};
