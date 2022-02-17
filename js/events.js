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
    if (!name.match("^[A-Za-z][A-Za-z0-9 ]{0,19}$")) {
        displayElement("nameHelp");
        error = true;
    } else {
        hideElement("nameHelp");
    }
    if (!category.match("^[A-Za-z0-9]{1,20}$")) {
        displayElement("categoryHelp");
        error = true;
    } else {
        hideElement("categoryHelp");
    }
    if (!price.match("^[0-9]{1,10}[,]{0,1}[0-9]{0,2}$")) {
        displayElement("priceHelp");
        error = true;
    } else {
        hideElement("priceHelp");
    }
    if (!amount.match("^[0-9]{1,10}$")) {
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
    }
});

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

// Eventos para hacer editable la tabla
function addEditableInputsEvents() {
    $(".editableInputCell").click((e) => {
        const input = $(e.currentTarget);
        input.removeAttr("readonly");
    });

    $(".editableInputCell").blur((e) => {
        const input = $(e.currentTarget);
        const parentRow = input.parents(':eq(1)');
        const productName = parentRow.find(".nameCell > input").val();
        const productPropertyToEdit = getPropertyFromCell(input.parent());
        const newValue = input.val();
    
        input.attr("readonly", "true");
        editProductProperty(productName, productPropertyToEdit, newValue);
        $("#editNotification").fadeIn(500).delay(1000).fadeOut(500);
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