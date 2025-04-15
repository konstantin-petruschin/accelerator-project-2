// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import { toggleMenu } from "./mobile-menu";
import { initPromoSlider } from "./promo-swiper";

document.addEventListener('DOMContentLoaded', () => {
  toggleMenu();
  initPromoSlider();
});

