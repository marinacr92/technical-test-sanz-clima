# Prueba técnica de Sanz Clima

Proyecto para valorar el nivel de conocimientos. Consiste en una aplicación web Full-Stack que realiza la suma de una serie de parámetros pasados por el usuario. Además, también incluye una sección en la que poder ver el histórico de los cálculos.

Para la realización del proyecto se ha usado el Framework _Next.js_ con _TypeScript_ como lenguaje de programación.

En la web hay 3 secciones diferenciadas:

- **Formulario**. Es la zona en la que introducir los parámetros que queremos sumar. Podremos añadir todos los campos que necesitemos gracias al botón `Añadir campo`. Dichos campos pueden eliminarse de uno en uno utilizando el botón de `X` situado a la derecha de cada _input_ o eliminarlos todos a la vez con el botón `Borrar todo`. Por último, el botón de `Resultado` es el que realiza el _fetch_ al _endopoint_ `/api/calc` y manda los valores que se han ido introduciendo por el _body_, realiza el cálculo y devuelve el resultado de dicha operación. Además de realizar el cálculo, guarda los valores de las operaciones y sus resultados en el estado _history_.

- **Resultado**. Donde aparecerá el resultado de la operación.

- **Histórico**. Sección en la que encontrar las operaciones realizadas con anterioridad. Se cargan los valores del estado _history_. Al cargar la página se realiza una llamada _fetch_ al _endpoint_ `/api/history` que devuelve el histórico almacenado en la base de datos y se guarda en el estado _history_.

### _Scripts_ disponibles

#### `npm run dev`

Ejecuta la aplicación en el **modo de desarrollo**.
Abre [http://localhost:3000](http://localhost:3000) en el navegador.
La página volverá a cargar cada vez que se realicen cambios.
También es posible ver los errores en la consola.

¡Muchas gracias!
