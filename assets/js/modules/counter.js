// counter.js

// Variabile di stato
let counter = 0;

// Funzione helper per creare elementi DOM
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

// Funzione per creare il componente Counter
export function createCounter(containerId) {
  const app = document.getElementById(containerId);

  // Contenitore principale
  const card = createElement("div", "card text-center shadow p-4");

  // Titolo
  const title = createElement("h1", null, "Counter App");

  // Valore del counter
  const counterValue = createElement("h2", "my-4 display-4 counter-value", counter);

  // Gruppo pulsanti
  const btnGroup = createElement("div", "d-flex justify-content-around");

  const btnDecrement = createElement("button", "btn btn-danger btn-lg", "−");
  btnDecrement.dataset.action = "decrement";

  const btnIncrement = createElement("button", "btn btn-success btn-lg", "+");
  btnIncrement.dataset.action = "increment";

  btnGroup.append(btnDecrement, btnIncrement);

  // Funzione per aggiornare il valore
  function updateCounter() {
    counterValue.textContent = counter;
  }

  updateCounter();
  
  // Event delegation su btnGroup
  btnGroup.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (action === "increment") {
      counter++;
    } else if (action === "decrement" && counter > 0) {
      counter--;
    }
    updateCounter();
  });

  // Montaggio DOM
  card.append(title, counterValue, btnGroup);
  app.appendChild(card);
}
