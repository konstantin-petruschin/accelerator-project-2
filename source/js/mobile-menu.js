const mobileMenu = document.querySelector('.header__nav');
const menuToggleButton = document.querySelector('.header__button-menu');

const toggleMenu = () => {
  menuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('header__nav--open');
    menuToggleButton.classList.toggle('header__button-menu--open');
  });
};

export { toggleMenu };
