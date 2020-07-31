function registrarSubmit() {
	var user = document.getElementById("user").value;
	var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var pass2 = document.getElementById("password2").value;
    mp.trigger("submitRegistrarUsuario", user, email, pass, pass2);
}

function voltarLogin() {
    mp.trigger("playerConnected", "", "");
}

function mostrarErro(erro) {
    if (erro != "") {
        document.getElementById("erro").innerHTML = erro;
        document.getElementById('erro').style.display = 'block';
    }
}