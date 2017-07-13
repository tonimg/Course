## Today 28.04 


.factory() son funciones que devuelve objetos. Y los objetos con una serie de metodos.

concepto promesas.
Cuando realizas peticiones AJAX. Mientras tarda la peticiones hay que lidiar mientras tanto y que la app no se bloquee.

Cuando creo una promesa, empaqueto en un objeto una operacion asincrona.
y se queda esperando con el metodo .then() en cuanto los tiene los muestra asignandolos al scope.

Trabaja en modo controladores (bloques de codigo). Y cada conrolador se encarga de alguna cosa en concreto.

El efecto llamado promesa es para encapsular peticiones asincronas.
ejemplo. $http.get(url)

Ejemplos:

- [Angular Demo Api Spotify](Angular-Demo-Api-Spotify/index.html)
- [Angular Demo Api GitHub_Estructura](Angular-Demo-Api-GitHub_Estructura/index.html)
- [Angular ToDo-List App](Angular-ToDo-List-App/index.html)

Distintos ejemplos / fases realizadas por Juanma:

- [Ejemplos Juanma](Angular-Demo-Api-Spotify/Juanma)


## SPA 

**S**ingle **P**age **A**pplication

Servir las paginas directamente desde el cliente sin solicitar al servidor. Solo se solicita al servidor archivos JSON.

Necesitamos cargar el CDN de angular y otro más de las rutas, como la siguiente:

``https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.1/angular-route.js``

Obtenida de la librerias CDN de angular en la siguiente URL:
[https://cdnjs.com/libraries/angular.js/](https://cdnjs.com/libraries/angular.js/)

PAra esto en el HTML, debemos de habilitar una zona para que sea dinamica y la sirva nuestro 'servidor' **SPA**, con el siguiente tag puesto directamente en el HTML ``ng-view``, como si de un tag HTML se tratara.

Ejemplo de lo que es un SPA utilizando el $route

[Angular Bootstrap Routing](Angular-Bootstrap-Routing/index.html)
