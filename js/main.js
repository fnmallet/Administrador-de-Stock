///// Variables

let products = loadProducts();
const newProductForm = "newProductForm";

///// Main

products = sort(products, "ascending", "name");
createTableRows("productsTable", products);
setCssVars();