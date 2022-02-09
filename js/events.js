$("#openNewProductButton").click(() => {
    displayElement(newProductForm)});

$(".closeButton").click(() => {
    hideElement(newProductForm)});

$("#createProductButton").click(() => {
    const name = $("#" + newProductForm + " #name").val();
    const category = $("#" + newProductForm + " #category").val();
    const price = $("#" + newProductForm + " #price").val();
    const amount = $("#" + newProductForm + " #amount").val();

    let error = false;

    if(products.some((product) => product.name === name) && name.length > 0) {
        displayElement("nameRepeatedHelp")
        error = true;
    } else {
        hideElement("nameRepeatedHelp");
    }
    if(!name.match("^[A-Za-z0-9 ]{1,20}$")) {
        displayElement("nameHelp");
        error = true;
    } else {
        hideElement("nameHelp");
    }
    if(!category.match("^[A-Za-z0-9 ]{1,20}$")) {
        displayElement("categoryHelp");
        error = true;
    } else {
        hideElement("categoryHelp");
    }
    if(!price.match("^[0-9]{1,10}[,]{0,1}[0-9]{0,2}$")) {
        displayElement("priceHelp");
        error = true;
    } else {
        hideElement("priceHelp");
    }
    if(!amount.match("^[0-9]{1,10}$")) {
        displayElement("amountHelp");
        error = true;
    } else {
        hideElement("amountHelp");
    }

    if(error === false) {
        const newProduct = createProduct(name, category, price, amount);

        addProductToProducts(newProduct);
        createTableRows("productsTable", [newProduct]);
        hideElement(newProductForm);
    }
});

$("#refreshProductsButton").click(() => {
    $("#productsTable tbody").html("");
    loadProducts();
});