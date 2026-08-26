const formulario = document.getElementById("formRegistro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmar").value;

    if (nombre === "") {
        alert("Debe ingresar su nombre");
        return;
    }

    if (email === "") {
        alert("Debe ingresar su correo electrónico");
        return;
    }

    if (password === "") {
        alert("Debe ingresar una contraseña");
        return;
    }

    if (password !== confirmar) {
        alert("Las contraseñas no coinciden");
        return;
    }

    alert("Registro realizado correctamente");

});
