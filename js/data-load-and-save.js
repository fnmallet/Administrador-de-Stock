function loadTheme() {
    let theme = localStorage.getItem("theme");

    if(theme) {
        return JSON.parse(theme);
    } else {
        theme = themes.find((theme) => theme.name === "defaultTheme");
        updateLocalStorageTheme(theme);
        return theme;
    }
}

function loadProducts() {
    return new Promise((resolve) => {
        let products = localStorage.getItem("products");

        if(products) {
            resolve(JSON.parse(products));
        } else {
            $.ajax({
                method: "GET",
                url: productsURL,
                success: (response) => {
                    products = response;
                    updateLocalStorageProducts(products);
                    resolve(products);
                }
            });
        }
    });
}

function updateLocalStorageProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}

function updateLocalStorageTheme(newTheme) {
    localStorage.setItem("theme", JSON.stringify(newTheme));
}