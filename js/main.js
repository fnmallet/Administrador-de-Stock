///// Variables

let products = loadProducts();
let answer = 0;
const newProductForm = "newProductForm";

///// Main

products = sort(products, "ascending", "name");
initializeTable("productsTable", products);
setCssVars();