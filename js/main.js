import { productos } from "../db/productos.js"

const divProductos = document.getElementById("productos")

let productosDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";
    
    productos.forEach(producto => {

        const { id, nombre, imagen, categoria } = producto
        let card = document.createElement("div")
        
        card.className = "producto"
        card.innerHTML = `
        <div class="col-lg-3 col-md-6 col-sm-6 text-center">
        <img src="${imagen}" alt="${nombre}" class="galeria rounded mx-auto d-block"> 
        <p>${nombre}</p>
        <button id="comprar${id}" class="btn btn-primary">Comprar</button>
        </div>
        `
        divProductos.appendChild(card)
    });
}

