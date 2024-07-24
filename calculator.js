function calcular() {
    // Obtener los valores de los campos
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operacion = document.querySelector('input[name="operacion"]:checked').value;
    var resultado;

    // Realizar la operación correspondiente
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
            resultado = 'Error: seleccione una operación';
    }
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
