document.addEventListener("DOMContentLoaded", function() { // Espera a que se cargue el contenido HTML antes de ejecutar el script
  const operand1 = document.getElementById("operand1");
  const operand2 = document.getElementById("operand2");
  const operator = document.getElementById("operator");
  const calculateBtn = document.getElementById("calculate");
  const clearBtn = document.getElementById("clear");
  const resultDiv = document.getElementById("result");
// Obtiene referencias a los elementos del DOM
  clearBtn.addEventListener("click", function() { // Agrega un evento al botón de limpiar
    operand1.value = "";
    operand2.value = "";
    resultDiv.textContent = ""; 
  }); // Borra los campos de texto y el resultado de la interfaz
  
  calculateBtn.addEventListener("click", function() { // Agrega un evento al botón de calcular
    const num1 = parseFloat(operand1.value);
    const num2 = parseFloat(operand2.value);
    const selectedOperator = operator.value;
    // Convierte los operandos a números flotantes
    if (isNaN(num1) || isNaN(num2)) { // Verifica si los operandos son números válidos
      alert("Ingresa operandos válidos.");
      return;
    } 

    
    let result; // Declaración de variable para almacenar el resultado de la operación

    
    switch (selectedOperator) { // Realiza la operación seleccionada utilizando un switch
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
        if (num2 === 0) { // Verifica si se divide por cero y muestra un mensaje de error si lo es
          alert("No se puede dividir por cero.");
          return;
        }
        result = num1 / num2;
        break;
    }
    
    if (!isFinite(result)) { // Verifica si el resultado es finito y muestra un mensaje de error si no lo es
      alert("El resultado es demasiado grande o pequeño.");
      return;
    }
    
    resultDiv.textContent = `Resultado: ${result}`;  // Muestra el resultado en la interfaz de usuario

  });
});