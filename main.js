import './style.css'

// 1. En una variable llamada holes, guardar todos los elementos de tipo .hole
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score-value');
const bugs = document.querySelectorAll('.bug');

let lastHole;
let timeUp = false;
let score = 0;

// Retorna un tiempo aleatorio entre un rango definido
function tiempoRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Retorna un aleatoriamente un elemento de tipo .hole
// de una lista de agujeros enviada como parámetros
function agujeroRandom(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (lastHole === hole) {
    return agujeroRandom(holes);
  }
  
  lastHole = hole;
  return hole
}


// Hace que un nuevo bug salte desde un agujero
function saltar() {
  const time = tiempoRandom(200, 1000);
  const hole = agujeroRandom(holes);

  // 2. Agregar la clase 'up' al elemento 'hole' para que el bug aparezca
  
  setTimeout(() => {
    // 3. Eliminar la clase 'up' para que el bug desaparezca

    // Hace que un nuevo bug salte desde un agujero si el tiempo no ha terminado
    if (!timeUp) saltar();
  }, time)
}

// Maneja el evento de click en un bug
function golpear(event) {
  if (!event.isTrusted) return; // Alguien intentó hacer trampa

  score++;
  this.classList.remove('up');
  score.textContent = score;
}

function iniciarJuego() {
  score.textContent = 0;
  timeUp = false;

  saltar();

  setTimeout(() => timeUp = true, 10 * 1000);
}

