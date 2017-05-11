## Today 01.05

Semana del proyecto
Rutas en Angular.

-- en .factory es el lugar correcto para hacer las peticiones.
Para las rutas,
    debemos de crearlas dentro del angular.module
        se crean mediante .config (function ($routeProvider))
        y como parametro en el m odule hay que poner ngRoute.
        Quedando algo similar a esto:
```java
        angular.module('mainApp', ['ngRoute'])
        .config(function('$routeProvider')){
            lo que sea....
        }
```

