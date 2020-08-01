$(document).ready(function () {
    $('#dataNascimento').mask('00/00/0000');
});

function voltarPersonagem() {
    mp.trigger("voltarPersonagem");
}

function criarPersonagemSubmit() {
    var nome = document.getElementById("nome").value;
	var sobrenome = document.getElementById("sobrenome").value;
    var sexo = document.getElementById("sexo").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    mp.trigger("submitCriarPersonagem", nome, sobrenome, sexo, dataNascimento);
}

function mostrarErro(erro) {
    if (erro != "") {
        document.getElementById("erro").innerHTML = erro;
        document.getElementById('erro').style.display = 'block';
    }
}