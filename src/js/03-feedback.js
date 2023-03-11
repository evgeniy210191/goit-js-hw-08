import throttle from './fn03/api.js';
const feedback_form_state = {};
const form = document.querySelector('.feedback-form');
console.log(form.name);

form.addEventListener(
  'input',
  throttle(function (event) {
    feedback_form_state[event.target.name] = event.target.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(feedback_form_state)
    );
  }, 1000)
);
addEventListener('load', function (event) {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const dataParse = JSON.parse(data);
    form.elements.email.value = dataParse.email;
    form.elements.message.value = dataParse.message;
  }
});
form.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
