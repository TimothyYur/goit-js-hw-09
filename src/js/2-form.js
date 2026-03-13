const USER_DATA = 'feedback-form-state';
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector(".message")

let formData = {
  email: '',
  message: '',
};

form.addEventListener("input", event => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;

    const zip = JSON.stringify(formData);
    localStorage.setItem(USER_DATA, zip)
})

document.addEventListener("DOMContentLoaded", (e) => {
    const zip = localStorage.getItem(USER_DATA);
    const data = JSON.parse(zip);
    formData.email = data.email;
    formData.message = data.message;
    form.elements.email.value = data.email
    form.elements.message.value = data.message
})

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  form.elements.email.value.trim();
  form.elements.message.value.trim();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
      console.log(formData)
      localStorage.removeItem(USER_DATA);
      form.reset();
  }
});