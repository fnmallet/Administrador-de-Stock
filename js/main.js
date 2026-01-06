///// Variables

const productsTable = "productsTable";
const newProductForm = "newProductForm";
const themesContainer = "themesContainer";
const productsURL = "./json/products.json";
const themes = [{ name: "defaultTheme", color: "#212529" }, { name: "blueTheme", color: "#0d6efd" }, { name: "redTheme", color: "#dc3545" }, { name: "greenTheme", color: "#198754" }];
let theme;
let products;

///// Main

async function main() {
    theme = loadTheme()
    setCssVars();
    loadThemeToCss(theme);
    createThemeButtons(themes, themesContainer);
    products = await loadProducts();
    products = sort(products, "ascending", "name");
    generateProductsTable(products);
}

main();