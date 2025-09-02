// counter.js

// Variabile di stato
let counter = 0;

// Funzione per creare il componente Counter
export function createCounter(containerId) {
  const app = document.getElementById(containerId);

  // Contenitore principale
  const card = document.createElement("div");
  card.className = "card text-center shadow p-4";

  // Titolo
  const title = document.createElement("h1");
  title.textContent = "Counter App";

  // Valore del counter
  const counterValue = document.createElement("h2");
  counterValue.textContent = counter;
  counterValue.className = "my-4 display-4 counter-value";

  // Gruppo pulsanti
  const btnGroup = document.createElement("div");
  btnGroup.className = "d-flex justify-content-around";

  const btnDecrement = document.createElement("button");
  btnDecrement.textContent = "−";
  btnDecrement.className = "btn btn-danger btn-lg";

  const btnIncrement = document.createElement("button");
  btnIncrement.textContent = "+";
  btnIncrement.className = "btn btn-success btn-lg";

  // Funzioni
  function updateCounter() {
    counterValue.textContent = counter;
  }

  btnIncrement.addEventListener("click", () => {
    counter++;
    updateCounter();
  });

  btnDecrement.addEventListener("click", () => {
    if (counter > 0) {
      counter--; // scala solo se è maggiore di 0
    }
    updateCounter();
  });


  // Montaggio DOM
  btnGroup.appendChild(btnDecrement);
  btnGroup.appendChild(btnIncrement);

  card.appendChild(title);
  card.appendChild(counterValue);
  card.appendChild(btnGroup);

  app.appendChild(card);
}
