document.getElementById("openNewProductButton").onclick = () => {
    displayElement(newProductForm);
}

document.getElementById("closeNewProductButton").onclick = () => {
    hideElement(newProductForm);
}

document.getElementById("createProductButton").onclick = () => {
    const form = document.getElementById(newProductForm);

    const name = form.querySelector("#name").value;
    const category = form.querySelector("#category").value;
    const price = form.querySelector("#price").value;
    const amount = form.querySelector("#amount").value;

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
        updateLocalStorageProducts(products);
        createTableRows("productsTable", [newProduct]);
        hideElement(newProductForm);
    }
}

function deleteProduct(button, productName) {
    button.parentElement.parentElement.remove();
    deleteProductFromProducts(productName);
    updateLocalStorageProducts(products);
}