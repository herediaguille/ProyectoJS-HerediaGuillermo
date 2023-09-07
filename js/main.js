import { productos } from "../db/productos.js"

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

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
        
        card.className = "producto col-lg-3 col-md-6 text-center"

        card.innerHTML = `
        <img src="${imagen}" alt="${nombre}" class="galeria rounded mx-auto d-block"> 
        <p>${nombre}</p>
        <button id="comprar${id}" class="btn btn-primary">Presupuestar</button>
        `
        divProductos.appendChild(card)

        const btncomprar = document.getElementById(`comprar${id}`);
        btncomprar.addEventListener("click", () => {
            agregarAlCarrito(producto);
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
              })
        });
    });
};
export { agregarAlCarrito };

