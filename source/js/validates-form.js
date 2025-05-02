const form = document.querySelector('#feedback-form');
const phoneInput = form.querySelector('#input-phone');
const emailInput = form.querySelector('#input-email');

const PHONE_REGEX = /^[\d\s\-()+]*$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_ADDITIONAL_REGEX = /^[a-zA-Z0-9_.+-ёЁа-яА-Я@]+$/;

form.setAttribute('novalidate', true);

let wasSubmitted = false;

const validateField = (input, validationFn, errorMessage) => {
  const isEmpty = input.value.trim() === '';
  const isValid = !isEmpty && validationFn(input.value.trim());

  if (!isValid && wasSubmitted) {
    input.setCustomValidity(isEmpty
      ? 'Это поле обязательно для заполнения'
      : errorMessage);
    input.classList.add('feedback__form-input--error');
    input.reportValidity();
    return false;
  }

  input.setCustomValidity('');
  if (isValid) {
    input.classList.remove('feedback__form-input--error');
  }
  return true;
};

const handleSubmit = (evt) => {
  evt.preventDefault();
  wasSubmitted = true;

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

const isValidPhone = (phone) => PHONE_REGEX.test(phone);

const isValidEmail = (email) =>
  EMAIL_REGEX.test(email) &&
  EMAIL_ADDITIONAL_REGEX.test(email);

const validatesForm = () => {
  if (!form) return;

  phoneInput.setCustomValidity('');
  emailInput.setCustomValidity('');

  form.addEventListener('submit', handleSubmit);
  phoneInput.addEventListener('input', () => {
    if (wasSubmitted) {
      validateField(
        phoneInput,
        isValidPhone,
        'Поле не должно содержать буквы.'
      );
    }
  });

  emailInput.addEventListener('input', () => {
    if (wasSubmitted) {
      validateField(
        emailInput,
        isValidEmail,
        'Пожалуйста, введите корректный email. Например: имя@домен.рф'
      );
    }
  });
};

export { validatesForm };
