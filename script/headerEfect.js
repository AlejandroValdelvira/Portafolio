//modulo que se encarga de marcar y mover a la seccion del portafolio

//seleccionar los elementos link del header
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    //quitar todos el efecto de todos los elmentos antes de dar uno()
    links.forEach((i) => i.classList.remove("active"));
    //en el enlace clicado se añada la clase active que da el efecto de seleccionado
    this.classList.add("active");

    setTimeout(() => {
      this.classList.remove("active");
    }, 500);
    //obtener el destino quitando el "#" inicial
    const targetId = this.getAttribute("href").substring(1);
    //movimiento hacia el elemento
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
