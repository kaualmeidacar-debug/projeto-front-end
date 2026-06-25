const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const mensagemErro = document.getElementById('mensagemErro');

formLogin.addEventListener('submit', function (evento) {
  evento.preventDefault();

  const emailValido = email.value.includes('@') && email.value.includes('.');
  const senhaValida = senha.value.length >= 6;

  if (emailValido == true && senhaValida == true) {
    mensagemErro.classList.add('d-none');    
    window.location.href = 'curso.html'; 
  } else {
    mensagemErro.classList.remove('d-none');
  }
});