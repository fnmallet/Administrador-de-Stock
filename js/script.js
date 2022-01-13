///// Variables

let listaProductos = [];

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
    while (comprobarExistencia(nombre)) {
        nombre = prompt("Ingrese el nombre del nuevo producto:");
    }
    let precio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del nuevo producto:"));
    return new Producto(nombre, precio, cantidad);
}

function comprobarExistencia(nombre) {
    if (listaProductos.find((producto) => producto.nombre === nombre)) {
        alert("El producto ingresado ya existe");
        return true;
    }
    else {
        return false;
    }
}

function agregarProducto() {
    nuevoProducto = crearProducto();
    listaProductos.push(nuevoProducto);
    console.log(`Nuevo producto agregado. Son ${nuevoProducto.cantidad} productos de tipo ${nuevoProducto.nombre} a $${nuevoProducto.precio} cada uno. Representan un valor de $${nuevoProducto.calcularValor()}`);
}

function ordenarProductos(criterio) {
    if (criterio === "ascendente")
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
        console.error("Error: criterio de ordenación inválido");
    }
    console.log(listaProductos);
}

function calcularValorTotal() {
    let valorTotal = 0;

    for (producto of listaProductos) {
        valorTotal += producto.calcularValor();
    }

    console.log(`El valor de todos los productos en stock es de $${valorTotal}`);
}