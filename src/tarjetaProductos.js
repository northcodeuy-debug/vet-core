
function crearCard(producto) {
  return `
    <div class="tarjetaProductos">
      <img class="imagenProducto" src="${producto.imagen}" alt="">
      
      <p class="tituloTarjeta">${producto.titulo}</p>
      <p class="descripcionTarjeta">${producto.descripcion}</p>
      
      <div class="productosExtraTarjeta">
        <p class="precioTarjeta">$${producto.precio.toLocaleString("es-UY")}</p>
        
        <div class="botonesTarjeta">
        <img class="iconoWhatsapp" src="src/iconoWhatsapp.svg" alt="">
          <div class="carritoContainer">
            <img src="src/carrito.svg" alt="Carrito" class="carrito">
          </div>
        </div>
      </div>
    </div>
  `;
}

const productosRacion = [
  {
    titulo: "Alimento Premium Adulto",
    descripcion: "Nutrición balanceada 15kg",
    precio: 2450,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
];

const productosAccesorios = [
  {
    titulo: "Accesorio Premium Adulto",
    descripcion: "Nutrición balanceada 15kg",
    precio: 2450,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
];

const productosMedicamentos = [
  {
    titulo: "Medicamento Premium Adulto",
    descripcion: "Tratamiento especializado 15kg",
    precio: 2450,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
  {
    titulo: "Alimento Cachorro",
    descripcion: "Para crecimiento saludable",
    precio: 2100,
    imagen: "src/imagenProducto.png"
  },
];

function renderProductos(idContenedor, lista) {
  const contenedor = document.getElementById(idContenedor);

  if (!contenedor) {
    console.warn("No existe:", idContenedor);
    return;
  }

  contenedor.innerHTML = lista.map(crearCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductos("contenedorRacion", productosRacion);
  renderProductos("contenedorAccesorios", productosAccesorios);
  renderProductos("contenedorMedicamentos", productosMedicamentos);
});