import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export const initPromoSlider = () => {
  new Swiper('.promo-swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    watchOverflow: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
  },

  observer: true,
  observeParents: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
  });
};
