const scriptURL = 'https://script.google.com/macros/s/AKfycbxVvF04zoGdAV4X1OA-BCGMTAis3thPcmOlbrPXcyywr6uIH1b4-x1FRUS6Y9uv7EuO4Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})