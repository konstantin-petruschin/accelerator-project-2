import { initMenu } from './mobile-menu';
import { initPromoSlider } from './promo-swiper';
import { initToursSlider } from './tours-swiper';
import { initTrainingSlider } from './training-swiper';
import { initReviewsSlider } from './review-swiper';
import { initAdvantagesSlider } from './advantages-swiper';
import { initGallerySlider } from './gallery-swiper';
import { validatesForm } from './validates-form';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initPromoSlider();
  initToursSlider();
  initTrainingSlider();
  initReviewsSlider();
  initAdvantagesSlider();
  initGallerySlider();
  validatesForm();
});

