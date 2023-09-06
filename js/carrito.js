import { productos } from "../db/productos.js";

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const divCarrito = document.getElementById("carrito");

const mostrarProductosEnCarrito = () => {
    divCarrito.innerHTML = "";
 
    carrito.forEach((producto) => {

            const card = document.createElement("div");
            card.className = "producto col-lg-3 col-md-6 col-sm-6 text-center";
            card.innerHTML = card.innerHTML = `
                <img src=".${producto.imagen}" alt="${producto.nombre}" class="galeria rounded mx-auto d-block"> 
                <p>${producto.nombre}</p>
                <button id="eliminar${producto.id}" class="btn btn-danger">Eliminar</button>
            `;
        divCarrito.appendChild(card);
        const btnEliminar = document.getElementById(`eliminar${producto.id}`)   
        
        btnEliminar.addEventListener("click", () => eliminarDeCarrito)
    });
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosEnCarrito();
});

