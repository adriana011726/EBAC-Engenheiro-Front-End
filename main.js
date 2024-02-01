const form = document.getElementById("myForm");
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (parseInt(campoB.value) > parseInt(campoA.value)) {
    message.textContent = "Formulário válido!";
    message.style.color = "green";
  } else {
    message.textContent = "Campo B deve ser maior que Campo A.";
    message.style.color = "red";
  }
});