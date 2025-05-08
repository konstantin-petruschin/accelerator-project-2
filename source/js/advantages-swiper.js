import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

let advantagesSwiper = null;

export const initAdvantagesSlider = () => {
  const swiperEl = document.querySelector('.advantages-swiper');
  if (!swiperEl) {
    return;
  }

  if (advantagesSwiper) {
    advantagesSwiper.destroy();
    advantagesSwiper = null;
  }

  if (window.innerWidth >= 1440) {

    advantagesSwiper = new Swiper(swiperEl, {
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
      lazy: true,
      centeredSlides: true,
      initialSlide: 2,
    });
  }
};

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initAdvantagesSlider, 100);
});
