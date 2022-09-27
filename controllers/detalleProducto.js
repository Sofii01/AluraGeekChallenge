import { productoSevice } from "../service/producto-service.js";

const getProduct = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "index.html";
    }

    const img = document.querySelector("[data-url]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    
    try {
        const product = await productoSevice.detalleProducto(id);
        if (product) {
            img.src = product.img;
            nombre.textContent = product.nombre;
            precio.textContent = product.precio;
            descripcion.textContent = product.descripcion;
        }
    } catch (error) {
        console.log(error);
    }
};

getProduct();