///// Variables

let products = [{name: "a", price: 14, amount: 250},{name: "c", price: 30, amount: 107},{name: "z", price: 10, amount: 100},{name: "b", price: 100, amount: 500}];
let answer = 0;

///// Clases

class Product {
    constructor(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    calcValue() {
        return this.price * this.amount;
    }
}

///// Funciones

function createProduct() {
    let name = prompt("Ingrese el nombre del nuevo producto:");
    while (findProduct(name) !== -1) {
        alert("El producto ingresado ya existe");
        name = prompt("Ingrese el nombre del nuevo producto:");
    }
    let price = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
    let amount = parseInt(prompt("Ingrese la cantidad del nuevo producto:"));
    return new Product(name, price, amount);
}

// Devuelve -1 si no existe el producto. Si existe devuelve el índice
function findProduct(name) {
    let productInList = products.find((product) => product.name === name);
    return products.indexOf(productInList);
}

function addProduct() {
    const newProduct = createProduct();
    products.push(newProduct);
    
    console.log(`Nuevo producto agregado. Son ${newProduct.amount} productos de tipo ${newProduct.name} a $${newProduct.price} cada uno. Representan un valor de $${newProduct.calcValue()}`);
}

function deleteProduct(name) {
    let productIndex = findProduct(name);
    if (productIndex !== -1) {
        products.splice(productIndex, 1)
    }
}

function sortProducts(criterion) {
    if (criterion === "ascending") {
        products.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (b.name > a.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    else if (criterion === "descending") {
        products.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            } else if (b.name < a.name) {
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

function calcTotalValue() {
    let totalValue = 0;

    for (const product of products) {
        totalValue += product.calcValue();
    }

    console.log(`El valor de todos los productos en stock es de $${totalValue}`);
}

///// Funciones para la generación de la tabla de productos
function createTableHead(products) {
    const thead = document.createElement("thead");
    const row = document.createElement("tr");
    for(const key of Object.keys(products[0])) {
        const cell = document.createElement("th");
        cell.innerText = key;
        row.append(cell);
    }
    thead.append(row);
    return thead;
}

function createTableBody(products) {
    const tbody = document.createElement("tbody");
    for(const product of products) {
        const row = document.createElement("tr");
        for(const property of Object.values(product)) {
            const cell = document.createElement("td");
            cell.innerText = property;
            row.append(cell);
        }
        tbody.append(row);
    }
    return tbody;
}

function initializeTable(tableId, roducts) {
    document.getElementById(tableId).append(createTableHead(products));
    document.getElementById(tableId).append(createTableBody(products));
}

function hideTable(tableId) {
    document.getElementById(tableId).style.display = "none";
}

///// Main

sortProducts("ascending");
initializeTable("productsTable", products);
//hideTable("productsTable", products)