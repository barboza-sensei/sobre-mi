document.addEventListener("DOMContentLoaded", function() {
  const operand1 = document.getElementById("operand1");
  const operand2 = document.getElementById("operand2");
  const operator = document.getElementById("operator");
  const calculateBtn = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");

  calculateBtn.addEventListener("click", function() {
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);
    const selectedOperator = operator.value;
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Ingresa operandos válidos.");
      return;
    }
    
    let result;
    
    switch (selectedOperator) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          alert("No se puede dividir por cero.");
          return;
        }
        result = num1 / num2;
        break;
    }
    
    if (!isFinite(result)) {
      alert("El resultado es demasiado grande o pequeño.");
      return;
    }
    
    resultDiv.textContent = `Resultado: ${result}`;
  });
});
