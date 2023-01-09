import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input[name=email]'),
};
// console.log(refs);

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

// console.log(onFormInput);

populateForm();
function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  refs.form.reset();
}


function onFormInput() {
  const formData = {
    message: refs.textarea.value,
    email: refs.email.value,
  };
 
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 }

function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(savedMessage);
  if (!savedMessage) {
    return;
  }
  refs.textarea.value = savedMessage.message;
  refs.email.value = savedMessage.email;

}
