export const productos = [
    {
        id: 1,
        nombre: "Lampara de 3 luces",
        imagen: "./img/lampara.jpg",
        categoria: "lamparas"
    },
    {
        id: 2,
        nombre: "Lampara Colgante",
        imagen:"./img/Lampara-colgante.jpg",
        categoria:"lamparas"
    },
    {
        id: 3,
        nombre: "Lampara Ovni",
        imagen: "./img/lamparaOvni.jpg",
        categoria: "lamparas"
    },
    {
        id: 4,
        nombre: "Mesa Nordica",
        imagen: "./img/mesanordica.jpg",
        categoria: "mesas"
    },
    {
        id: 5,
        nombre: "Espejo",
        imagen: "./img/espejo.jpg",
        categoria: "espejos"
    },
    {
        id: 6,
        nombre: "Mesa Nordica",
        imagen: "./img/mesanordica1.jpg",
        categoria: "mesas"
    },
    {
        id: 7,
        nombre: "Lampara De Pie",
        imagen: "./img/Lampara-de-pie.jpg",
        categoria: "lamparas"
    },
    {
        id: 8,
        nombre: "Canasto",
        imagen: "./img/canasto.jpg",
        categoria: "Canasto"
    }
];

// carga de productos utilizanso un operador
JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));