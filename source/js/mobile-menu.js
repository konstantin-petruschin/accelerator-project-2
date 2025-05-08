const mobileMenu = document.querySelector('.header__nav');
const menuToggleButton = document.querySelector('.header__button-menu');
const menuLinks = document.querySelectorAll('.header__nav a');

mobileMenu.classList.remove('header__nav--open');
menuToggleButton.classList.remove('header__button-menu--open');
document.body.style.overflow = '';

const toggleMenu = () => {
  const isMenuOpen = mobileMenu.classList.toggle('header__nav--open');
  menuToggleButton.classList.toggle('header__button-menu--open');
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';

  if (isMenuOpen) {
    document.body.classList.add('page__body--menu-open');
  } else {
    document.body.classList.remove('page__body--menu-open');
  }

  menuToggleButton.setAttribute('aria-expanded', isMenuOpen);
  mobileMenu.setAttribute('aria-hidden', !isMenuOpen);
};

const initMenu = () => {
  menuToggleButton.addEventListener('click', toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileMenu.classList.contains('header__nav--open')) {
        toggleMenu();
      }
    });
  });
};

export { initMenu };
