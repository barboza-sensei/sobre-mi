# :moyai: :page_facing_up: :scissors: Juego de Piedra, Papel o Tijera :scissors: :page_facing_up: :moyai:

Este juego es una implementación sencilla del clásico juego de Piedra, Papel o Tijera, en el que los jugadores compiten para ganar un determinado número de rondas. El juego se juega entre un jugador humano y la computadora.

### Ingreso del Nombre del Jugador

La página web se carga y muestra un campo de entrada de texto donde el jugador puede ingresar su nombre. Una vez ingresado debe clic en el botón "Confirmar".

Si el jugador no ingresó un nombre y hace clic en "Confirmar", se muestra una alerta que le indica que debe ingresar un nombre antes de jugar.

Si el jugador ingresó un nombre válido y hace clic en "Confirmar", el nombre del jugador se muestra en la parte superior de la página, y el campo de ingreso de nombre se oculta.

### Elección de Jugada por el Jugador

Después de confirmar el nombre, se muestra una sección que contiene imágenes de las opciones de juego: Piedra, Papel y Tijera. El jugador puede hacer clic en una de las imágenes para seleccionar su jugada.

### Juego de Rondas

Una vez que el jugador selecciona su opción de juego, la computadora elige una opción de forma aleatoria (Piedra, Papel o Tijera). Se muestra una imagen que representa la elección del jugador y otra que representa la elección de la computadora.

El juego determina el resultado de la ronda basado en las reglas clásicas de Piedra, Papel o Tijera.

El resultado de la ronda (ganador, perdedor o empate) se muestra en el marcador y en un cuadro de texto debajo de las imágenes. El marcador mostrará la puntuación del jugador y de la computadora.

### Finalización del Juego

El juego se juega al mejor de 5 rondas. El marcador se actualiza después de cada ronda, y el juego verifica si uno de los jugadores ha alcanzado 3 victorias. Si el jugador o la computadora las alcanza, se muestra una alerta anunciando al ganador del juego.

El juego se reinicia automáticamente para permitir una nueva partida. El jugador puede hacer clic en el botón "Reiniciar Juego" en cualquier momento para volver a empezar.

## Caracteristicas:
### Sonidos y Efectos

1. Se reproducen sonidos de ganar y perder al mismo tiempo que se muestra la alerta de victoria o derrota.

2. Se muestra una imagen correspondiente a la elección del jugador y la elección de la computadora después de cada ronda.

3. Los elementos de la página (como el marcador y el cuadro de resultados) se muestran y ocultan de acuerdo con el flujo del juego.

### Mejoras y Personalización

1. El juego tiene estilos CSS para dar formato a la interfaz y hacerla visualmente atractiva.

2. Se utilizan transiciones suaves para las animaciones y cambios de visibilidad en la página.

3. Los sonidos y las imágenes se cargan de manera adecuada para una experiencia de juego completa.


## Desglose Detallado del Código del Juego de Piedra, Papel o Tijera

1. **Declaración de Variables:**
   - `options`: Un arreglo que contiene las opciones de juego (piedra, papel, tijera) con sus nombres y rutas de imágenes.
   - `playerScore`: Almacena la puntuación del jugador.
   - `pcScore`: Almacena la puntuación de la computadora.
   - `round`: Contador de rondas jugadas.
   - `playerName`: Almacena el nombre del jugador.

2. **Selección de Elementos del DOM:**
   - `playerNameInput`: El campo de entrada de texto para el nombre del jugador.
   - `confirmNameButton`: El botón para confirmar el nombre del jugador.
   - `playerNameDisplay`: El elemento que muestra el nombre del jugador en la interfaz.
   - `gameContainer`: El contenedor que muestra la sección de juego.
   - `optionImages`: Una colección de elementos que representan las opciones de juego (imágenes de piedra, papel y tijera).
   - `roundResultText`: El elemento de texto que muestra el resultado de cada ronda.
   - `playerScoreText`: El elemento que muestra la puntuación del jugador.
   - `pcScoreText`: El elemento que muestra la puntuación de la computadora.
   - `playerChoiceImage`: La imagen que muestra la elección del jugador.
   - `pcChoiceImage`: La imagen que muestra la elección de la computadora.
   - `resetButton`: El botón para reiniciar el juego.
   - `scoreContainer`: El contenedor que muestra el marcador y los resultados.
   - `winSound` y `loseSound`: Elementos de audio para los sonidos de victoria y derrota.

3. **Event Listener para Confirmar el Nombre:**
   - Al hacer clic en el botón "Confirmar", la función captura el nombre ingresado, lo muestra en la interfaz y oculta el campo de entrada.

4. **Event Listener para las Opciones de Juego:**
   - Al hacer clic en una opción de juego, se verifica si el jugador ha ingresado un nombre.
   - Si no se ha ingresado un nombre, muestra una alerta y reinicia el juego.
   - Si es la primera ronda, oculta las opciones, muestra el marcador y los resultados.

5. **Función `playRound(playerChoice, pcChoiceObj)`:**
   - Actualiza la elección del jugador y la elección de la computadora en la interfaz.
   - Llama a la función para determinar el resultado de la ronda y actualiza el marcador.

6. **Función `updateScore()`:**
   - Actualiza la puntuación del jugador y de la computadora en la interfaz.
   - Verifica si alguien ha ganado el juego (llegado a 3 puntos) y muestra una alerta con el ganador.
   - Llama a la función para reproducir el sonido de ganar o perder.

7. **Funciones para Mostrar el Marcador y los Resultados:**
   - `showScore()`: Muestra el contenedor del marcador.
   - `showResults()`: Muestra el contenedor de los resultados.

8. **Función `playWinLoseSound(winner)`:**
   - Reproduce el sonido correspondiente según el ganador (jugador o computadora).

9. **Función `resetGame()`:**
   - Reinicia el juego: restablece las variables, oculta y muestra elementos de la interfaz.

10. **Event Listener para Reiniciar el Juego:**
    - Al hacer clic en el botón "Reiniciar Juego", llama a la función `resetGame()`.


## Control de versiones
**Versión Inicial del Script:**
- Estructura básica HTML con campos para ingresar el nombre del jugador y opciones de juego.
- Estilos CSS para dar formato a la interfaz.
- Event listener para validar el nombre del jugador antes de comenzar el juego.
- Event listeners para capturar la elección del jugador y determinar el resultado de la ronda.
- Funciones para actualizar el marcador y mostrar el ganador al final del juego.
- Sonidos para indicar ganar o perder.

**Cambios y Agregados:**

1. **Validación del Nombre del Jugador:**
   - Se agregó una validación para asegurarse de que el jugador ingrese su nombre antes de jugar.

2. **Imágenes para las Elecciones:**
   - Se agregó la carga de imágenes para las opciones de juego (Piedra, Papel y Tijera) elegidas por el jugador y la computadora.

3. **Mostrar Marcador y Resultados:**
   - Se agregó la función `showScore()` para mostrar el marcador y la función `showResults()` para mostrar los resultados de las rondas después de la primera elección.

4. **Sonidos de Ganar y Perder:**
   - Se agregaron efectos de sonido para indicar ganar o perder al mismo tiempo que se muestra la alerta de resultado.

5. **Optimización y Comentarios:**
   - Se eliminaron elementos y funciones no utilizados o redundantes para optimizar el código.
   - Se agregaron comentarios detallados para explicar la funcionalidad de cada parte del código.

6. **Botón para Confirmar Nombre:**
   - Se agregó un botón "Confirmar" para que el jugador confirme su nombre antes de comenzar el juego.

7. **Mostrar el Nombre del Jugador:**
   - Se agregó una sección para mostrar el nombre del jugador después de ser confirmado.

8. **Reinicio del Juego Mejorado:**
   - Se mejoró la función de reinicio para restablecer todos los elementos a su estado inicial.

9. **Mejoras Estéticas:**
   - Se realizaron mejoras visuales mediante CSS para hacer el juego más atractivo.


