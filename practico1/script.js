const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error');

calculateButton.addEventListener('click', () => {
    errorElement.textContent = '';

    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.textContent = 'Ingresa números válidos en ambos campos.';
        return;
    }

    const selectedOperator = operator.value;
    let result;

    switch (selectedOperator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                errorElement.textContent = 'No se puede dividir por cero.';
                return;
            }
            result = num1 / num2;
            break;
    }

    if (!isFinite(result)) {
        errorElement.textContent = 'El resultado es demasiado grande o pequeño.';
        return;
    }

    resultElement.textContent = `Resultado: ${result}`;
});
