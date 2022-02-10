function createTableRows(tableId, products) {
    for(const product of products) {
        $("#" + tableId + " tbody").append(`<tr>
                                <td class="nameCell"><input class="editableInputCell" value="${product.name}" readonly></input></td>
                                <td class="categoryCell editableCell"><input class="editableInputCell" value="${product.category}" readonly></input></td>
                                <td class="priceCell editableCell text-center"><input class="editableInputCell text-center" value="${product.price}" readonly></input></td>
                                <td class="amountCell editableCell text-center"><input class="editableInputCell text-center" value="${product.amount}" readonly></input></td>
                                <td class="deleteCell">
                                    <button class="btn" type="button" onclick="deleteProduct(this, '${product.name}')">
                                        <img class="deleteButtonImg" src="/assets/images/icons/trash.svg" alt="Eliminar producto.">
                                    </button>
                                </td>
                            </tr>`);
    }
}

function displayElement(id) {
    $("#"+id).removeClass("d-none");
}

function hideElement(id) {
    $("#"+id).addClass("d-none");
}

function deleteProduct(button, productName) {
    button.parentElement.parentElement.remove();
    deleteProductFromProducts(productName);
}

function createThemeButtons(themes, themesContainer) {
    for(const theme of themes) {
        $("#" + themesContainer).append(`<button class="btn">
                                            <svg>
                                                <circle style="fill: ${theme.color}" cx="20" cy="20" r="20"/>
                                            </svg>
                                        </button>
        `)
        $("#" + themesContainer + " button").last().on("click", () => {
            loadTheme(theme);
            updateLocalStorageTheme(theme);
        });
    }
}