function redirigirACalculadora(event) {
    event.preventDefault();
    if (validar()) {
        window.location.href = "calculadora.html";
    }
}

function validar() {
    var nombres = document.getElementById('Nom').value.trim();
    var apellidos = document.getElementById('Ape').value.trim();
    var email = document.querySelector('input[type=email]').value.trim();
    var password = document.querySelector('input[type=password]').value.trim();
    var confirmarPassword = document.querySelector('input[type=password]').value.trim();
    var generoFemenino = document.getElementById('fem').checked;
    var generoMasculino = document.getElementById('mas').checked;
    var generoOtro = document.getElementById('Otro').checked;

    if (nombres === '' || apellidos === '' || email === '' || password === '' || confirmarPassword === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    if (password !== confirmarPassword) {
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return false; 
    }

    if (!generoFemenino && !generoMasculino && !generoOtro) {
        alert('Por favor, seleccione su género.');
        return false; 
    }

    return true;
}



