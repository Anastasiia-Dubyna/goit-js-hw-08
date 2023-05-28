import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formEmail = form.querySelector('input[type="email"]');
const formMessage = form.querySelector('textarea[name="message"]');

function savedFormData() {
  const formData = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttle(savedFormData, 500));

function loadPage() {
  const savedData = localStorage.getItem('feedback-form-state');
  const parseData = JSON.parse(savedData);
  if (savedData) {
    formEmail.value = parseData.email;
    formMessage.value = parseData.message;
  } else {
    formEmail.value = '';
    formMessage.value = '';
  }
}

window.addEventListener('load', loadPage);

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    email: formEmail.value,
    message: formMessage.value,
  };
  localStorage.removeItem('feedback-form-state');
  formEmail.value = '';
  formMessage.value = '';
  console.log(formData);
}
form.addEventListener('submit', handleSubmit);