// Eventos para el formulario de nuevos productos

$("#openNewProductButton").click(() => {
    displayElement(newProductForm)
    $("#newProductForm").animate({ opacity: 1 }, 500);
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

    if (products.some((product) => product.name === name) && name.length > 0) {
        displayElement("nameRepeatedHelp")
        error = true;
    } else {
        hideElement("nameRepeatedHelp");
    }
    if (!name.match(getRegularExpression("name"))) {
        displayElement("nameHelp");
        error = true;
    } else {
        hideElement("nameHelp");
    }
    if (!category.match(getRegularExpression("category"))) {
        displayElement("categoryHelp");
        error = true;
    } else {
        hideElement("categoryHelp");
    }
    if (!price.match(getRegularExpression("price"))) {
        displayElement("priceHelp");
        error = true;
    } else {
        hideElement("priceHelp");
    }
    if (!amount.match(getRegularExpression("amount"))) {
        displayElement("amountHelp");
        error = true;
    } else {
        hideElement("amountHelp");
    }

    if (error === false) {
        const newProduct = createProduct(name, category, price, amount);

        addProductToProducts(newProduct);
        updateLocalStorageProducts(products);
        createTableRows("productsTable", [newProduct]);
        hideElement(newProductForm);
        $("#" + newProductForm + " #name").val("");
        $("#" + newProductForm + " #category").val("");
        $("#" + newProductForm + " #price").val("");
        $("#" + newProductForm + " #amount").val("");
    }
});

// Eventos para la modificación de productos
$("#name").keypress((e) => {
    onNewProductFormKeypress(e);
});

$("#category").keypress((e) => {
    onNewProductFormKeypress(e);
});

$("#amount").keypress((e) => {
    onNewProductFormKeypress(e);
});

$("#price").keypress((e) => {
    onNewProductFormKeypress(e);
});

function onNewProductFormKeypress(e) {
    if(e.keyCode == 13) {
        $("#createProductButton").click();
    }
}

function getRegularExpression(property) {
    switch(property) {
        case "name":
            return new RegExp("^[a-z][a-z0-9 áéíóú]{0,19}$", "iu");
        case "category":
            return new RegExp("^[a-z0-9áéíóú]{1,20}$", "iu");
        case "amount":
            return new RegExp("^[0-9]{1,10}$", "u");
        case "price":
            return new RegExp("^[0-9]{1,10}[,]{0,1}[0-9]{0,2}$", "u");
    }
}

function getInputErrorMessage(property) {
    switch(property) {
        case "name":
            return "Error: debe ingresar entre 1 y 20 caracteres alfanuméricos. Se aceptan espacios. Debe comenzar con una letra.";
        case "category":
            return "Error: debe ingresar una palabra de entre 1 y 20 caracteres alfanuméricos.";
        case "amount":
            return "Error: la cantidad debe ser un número entero de entre 1 y 10 cifras, sin puntos.";
        case "price":
            return "Error: el precio debe ser un número de entre 1 y 10 cifras, con hasta dos decimales.";
    }
}

// Eventos para hacer editable la tabla
function addEditableInputsEvents() {
    $(".editableInputCell").click((e) => {
        const input = $(e.currentTarget);
        input.data("value", input.val());
        input.removeAttr("readonly");
    });

    $(".editableInputCell").blur((e) => {
        const input = $(e.currentTarget);
        const parentRow = input.parents(':eq(1)');
        let productName = parentRow.find(".nameCell > input").val();
        const productPropertyToEdit = input.data("property");
        const newValue = input.val();

        input.attr("readonly", "true");
        if(input.data("value") !== input.val()) {
            if(input.val().match(getRegularExpression(productPropertyToEdit))) {
                if(productPropertyToEdit === "name") {
                    productName = input.data("value");
                }
                editProductProperty(productName, productPropertyToEdit, newValue);
                $("#editNotificationSuccess").fadeIn(500).delay(2000).fadeOut(500);
            } else {
                input.val(input.data("value"));
                $("#editNotificationFailText").text(getInputErrorMessage(productPropertyToEdit))
                $("#editNotificationFail").fadeIn(500).delay(3000).fadeOut(500);
            }
        }
    });

    $(".editableInputCell").keypress((e) => {
        if(e.keyCode == 13) {
            $(e.currentTarget).blur();
        }
    });
}

$(".sortButton").click((e) => {
    const caretRight = $(e.currentTarget).find(".caretRight");
    const caretUp = $(e.currentTarget).find(".caretUp");
    const caretDown = $(e.currentTarget).find(".caretDown");
    const property = $(e.currentTarget).data("property");

    if (!caretRight.hasClass("d-none")) {
        caretRight.addClass("d-none");
        caretDown.removeClass("d-none");
        sortProductsTable(products, "descending", property);
    } else if (!caretDown.hasClass("d-none")) {
        caretDown.addClass("d-none");
        caretUp.removeClass("d-none");
        sortProductsTable(products, "ascending", property);
    } else {
        caretUp.addClass("d-none");
        caretDown.removeClass("d-none");
        sortProductsTable(products, "descending", property);
    }
    for (const button of $(".sortButton").toArray()) {
        if (button !== e.currentTarget) {
            $(button).find(".caretUp").addClass("d-none");
            $(button).find(".caretDown").addClass("d-none");
            $(button).find(".caretRight").removeClass("d-none");
        }
    }
});

// Evento para recargar toda la tabla
$("#refreshTableButton").click(() => {
    localStorage.removeItem("products");
    location.reload();
});