import throttle from './fn03/api.js';
const FeedbackFormState = {};
const form = document.querySelector('.feedback-form');

form.addEventListener(
  'input',
  throttle(function (event) {
    FeedbackFormState[event.target.name] = event.target.value;
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(FeedbackFormState)
    );
    
    
  }, 1000)
);
addEventListener('load', function (event) {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const dataParse = JSON.parse(data);
    if (dataParse.email) {
      form.elements.email.value = dataParse.email;
    }
    if (dataParse.message) {
      form.elements.message.value = dataParse.message;
    } 
    return
  }
});


form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return
  }
  console.log(FeedbackFormState);
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
