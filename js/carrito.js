import { productos } from "../db/productos.js";

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const divCarrito = document.getElementById("carrito");

const mostrarProductosEnCarrito = () => {
    divCarrito.innerHTML = "";
 
    carrito.forEach((producto) => {

            const card = document.createElement("div");
            card.className = "producto col-lg-3 col-md-6 text-center";
            card.innerHTML = card.innerHTML = `
                <img src=".${producto.imagen}" alt="${producto.nombre}" class="galeria rounded mx-auto d-block"> 
                <p>${producto.nombre}</p>
                <button id="eliminar${producto.id}" class="btn btn-danger">Eliminar</button>
            `;
        divCarrito.appendChild(card);
        const btnEliminar = document.getElementById(`eliminar${producto.id}`)   
        
        btnEliminar.addEventListener("click", () => eliminarDeCarrito(producto.id));
    });
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosEnCarrito();
});

// Función para eliminar un producto del carrito
const eliminarDeCarrito = (id) => {
    const index = carrito.findIndex(producto => producto.id === id);
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas Seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            if (index !== -1) {
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                mostrarProductosEnCarrito();
            }
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'El producto ha sido eliminado',
            'De acuerdo'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El producto sigue en el carrito',
            'error'
          )
        }
      })
}; 



