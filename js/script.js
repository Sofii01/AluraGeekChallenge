import { eliminarProducto } from "../controllers/eliminarProducto.js";
import { renderProductsSearch } from "../controllers/crearProducto.js";

const removeProduct = (event) => {
    var id = event.id;
    if (!id) {
      id = event.parentElement.id;
    }
    eliminarProducto(id);
};
const editProduct = (event) => {
    var id = event.id;
    if (!id) {
      id = event.parentElement.id;
    }
    window.location.href = `./agregarProducto.html?id=${id}`;
};
const search = (event) => {
    const input = document.querySelector("[data-input-search]");
    const word = input.value;
    renderProductsSearch(word);
    input.value = "";
};

const btnEliminarProducto = document.querySelector("[boton-delete]");
btnEliminarProducto.addEventListener("click", (event)=>{
    removeProduct(event);
});
const btnEditarProducto = document.querySelector("[boton-modific]");
btnEditarProducto.addEventListener("click", (event)=>{
    editProduct(event);
})