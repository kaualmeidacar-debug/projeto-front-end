const formCurso = document.getElementById("formCurso");
const nomeCurso = document.getElementById("nomeCurso");
const descricaoCurso = document.getElementById("descricaoCurso");
const chCurso = document.getElementById("chCurso");

formCurso.addEventListener("submit", function (evento) {

    evento.preventDefault();

    let formularioValido = true;

    // Nome
    if (nomeCurso.value.trim() == "") {
        nomeCurso.classList.add("is-invalid");
        nomeCurso.classList.remove("is-valid");
        formularioValido = false;
    } else {
        nomeCurso.classList.add("is-valid");
        nomeCurso.classList.remove("is-invalid");
    }

    // Descrição
    if (descricaoCurso.value.trim() == "") {
        descricaoCurso.classList.add("is-invalid");
        descricaoCurso.classList.remove("is-valid");
        formularioValido = false;
    } else {
        descricaoCurso.classList.add("is-valid");
        descricaoCurso.classList.remove("is-invalid");
    }

    // Carga Horária
    if (chCurso.value <= 0) {
        chCurso.classList.add("is-invalid");
        chCurso.classList.remove("is-valid");
        formularioValido = false;
    } else {
        chCurso.classList.add("is-valid");
        chCurso.classList.remove("is-invalid");
    }

    if (formularioValido) {
        alert("Curso cadastrado com sucesso!");
        formCurso.reset();

        nomeCurso.classList.remove("is-valid");
        descricaoCurso.classList.remove("is-valid");
        chCurso.classList.remove("is-valid");
    }

});