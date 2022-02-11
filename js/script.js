///// Clases
class Product {
    constructor(name, category, price, amount) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.amount = amount;
    }

    calcValue() {
        return this.price * this.amount;
    }
}

///// Funciones
function createProduct(name, category, price, amount) {
    return new Product(name, category, price, amount);
}

function addProductToProducts(product) {
    products.push(product);
}

function deleteProductFromProducts(name) {
    let productIndex = products.findIndex((product) => product.name === name);
    if (productIndex !== -1) {
        products.splice(productIndex, 1)
    } else {
        console.error(`Error: no existe un producto de nombre ${name} en el array de productos.`)
    }
}

function editProductProperty(name, property, value) {
    products.find(product => product.name === name)[property] = value;
}

function sort(objects, criterion, property) {
    if (property === "price" || property === "amount") {
        if (criterion === "ascending") {
            objects.sort((a, b) => {
                return parseInt(a[property]) - parseInt(b[property]);
            });
        } else if (criterion === "descending") {
            objects.sort((a, b) => {
                return parseInt(b[property]) - parseInt(a[property]);
            });
        } else {
            console.error("Error: criterio de ordenamiento inválido");
        }
    }
    else {
        if (criterion === "ascending") {
            objects.sort((a, b) => {
                if (a[property] < b[property]) {
                    return -1;
                } else if (a[property] > b[property]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        else if (criterion === "descending") {
            objects.sort((a, b) => {
                if (a[property] > b[property]) {
                    return -1;
                } else if (a[property] < b[property]) {
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
    return objects;
}

function getPropertyFromCell(cell) {
    if (cell.hasClass("nameCell")) {
        return "name";
    } else if (cell.hasClass("categoryCell")) {
        return "category";
    } else if (cell.hasClass("priceCell")) {
        return "price";
    } else if (cell.hasClass("amountCell")) {
        return "amount"
    }
    else {
        console.error("Error: no se encontró una propiedad válida en la celda a editar.")
    }
}