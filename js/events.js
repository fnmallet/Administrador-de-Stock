// Eventos para el formulario de nuevos productos

$("#openNewProductButton").click(() => {
    displayElement(newProductForm)
    $("#newProductForm").animate({opacity: 1}, 500);
});

$(".closeButton").click(() => {
    hideElement(newProductForm);
    $("#newProductForm").css("opacity", 0);
});

// Eventos para la creación de productos
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

// Evento para recargar lista de productos
$("#refreshProductsButton").click(() => {
    $("#productsTable tbody").html("");
    loadProducts();
});

// Eventos para hacer editable la tabla
function addEditableInputsEvents() {
    $(".editableInputCell").click((e) => {
        const input = $(e.target);
        input.removeAttr("readonly");
    });

    $(".editableInputCell").blur((e) => {
        const input = $(e.target);
        const parentRow = input.parents(':eq(1)');
        const productName = parentRow.find(".nameCell > input").val();
        const productPropertyToEdit = getPropertyFromCell(input.parent());
        const newValue = input.val();
    
        input.attr("readonly", "true");
        editProductProperty(productName, productPropertyToEdit, newValue);
        console.log(products);
    });
}