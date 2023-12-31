const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const divProductos = document.getElementById("productos");

fetch("./db/data.json")
    .then((response) => response.json())
    .then((productosDisponibles) => {

        const generarCardsProductos = (productos) => {
            divProductos.innerHTML = "";

            productos.forEach((producto) => {
                const { id, nombre, imagen, categoria } = producto;
                let card = document.createElement("div");

                card.className = "producto col-lg-3 col-md-6 text-center";

                card.innerHTML = `
                <img src="${imagen}" alt="${nombre}" class="galeria rounded mx-auto d-block"> 
                <p>${nombre}</p>
                <button id="comprar${id}" class="btn btn-primary">Presupuestar</button>
                `;

                divProductos.appendChild(card);

                const btncomprar = document.getElementById(`comprar${id}`);
                btncomprar.addEventListener("click", () => {
                    agregarAlCarrito(producto);

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto agregado al carrito',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
            });
        };

        generarCardsProductos(productosDisponibles);

        // Funcion para selector de categoria
        const selectCategoria = document.getElementById("filtroCategoria");

        selectCategoria.addEventListener("change", () => {
            const categoriaSeleccionada = selectCategoria.value;

            if (categoriaSeleccionada === "productos") {
                generarCardsProductos(productosDisponibles);
            } else {
                const productosFiltrados = productosDisponibles.filter(producto => producto.categoria === categoriaSeleccionada);
                generarCardsProductos(productosFiltrados);
            }
        });
    });
