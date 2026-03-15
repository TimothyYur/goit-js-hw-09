const USER_DATA = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  if (!form) return;

  const saved = localStorage.getItem(USER_DATA);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      if (data?.email) {
        formData.email = data.email;
        form.elements.email.value = data.email;
      }
      if (data?.message) {
        formData.message = data.message;
        form.elements.message.value = data.message;
      }
    } catch {

    }
  }

  form.addEventListener('input', () => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;

    localStorage.setItem(USER_DATA, JSON.stringify(formData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();

    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }

    console.log(formData);
    formData.email = '';
    formData.message = '';
    localStorage.removeItem(USER_DATA);
    form.reset();
  });
});

