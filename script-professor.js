const formProf = document.getElementById('formProfessor');
const nomeProf = document.getElementById('nomeProfessor');
const registro = document.getElementById('registro');
const funcaoAula = document.getElementById('funcao');

formProf.addEventListener('submit', function (evento) {
  evento.preventDefault();

  let formularioValido = true;
  
  if(nomeProf.value.trim() == ""){
    formularioValido = false;
    nomeProf.classList.add('is-invalid'); 
    nomeProf.classList.remove("is-valid");
  } else {
    nomeProf.classList.add("is-valid");
    nomeProf.classList.remove("is-invalid");
  }


  


});