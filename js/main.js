///// Variables

const productsTable = "productsTable";
const newProductForm = "newProductForm";
const themesContainer = "themesContainer";
const productsURL = "/json/products.json";
const themes = [{name: "defaultTheme", color: "#212529"}, {name: "blueTheme", color: "#0d6efd"}, {name: "redTheme", color: "#dc3545"}, {name: "greenTheme", color: "#198754"}];
let theme = loadLocalStorageTheme();

///// Main

setCssVars();
createThemeButtons(themes, themesContainer)
loadProducts();
loadTheme(theme);