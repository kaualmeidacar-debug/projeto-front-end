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
  // Descrição
  if (registro.value.trim() == "") {
    registro.classList.add("is-invalid");
    registro.classList.remove("is-valid");
    formularioValido = false;
} else {
    registro.classList.add("is-valid");
    registro.classList.remove("is-invalid");
}

// Carga Horária
if (funcaoAula.value <= 0) {
    funcaoAula.classList.add("is-invalid");
    funcaoAula.classList.remove("is-valid");
    formularioValido = false;
} else {
    funcaoAula.classList.add("is-valid");
    funcaoAula.classList.remove("is-invalid");
}

if (formularioValido) {
    alert("Curso cadastrado com sucesso!");
    formCurso.reset();

    nomeCurso.classList.remove("is-valid");
    descricaoCurso.classList.remove("is-valid");
    chCurso.classList.remove("is-valid");
}


  


});