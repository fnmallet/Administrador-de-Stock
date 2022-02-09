function loadProducts() {
    let defaultProducts = [];

    $.ajax({
        method: "GET",
        url: productsURL,
        success: (response) => {
            defaultProducts = response;
            products = defaultProducts;
            products = sort(products, "ascending", "name");
            createTableRows(productsTable, products);
        }
    });
}