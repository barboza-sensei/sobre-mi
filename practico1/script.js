const operand1 = document.getElementById('operand1');
const operand2 = document.getElementById('operand2');
const operator = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error');

const operator = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(prompt('Ingresa el primer número:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número:'));

    if (isNaN(num1) || isNaN(num2)) {
        alert('Ingresa números válidos en ambos campos.');
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
                alert('No se puede dividir por cero.');
                return;
            }
            result = num1 / num2;
            break;
    }

    if (!isFinite(result)) {
        alert('El resultado es demasiado grande o pequeño.');
        return;
    }

    console.log(`El resultado es: ${result}`);
});
