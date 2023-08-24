import { agregarAlCarrito } from "./main.js";
import { productos } from "../db/productos.js";

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const divCarrito = document.getElementById("carrito");

const mostrarProductosEnCarrito = () => {
    divCarrito.innerHTML = "";

    carrito.forEach((productoId) => {
        const producto = productos.find(p => p.id === productoId);

        if (producto) {
            const card = document.createElement("div");
            card.className = "producto";
            card.innerHTML = card.innerHTML = `
            <div class="col-lg-3 col-md-6 col-sm-6 text-center">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="galeria rounded mx-auto d-block"> 
                <p>${producto.nombre}</p>
                <button id="comprar${producto.id}" class="btn btn-primary">Comprar</button>
            </div>
        `;
            divCarrito.appendChild(card);
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    mostrarProductosEnCarrito();
});