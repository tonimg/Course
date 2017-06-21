
# 11/04

### Social Media

Creación de blog, y estar presentes en redes sociales.

## Programación JS web development

[![javascriptjs.png](img/javascriptjs.png)](https://skylabcoders.github.io/bootcamp-abril2017/?full#javascript)

Se puede resumir en tres principales [capas](https://www.thoughtco.com/three-layers-of-web-design-3468761):

-----------------
* Structure or content layer: HTML
* Style or presentation layer: CSS3 (Cascading Style Sheets)
* Behavior: JavaScript
-----------------
[JavaScript](https://developer.mozilla.org/en/JavaScript_Language_Resources) está basado en [ECMAScript](http://es.wikipedia.org/wiki/ECMAScript) --> que es la especificación del lenguaje.

Resumen historia desarrollo lenguaje [JavaScript](https://developer.mozilla.org/en/JavaScript_Language_Resources):  

<img src="https://github.com/juanmaguitar/javascript-notes/raw/master/markdown-en/01-clear-ideas/img/js-history-1.png" height="256px">
<img src="https://github.com/juanmaguitar/javascript-notes/raw/master/markdown-en/01-clear-ideas/img/js-history-2.png" height="256px">


Se llama [AJAX](http://www.uberbin.net/archivos/internet/ajax-un-nuevo-acercamiento-a-aplicaciones-web.php) a la parte asincrona de [JavaScript](https://developer.mozilla.org/en/JavaScript_Language_Resources) que solicita o envia datos en segundo plano sin que el código se pare. Antiguamente se realizaba la petición completa de la página. Con la aportación de [AJAX](http://www.uberbin.net/archivos/internet/ajax-un-nuevo-acercamiento-a-aplicaciones-web.php), esto desaparece y solo se recarga la parte necesaria.

Cada navegador maneja de distinta manera [JavaScript](https://developer.mozilla.org/en/JavaScript_Language_Resources), ya que cada uno trabaja con un "motor" diferente:

* Mozilla → Spidermonkey
* Chrome → V8
* Safari → JavaScriptCore
* IE → Chakra
* Node.js → V8

Para miminizar este comportamiento entre diferentes navegadores, surgió diferentes [librerias y frameworks](https://en.wikipedia.org/wiki/Comparison_of_JavaScript_frameworks) (como [JQuery](https://es.wikipedia.org/wiki/JQuery)).

---

### Definiciones:

- variables = un contenedor de datos.
- se define una variable indicando ``var = "x"``;
- se puede declarar una variable vacia `var=""`
- una vez declara no es necesaria definir nuevamente.
- El lenguaje es *case sensitive*
- Datos primitivos:
    * Number
    * String
    * Boolean
    * Undefined
    * Null
    * Cero
    * Cadena vacia

### Tipos de variables:

*   Number: 5
*   Strings: "cualquiercadenacaracteres"
*   Boolean: true / false
*   Undefined
*   Null

***notes***
*Lo que no es una variable es un objeto*

---

Example, we have this simple multiplication table:

```javascript
var res = '\n'; 
for(var i =1 ; i <= 10; i++) { 
  for(var j =1 ; j <= 10; j++) { 
    res += i*j + '\t'; 
  } 
  res+= '\n';
}
```

And like result is this:

![image](https://cl.ly/2v3j3H1h0p13/Image%202017-04-11%20at%202.39.15%20PM.png)

