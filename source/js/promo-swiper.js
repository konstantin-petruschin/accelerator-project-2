import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export const initPromoSlider = () => {
  new Swiper('.promo-swiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    on: {
      slideChange: function () {
        const activeIndex = this.activeIndex;
        const bullets = document.querySelectorAll('.promo .swiper-pagination-bullet')

        bullets.forEach((bullet, index) => {
          bullet.setAttribute('tabindex', '0');
          bullet.addEventListener('keydown', (evt) =>{
            if(evt.key === 'Enter') {
              this.slideTo(index);
              bullet.blur();
            }
          });
        });
        const promoLinks = document.querySelectorAll('.promo__link');
        promoLinks.forEach((btn) => btn.setAttribute('tabindex', '-1'));
        if(promoLinks[activeIndex]) {
          promoLinks[activeIndex].tabIndex = "0"
        }
      }
    },
    slideToClickedSlide: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },
  });
}
