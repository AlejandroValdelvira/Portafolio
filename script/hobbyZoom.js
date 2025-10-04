//Modulo que se encarga de la logica para agrandar las imagenes de los hobbies al hacer click, y cerrarlas al clicar fuera.

const hobbies = document.querySelectorAll(".fotoHobby");
const popup = document.getElementById("popup");
const popupContent = popup.querySelector(".popup-content");

//recorrer tododos los elementos con la clase .fotohobby
hobbies.forEach((hobby) => {
  hobby.addEventListener("click", () => {
    // obtener el fondo real desde CSS
    const bg = window.getComputedStyle(hobby).backgroundImage;

    // hacer el popup visible y aplicarle el fondo que tenia el elemento seleccionado del bucle
    popupContent.style.backgroundImage = bg;
    //hacerlo visible
    popup.style.display = "flex";
  });
});
//al hacer click fuera de la imagen, quito display al popup para hacerlo invisible
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
