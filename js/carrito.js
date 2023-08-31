import { productos } from "../db/productos.js";

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const divCarrito = document.getElementById("carrito");

const mostrarProductosEnCarrito = () => {
    divCarrito.innerHTML = "";

    carrito.forEach((productoId) => {
        //const producto = productos.find(p => p.id === productoId);

        //if (producto) {
            const card = document.createElement("div");
            card.className = "producto";
            card.innerHTML = card.innerHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                <img src=".${productoId.imagen}" alt="${productoId.nombre}" class="galeria rounded mx-auto d-block"> 
                <p>${productoId.nombre}</p>
            </div>
        `;
            divCarrito.appendChild(card);
//}
    });
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosEnCarrito();
});
