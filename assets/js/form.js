const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_oylue7c';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      window.location.href = 'confirmar.html';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});