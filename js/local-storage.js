function loadProducts() {
    const localStorageProducts = localStorage.getItem("products");
    if(localStorage.getItem("products")) {
        return JSON.parse(localStorageProducts);
    }
    else {
        const defaultProducts = [{name: "producto 1", category: "categoría 1", price: 14, amount: 250},{name: "producto 3", category: "categoría 1", price: 30, amount: 107},{name: "producto 2", category: "categoría 2", price: 10, amount: 100},{name: "producto 4", category: "categoría 3", price: 100, amount: 500}];
        localStorage.setItem("products", JSON.stringify(defaultProducts));
        return defaultProducts;
    }
}

function updateLocalStorageProducts(products) {
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(products));
}