import { productoSevice } from "../service/producto-service.js";
const btnEliminarProducto = document.querySelector("[boton-delete]");

export const eliminarProducto = (id) => {
    productoSevice.eliminarProductos(id)
    .then(() => console.log("producto eliminado"))
    .catch((error) => console.log("ocurrio un error al eliminar producto"));
};