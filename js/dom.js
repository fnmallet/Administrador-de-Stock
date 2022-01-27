function createTableRows(tableId, products) {
    const tbody = document.getElementById(tableId).querySelector("tbody");
    for(const product of products) {
        const row = createElement("tr", "", "");
        row.appendChild(createElement("td", "nameCell", product.name));
        row.appendChild(createElement("td", "categoryCell", product.name));
        row.appendChild(createElement("td", "priceCell text-center", product.price));
        row.appendChild(createElement("td", "amountCell text-center", product.amount));
        const deleteCell = createElement("td", "deleteCell", "");
        const deleteButton = createElement("button", "btn", "");
        const img = createElement("img", "deleteButtonImg", "")
        deleteButton.onclick = (e) => {
            deleteProduct(e.currentTarget, product.name);
        }
        img.setAttribute("src", "/assets/images/icons/trash.svg");
        img.setAttribute("alt", "Eliminar producto.");
        deleteButton.appendChild(img);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tbody.appendChild(row);
    }
}

function createElement(tag, classList, innerHTML) {
    const element = document.createElement(tag);
    element.classList = classList;
    element.innerHTML = innerHTML;
    return element;
}

function displayElement(id) {
    document.getElementById(id).classList.remove("d-none");
}

function hideElement(id) {
    document.getElementById(id).classList.add("d-none");
}

function setCssVars() {
    document.querySelector(':root').style.setProperty("--nav-height", document.querySelector("nav").clientHeight + 'px');
    document.querySelector(':root').style.setProperty("--footer-height", document.querySelector("footer").clientHeight + 'px');
}