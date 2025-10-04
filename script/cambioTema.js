//Modulo encargado del cambio del tema (Claro oscuro y del movimiento del Toggle)

const boton = document.getElementById("tema-container");
const bola = document.getElementById("bola");

boton.addEventListener("click", function () {
  bola.classList.toggle("on");
  document.body.classList.toggle("claro");
});
