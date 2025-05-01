const form = document.querySelector('#feedback-form');
const phoneInput = form.querySelector('#input-phone');
const emailInput = form.querySelector('#input-email');

form.setAttribute('novalidate', true);

const validateField = (input, validationFn, errorMessage) => {

  if (input.value.trim() === '') {
    input.setCustomValidity('Это поле обязательно для заполнения');
    input.classList.add('feedback__form-input--error');
    input.reportValidity();
    return false;
  }

  if (!validationFn(input.value)) {
    input.setCustomValidity(errorMessage);
    input.classList.add('feedback__form-input--error');
    input.reportValidity();
    return false;
  }

  input.setCustomValidity('');
  input.classList.remove('feedback__form-input--error');
  return true;
};

const handleInput = ({ target }) => {
  if (target === phoneInput) {
    validateField(phoneInput, isValidPhone, 'Поле не должно содержать буквы.');
  } else if (target === emailInput) {
    validateField(emailInput, isValidEmail, 'Пожалуйста, введите корректный email. Например: имя@домен.рф');
  }
};

const handleSubmit = (evt) => {
  evt.preventDefault();

  const isPhoneValid = validateField(
    phoneInput,
    isValidPhone,
    'Поле не должно содержать буквы.'
  );

  const isEmailValid = validateField(
    emailInput,
    isValidEmail,
    'Пожалуйста, введите корректный email. Например: имя@домен.рф'
  );

  if (isPhoneValid && isEmailValid) {
    form.submit();
  }
};

const isValidPhone = (phone) => /^[\d\-()+]*$/.test(phone);

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
  /^[a-zA-Z0-9_.+-ёЁа-яА-Я@\-.]+$/.test(email);

const validatesForm = () => {
  if (!form) return;

  form.addEventListener('submit', handleSubmit);
  form.addEventListener('input', handleInput);
};

export { validatesForm };
