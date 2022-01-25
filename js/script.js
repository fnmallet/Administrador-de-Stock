///// Variables

let products = [{id: 1, name: "a", category: "electrónica", price: 14, amount: 250},{id: 2, name: "c", category: "electrónica", price: 30, amount: 107},{id: 3, name: "z", category: "electrónica", price: 10, amount: 100},{id: 4, name: "b", category: "electrónica", price: 100, amount: 500}];
let answer = 0;

///// Clases

class Product {
    constructor(name, price, amount) {
        this.id = 0;
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

function deleteProductFromProducts(name) {
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

function createTableRows(tableId, products) {
    const tbody = document.getElementById(tableId).querySelector("tbody");
    for(const product of products) {
        const row = `
        <tr class="align-middle">
            <td class="nameCell">${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price}</td>
            <td>${product.amount}</td>
            <td class="deleteCell">
                <button class="btn" onclick="deleteProduct(this, '${product.name}')">
                    <img class="deleteButtonImg" src="/assets/images/icons/trash.svg" alt="Eliminar producto">
                </button>
            </td>
        </tr>`
        tbody.innerHTML += row;
    }
}

function deleteProduct(button, productName) {
    button.parentElement.parentElement.remove();
    deleteProductFromProducts(productName);
}

function initializeTable(tableId, products) {
    createTableRows(tableId, products);
}

function hideTable(tableId) {
    document.getElementById(tableId).style.display = "none";
}