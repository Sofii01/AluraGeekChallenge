//Obtenemos los datos del archivo db.json

const productosLista = ()=> fetch("http://localhost:3000/product").then((response)=>response.json());
console.log(productosLista);
//Empezamos con crud CREATE, REMOVE, UPDATE, DETAILD
//crear un producto json y lo continuamos en crearProducto.js(controller) 
const crearProducto = (img, section,name, precio, descripcion)=>{
    return fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            img,
            name,
            section,
            id: uuid.v4(),
            precio,
            descripcion,
        }),

    });
};
const eliminarProductos = (id)=>{
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
    });
};
const detalleProducto= (id)=>{
    return fetch(`http://localhost:3000/product/${id}`).then((response)=>response.json());
};
const actualizarProducto = (img, section,name, precio, descripcion,id)=>{
    return fetch(`http://localhost:3000/product/${id}`, {
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            img,
            name,
            section,
            precio,
            descripcion,
        }),
    }).then((response)=>response.json()).catch((error) => console.log(error));
};

export const productoSevice = {
    productosLista,
    crearProducto,
    eliminarProductos,
    detalleProducto,
    actualizarProducto,
};