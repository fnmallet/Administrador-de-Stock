function loadProducts() {
    const localStorageProducts = localStorage.getItem("products");
    if(localStorage.getItem("products")) {
        return JSON.parse(localStorageProducts);
    }
    else {
        const defaultProducts = [{name: "Producto 1", category: "Categoría 1", price: 14, amount: 250},{name: "Producto 3", category: "Categoría 1", price: 30, amount: 107},{name: "Producto 2", category: "Categoría 2", price: 10, amount: 100},{name: "Producto 4", category: "Categoría 3", price: 100, amount: 500}];
        localStorage.setItem("products", JSON.stringify(defaultProducts));
        return defaultProducts;
    }
}

function updateLocalStorageProducts(products) {
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(products));
}