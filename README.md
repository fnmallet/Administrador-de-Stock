# Administrador-de-Stock

El proyecto consiste en un administrador de stock hecho con HTML, CSS, Bootstrap, Javascript y Jquery.

Presenta un diseño simple pero la implementación del código de Javascript implica la aplicación de todos los temas vistos a lo largo del curso.

# Funcionalidades

Las funcionalidades que presenta son la presentación de una tabla donde se muestra una lista con todos los productos registrados, y sobre cada producto se puede ver a qué categoría pertenece, el precio por unidad y la cantidad del producto en stock.
La carga de los productos se hace la primera vez con una llamada AJAX a un archivo json incluido en el proyecto. Los productos recibidos se guardan en el local storage para conservar luego de recargar la página, todos los cambios que se hagan sobre los productos.
En la página hay un botón para agregar productos, que tiene la funcionalidad de abrir un formulario donde se completan los campos para agregar un nuevo producto a la tabla. Este formulario cuenta con validación de datos.
Otro botón que hay es el de reiniciar tabla, que elimina la lista de productos del local storage y recarga la página, haciendo que se soliciten los productos nuevamente al json con AJAX.
Con el local storage queda simulada la existencia de un servidor.
Otra funcionalidad de la tabla es la posibilidad de modificar cada valor al hacer clic sobre uno. Esto también cuenta con validación de datos. Al finalizar la edición, un mensaje informa si se editó el valor correctamente. Además cada fila, que representa a un producto, tiene un botón para eliminar el producto.
La última funcionalidad que tiene la tabla, es la de ordenar productos en orden creciente o decreciente según la propiedad elegida, al hacer clic sobre el botón con forma de triángulo ubicado en los encabezados de cada columna.
Por último, la página cuenta con un botón en la parte superior derecha, que despliega una lista de opciones para elegir el color principal de la página. El color elegido se guarda en el local storage.

# Código Javascript

El proyecto cuenta con varios archivos de javascript. La primer función de Javascript que se ejecuta es main(), y está en el archivo main.js.
