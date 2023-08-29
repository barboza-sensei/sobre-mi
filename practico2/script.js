const options = [
  { name: "rock", image: "rock.png" },
  { name: "paper", image: "paper.png" },
  { name: "scissors", image: "scissors.png" }
];
let playerScore = 0;
let pcScore = 0;
let round = 0;
let playerName = "";

// Elementos del DOM
const playerNameInput = document.getElementById("playerName");
const confirmNameButton = document.getElementById("confirmNameButton");
const playerNameDisplay = document.getElementById("playerNameDisplay");
const gameContainer = document.getElementById("gameContainer");
const optionImages = document.querySelectorAll(".option");
const roundResultText = document.getElementById("roundResult");
const playerScoreText = document.getElementById("playerScore");
const pcScoreText = document.getElementById("pcScore");
const playerChoiceImage = document.getElementById("playerChoiceImage");
const pcChoiceImage = document.getElementById("pcChoiceImage");
const resetButton = document.getElementById("resetButton");
const scoreContainer = document.getElementById("scoreContainer");
const winSound = new Audio("sonido1.mp3");
const loseSound = new Audio("sonido2.mp3");

// Event listener para confirmar el nombre del jugador
confirmNameButton.addEventListener("click", function() {
  playerName = playerNameInput.value.trim();   // Obtiene el nombre ingresado y lo almacena en la variable playerName
  if (playerName) {   // Verifica si se ha ingresado un nombre
    playerNameDisplay.textContent = `Jugador: ${playerName}`;     // Muestra el nombre en el DOM y oculta el input y el botón
    document.getElementById("nameInput").style.display = "none";
    gameContainer.style.display = "block"; // Muestra el contenedor del juego
  }  else {     // Muestra una alerta si el jugador no ingresó un nombre antes de confirmar
    alert("Por favor, ingresa tu nombre antes de jugar.");
  }
});

// Event listeners para las opciones de juego
optionImages.forEach(option => {
  option.addEventListener("click", function() {
    if (!playerName) {       // Verifica si se ha ingresado un nombre antes de permitir la jugada
      alert("Por favor, ingresa tu nombre antes de jugar.");
      resetGame();
      return;
    }

    if (round === 0) { // Oculta las opciones
      showScore(); // Muestra el marcador después de la primera jugada
      showResults(); // Muestra los resultados después de la primera jugada
    }

    // Realiza una jugada, actualiza el marcador y muestra los resultados
    const playerChoice = this.id;
    const pcChoiceObj = options[Math.floor(Math.random() * options.length)];

    playRound(playerChoice, pcChoiceObj);
    updateScore();
  });
});

function showScore() {
  scoreContainer.style.display = "block";
}

function showResults() {
  document.getElementById("results").style.display = "block";
}

// Función para llevar a cabo una jugada y determinar el resultado
function playRound(playerChoice, pcChoiceObj) {
  round++;
  let result = "";

  const pcChoice = pcChoiceObj.name;

  // Actualiza las imágenes de elección del jugador y la PC en el DOM
  playerChoiceImage.src = `recursos/${playerChoice}.png`;
  pcChoiceImage.src = `recursos/${pcChoiceObj.image}`;

  // Implementa las reglas del juego
  if (playerChoice === pcChoice) {
    result = "Empate";
  } else if (
    (playerChoice === "rock" && pcChoice === "scissors") ||
    (playerChoice === "paper" && pcChoice === "rock") ||
    (playerChoice === "scissors" && pcChoice === "paper")
  ) {
    result = "Ganaste esta ronda!";
    playerScore++;
  } else {
    result = "Perdiste esta ronda.";
    pcScore++;
  }

  roundResultText.textContent = `Ronda ${round}: ${result}`;
}

// Función para actualizar el marcador
function updateScore() {
  playerScoreText.textContent = `Jugador: ${playerScore}`;
  pcScoreText.textContent = `PC: ${pcScore}`;

  // Verifica si alguien ha ganado el juego (alcanzado 3 puntos)
  if (playerScore === 3 || pcScore === 3) {
    const winner = playerScore === 3 ? playerName : "PC";
    playWinLoseSound(winner); // Reproduce el sonido antes de la alerta
    alert(`${winner} ha ganado el juego!`);
    resetGame();
  }
}

// Función para mostrar el marcador
function showScore() {
  scoreContainer.style.display = "block";
}

// Función para reproducir el sonido de ganar o perder
function playWinLoseSound(winner) {
  const sound = new Audio(winner === playerName ? "recursos/sonido1.wav" : "recursos/sonido2.wav");
  sound.play();
}

// Función para reiniciar el juego
function resetGame() {
  //playerName = "";/
  playerNameInput.value = "";
  playerNameDisplay.textContent = "";
  nameInput.style.display = "";
  gameContainer.style.display = "none";
  //updateOptionStatus();
  playerScore = 0;
  pcScore = 0;
  round = 0;
  roundResultText.textContent = "";
  playerScoreText.textContent = "Jugador: 0";
  pcScoreText.textContent = "PC: 0";
  //playerChoiceImage.src = "";/
  //pcChoiceImage.src = "";/
  results.style.display = "none";
  scoreContainer.style.display = "none";
}

// Event listener para reiniciar el juego
resetButton.addEventListener("click", resetGame);
