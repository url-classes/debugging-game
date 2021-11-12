import './style.css'

// 1. En una variable llamada holes, guardar todos los elementos de tipo .hole
const scoreBoard = document.querySelector('.score-value');
const bugs = document.querySelectorAll('.bug');

let holes = document.querySelectorAll('.hole');

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
  const time = tiempoRandom(500, 3000);
  const hole = agujeroRandom(holes);

  // 2. Agregar la clase 'up' al elemento 'hole' para que el bug aparezca
  hole.classList.add('up');
  setTimeout(() => {
    // 3. Eliminar la clase 'up' para que el bug desaparezca
    hole.classList.remove('up')
    // Hace que un nuevo bug salte desde un agujero si el tiempo no ha terminado
    if (!timeUp) saltar();
  }, time)
}

// Maneja el evento de click en un bug
function golpear(event) {
  console.log('boing!!')
  if (!event.isTrusted) return; // Alguien intentó hacer trampa

  score++;
  scoreBoard.textContent = score;
}

function iniciarJuego() {
  scoreBoard.textContent = 0;
  timeUp = false;

  saltar();

  setTimeout(() => timeUp = true, 10 * 1000);
}


// 4. Agregar el evento 'click' al todos los elementos 'bug'
let elemento = document.getElementsByClassName("bug")
elemento.forEach( elemen => {
  element.addEventListener("click", function(){alert("Se ha hecho click en este elemento")})
});


// 5. Hacer un bind del evento click del boton iniciar juego
const element = document.querySelector(".start");
element.addEventListener("click", () => {
  console.log("Se clickeo este elemento")
});
