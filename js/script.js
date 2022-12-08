const btnSubmitElement = document.querySelector('#btn-submit');
const inputEmailElement = document.querySelector('#input-email');

const validateEmail = email => {
  const mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(mailFormat)) {
    return true;
  }
  return false;
};

btnSubmitElement.addEventListener('click', event => {
  event.preventDefault();
  const form = document.querySelector('form');
  const errorIcon = document.querySelector('.error-icon');
  const errorText = document.querySelector('.error-text');
  if (!validateEmail(inputEmailElement.value)) {
    form.classList.add('error');
    errorIcon.classList.add('error');
    errorText.classList.add('error');
  } else {
    form.classList.remove('error');
    errorIcon.classList.remove('error');
    errorText.classList.remove('error');
  }
});
