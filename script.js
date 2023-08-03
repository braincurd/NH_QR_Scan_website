let currentPicture = 0;
const idleTimeout = 120000; // 2 minutes in milliseconds
let idleTimer;

function setBackground(imageClass) {
  const background = document.getElementById('background');
  background.className = imageClass;
}

function resetBackground() {
  setBackground('idle-bg');
}

function handleInput(input) {
  if (input >= 1 && input <= 5) {
    currentPicture = input;
    setBackground(`picture-${input}`);
    clearTimeout(idleTimer); // Reset the idle timer when a valid input is received
    startIdleTimer(); // Start the idle timer again
  }
}

function startIdleTimer() {
  idleTimer = setTimeout(resetBackground, idleTimeout);
}

document.addEventListener('keypress', (event) => {
  const input = parseInt(event.key, 10);
  if (!isNaN(input)) {
    handleInput(input);
  }
});

startIdleTimer(); // Start the idle timer on page load
