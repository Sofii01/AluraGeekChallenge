import { productoSevice } from "../service/producto-service.js";
import { validarInputs } from "../js/validaciones/agregarProductos.js";

const btnAgregarProducto = document.querySelector("[data-button]");
// obtenemos los datos del formulario
btnAgregarProducto.addEventListener("submit", (event) => {
    event.preventDefault();
    validarInputs();
    const img = document.querySelector("[data-url]").value;
    const section = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = "$" + document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoSevice.crearProducto(img, section, nombre, precio, descripcion).then(() => {
        alert("Registro completo");
        window.location.href = "../listaProductos.html";
        console.log("Se completo");
    }).catch((error) => console.log("Ocurrio un error"+error));
    const card = nuevoProducto(img, nombre, precio, id.uuid.v4());

});
//ahora lo creamos para listaProductos.html
const nuevoProducto = (img,nombre, precio,id) =>{
    const card = document.createElement("li");
    
    const contenido =`<img src="${img}" alt="img produc" class="img_producto">
        <p class="productos__name">${nombre}</p>
        <p class="productos__precio">${precio}</p>
        <p class="productos_nroProducto">#111111</p>
        <div class="images_deleteModific">
        <button id="${id}" class="button__product-edit"><img src="./assets/img/Vectordelete2.png" alt="imagen Deleteproducto" class="images_Delete"></button>
        <button id="${id}" class="button__product-remove"><img src="./assets/img/Vectorlapiz.png" alt="imagen ModificarProducto" class="images_Modific"></button>
    </div>`;
    card.innerHTML += contenido;
    card.classList.add("producto__card");
    return card;
}
//ahora lo creamos para al index.html
const newProduct = (img,nombre, precio,id)=>{
    const card = document.createElement("li");
    const contenido = `<img src="${img}" alt="img diversos4" class="img_producto">
    <p class="productos__name">${nombre}</p>
    <p class="productos__precio">${precio}</p>
    <a href="${id}" class="productos__link">Ver Producto</a>`;
    card.innerHTML += contenido;
    card.classList.add("producto__card");
    return card;
}
//obtenemos todos los productos
const getAllProducts = async () => {
    try {
        const products = await productoSevice.productosLista();
        return products;
    } catch (error) {
        console.log(error);
    }
};

//buscamos a que section pertenece
const starwars = document.querySelector("[section-starwars]");
const consolas = document.querySelector("[section-consolas]");
const diversos = document.querySelector("[section-diversos]");
const allProducts = document.querySelector("[allProducts]");
const products = await getAllProducts();

const agregarProductos = (productList) =>{
    if (starwars && consolas && diversos) {
        agregarPorSection(productList);
    }else if(allProducts){
        agregarATodosProductos(productList);
    }
}


//lo agregamos al index
const agregarPorSection = (productList) => {
    productList.forEach(({ nombre, precio, img, id, section }) => {
        const card = newProduct(img,nombre, precio, id);
        if (section === "Star Wars") {
            starwars.innerHTML += card;
        } else if (section === "consolas") {
            consolas.innerHTML += card;
        } else {
            diversos.innerHTML += card;
        }
    });
};
//lo agregamos al listaProductos
const agregarATodosProductos = (productList) => {
    allProducts.innerHTML = "";
    productList.forEach(({nombre, precio, img, id, section }) => {
        const card = nuevoProducto(img,nombre, precio,id);
        allProducts.appendChild(card);
    });
};
export const renderProductsSearch = (word) => {
    const searchProducts = [];
    products.forEach((element) => {
        if (element.name.includes(word) || element.id === word) {
            searchProducts.push(element);
        }
    });
    agregarPorSection(searchProducts);
};

agregarPorSection(products);