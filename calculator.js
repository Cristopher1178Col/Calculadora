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
    var continuar = true;
    while (continuar) {
        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                continuar = false;
                break;
            case 'resta':
                resultado = num1 - num2;
                continuar = false;
                break;
            case 'multiplicacion':
                resultado = num1 * num2;
                continuar = false;
                break;
            case 'division':
                if (num2 !== 0) {
                    resultado = num1 / num2;
                    continuar = false;
                } else {
                    resultado = 'Error: división por cero';
                    continuar = false;
                }
                break;
            default:
                alert('Operación no reconocida.');
                continuar = false;
                break;
        }
    }
    document.getElementById('resultado').value = resultado;
}


