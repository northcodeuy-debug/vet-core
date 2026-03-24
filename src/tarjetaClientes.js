function crearTarjetaClientes(review){
    return `<div class="tarjetaClientes">
      <div class="clienteReviewContainer">
        <p class="clienteReview">"${review.descripcion}"</p>
      </div>
      <div class="clientePerfil">
        <img class="clienteIcono" src="${review.imagen}" alt="">
        <div>
          <p class="clienteNombre">${review.nombre}</p>
          <p class="clienteDueño"> Dueño de ${review.dueño}</p>
        </div>
      </div>
    </div>`;
}

const review = [
    {
        descripcion: "La atención en Beltramelli es increíble. Trataron a mi gato con mucha paciencia y amor. ¡No iría a ningún otro lugar!",
        imagen:"src/iconoCliente.jpg",
        nombre:"Ana Martinez" ,
        dueño: "Luna",
    },
    {
        descripcion: "La atención en Beltramelli es increíble. Trataron a mi gato con mucha paciencia y amor. ¡No iría a ningún otro lugar!",
        imagen:"src/iconoCliente.jpg",
        nombre:"Ana Martinez" ,
        dueño: "Luna",
    },
    {
        descripcion: "La atención en Beltramelli es increíble. Trataron a mi gato con mucha paciencia y amor. ¡No iría a ningún otro lugar!",
        imagen:"src/iconoCliente.jpg",
        nombre:"Ana Martinez" ,
        dueño: "Luna",
    },
]

const contenedorClientes = document.getElementById("tarjetaClientes");

function renderReviews(idContenedor, lista) {
  const contenedor = document.getElementById(idContenedor);

  if (!contenedor) {
    console.warn("No existe:", idContenedor);
    return;
  }

  contenedor.innerHTML = lista.map(crearTarjetaClientes).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderReviews("tarjetaClientes", review);
});