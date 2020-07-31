function entrar() {
	var user = document.getElementById("user").value;
    var pass = document.getElementById("password").value;
    mp.trigger("submitEntrarUsuario", user, pass);
}

function registrar() {
    mp.trigger("registrarUsuario", "", "", "");
}

function mostrarErro(erro) {
    if (erro != "") {
        document.getElementById("erro").innerHTML = erro;
        document.getElementById('erro').style.display = 'block';
    }
}