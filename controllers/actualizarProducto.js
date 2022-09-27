import { productoSevice } from "../service/producto-service.js";

const img = document.querySelector("[data-url]");
const section = document.querySelector("[data-categoria]");
const nombre = document.querySelector("[data-nombre]");
const precio = document.querySelector("[data-precio]");
const descripcion = document.querySelector("[data-descripcion]");

const buscarProduct = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id === null) {
        window.location.href = "index.html";
    }

    try {
        const product = await productoSevice.detalleProducto(id);
        img.value = product.img;
        section.value = product.section;
        nombre.value = product.nombre;
        precio.value = product.price;
        descripcion.value = product.descripcion;
    } catch (error) {
        console.log(error);
    }
};
const actualizarProducto = (id)=>{
    btnEditarProducto.addEventListener("click", ()=>{
        productoSevice.actualizarProducto(
            img.value,
            section.value,
            nombre.value, 
            precio.value, 
            descripcion.value,
            id
        ).then(()=>console.log("Producto actualizado")).catch((error)=>console.log("ocurrio un error al actualizar el producto" + error));
    });
};
buscarProduct();
