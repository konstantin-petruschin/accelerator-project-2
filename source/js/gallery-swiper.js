// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';

// export const initGallerySlider = () => {
//   const swiper = new Swiper('.gallery-swiper', {
//     modules: [Navigation],
//     slidesPerView: 2,
//     spaceBetween: 5,
//     slidesPerGroup: 1,
//     loop: true,
//     watchOverflow: true,
//     simulateTouch: true,
//     navigation: {
//       nextEl: '.gallery__swiper-buttons .swiper-button-next',
//       prevEl: '.gallery__swiper-buttons .swiper-button-prev',
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//       },
//       1440: {
//         slidesPerView: 4,
//         allowTouchMove: false,
//         enabled: false,
//       },
//     },
//   });


//   const handleResize = () => {
//     if (window.innerWidth > 1440) {
//       swiper.disable();
//     } else {
//       swiper.enable();
//     }
//   };

//   window.addEventListener('resize', handleResize);
//   handleResize();
// };

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

let gallerySwiper = null;

export const initGallerySlider = () => {
  const swiperEl = document.querySelector('.gallery-swiper');
  if (!swiperEl) return;

  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }

  if (window.innerWidth < 1440) {
    gallerySwiper = new Swiper(swiperEl, {
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
          spaceBetween: 5
        }
      }
    });
  } else {

    swiperEl.classList.remove('swiper');
    const wrapper = swiperEl.querySelector('.swiper-wrapper');
    if (wrapper) {
      wrapper.classList.remove('swiper-wrapper');
      wrapper.style.display = 'flex';
      wrapper.style.flexWrap = 'wrap';
      wrapper.style.gap = '5px';
    }
    swiperEl.querySelectorAll('.swiper-slide').forEach(slide => {
      slide.classList.remove('swiper-slide');
      slide.style.width = '284px';
    });
  }
};

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initGallerySlider, 100);
});
