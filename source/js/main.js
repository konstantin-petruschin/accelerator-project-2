// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleMenu } from './mobile-menu';
import { initPromoSlider } from './promo-swiper';
import { initToursSlider } from './tours-swiper';
import { initTrainingSlider } from './training-swiper';
import { initReviewsSlider } from './review-swiper';

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  initPromoSlider();
  initToursSlider();
  initTrainingSlider();
  initReviewsSlider();
});

