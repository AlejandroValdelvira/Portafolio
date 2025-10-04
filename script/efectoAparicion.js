//Modulo encargado del efecto de los Hobbies al aparecer en pantalla.

//seleccion de los elementos que van a aplicarle el efecto
const elementos = document.querySelectorAll(".fade");

//observar los elementos cuando aparecen en el viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 300);
      }
    });
  },
  {
    //porcentaje del elemento visible
    threshold: 0.3,
  }
);

//añadir los elemenos
elementos.forEach((elemento) => observer.observe(elemento));
