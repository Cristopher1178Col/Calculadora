function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.querySelector('input[name="operacion"]:checked');
    var resultado;
    if (!operacion) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese los valores y seleccione la operacion.',
        });
        return;
    }
    operacion = operacion.value;
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Error: división por cero';
            }
            break;
        default:
            alert('Operación no reconocida.');
            return;
    }
    document.getElementById('resultado').value= resultado;
}

