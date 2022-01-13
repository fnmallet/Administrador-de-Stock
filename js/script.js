///// Variables

let listaProductos = [];
let respuesta = 0;

///// Clases

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularValor() {
        return this.precio * this.cantidad;
    }
}

///// Funciones

function crearProducto() {
    let nombre = prompt("Ingrese el nombre del nuevo producto:");
    while (buscarProducto(nombre) !== -1) {
        alert("El producto ingresado ya existe");
        nombre = prompt("Ingrese el nombre del nuevo producto:");
    }
    let precio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del nuevo producto:"));
    return new Producto(nombre, precio, cantidad);
}

// Devuelve -1 si no existe el producto. Si existe devuelve el índice
function buscarProducto(nombre) {
    let productoEnLista = listaProductos.find((producto) => producto.nombre === nombre);
    return listaProductos.indexOf(productoEnLista);
}

function agregarProducto() {
    nuevoProducto = crearProducto();
    listaProductos.push(nuevoProducto);
    console.log(`Nuevo producto agregado. Son ${nuevoProducto.cantidad} productos de tipo ${nuevoProducto.nombre} a $${nuevoProducto.precio} cada uno. Representan un valor de $${nuevoProducto.calcularValor()}`);
}

function eliminarProducto(nombre) {
    let indiceProducto = buscarProducto(nombre);
    if (indiceProducto !== -1) {
        listaProductos.splice(indiceProducto, 1)
    }
}

function ordenarProductos(criterio) {
    if (criterio === "ascendente") {
        listaProductos.sort((a, b) => {
            if (a.nombre < b.nombre) {
                return -1;
            } else if (b.nombre > a.nombre) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    else if (criterio === "descendente") {
        listaProductos.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return -1;
            } else if (b.nombre < a.nombre) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    else {
        console.error("Error: criterio de ordenamiento inválido");
    }
}

function calcularValorTotal() {
    let valorTotal = 0;

    for (producto of listaProductos) {
        valorTotal += producto.calcularValor();
    }

    console.log(`El valor de todos los productos en stock es de $${valorTotal}`);
}

function mostrarProductos() {
    console.log(listaProductos);
}

///// Main

alert("Se pedirá que ingrese los datos de 4 tipos de productos distintos para agregar al stock.")

agregarProducto();
agregarProducto();
agregarProducto();
agregarProducto();
calcularValorTotal();

// Ordenamiento de la lista
respuesta = prompt("Ingrese el número correspondiente al criterio que desea utilizar para ordenar la lista de productos:\n1. Ascendente\n2. Descendente\n");

while ((respuesta !== "1") && (respuesta !== "2") && (respuesta === null)) {
    alert("La opción ingresada no es válida.")
    respuesta = prompt("Ingrese el número correspondiente al criterio que desea utilizar para ordenar la lista de productos:\n1. Ascendente\n2. Descendente\n");
}

if (respuesta === "1") {
    ordenarProductos("ascendente");
} else {
    ordenarProductos("descendente");
}

mostrarProductos();

// Eliminación del producto
respuesta = prompt("Ingrese el nombre del producto que desea eliminar:");

while (buscarProducto(respuesta) === -1) {
    alert("El producto ingresado no existe.")
    respuesta = prompt("Ingrese el nombre del producto que desea eliminar:");
}

eliminarProducto(respuesta);
alert("El producto " + respuesta + " fue eliminado.")
mostrarProductos();