// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.

function runCallbacks(callbacks) {
  return callbacks.forEach(callback => callback());
}

function firstCallback() {
  return console.log("I'm the first callback");
}

function secondCallback() {
  return console.log("I'm the second callback");
}

function thirdCallback() {
  return console.log("I'm the third callback");
}

const callbackArray = [firstCallback, secondCallback, thirdCallback];
runCallbacks(callbackArray);