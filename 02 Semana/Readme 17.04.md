
# Today 17/07

Las **expresiones regulares** normalmente para strinng, que siguen un patron sirven para encontrar patrones y poder modificarlos

Expresiones regulares sirven buscar y manipular texto

podemos crearlas de diferentes maneras.
Con funciones constructuras
Con RegExp podemos crera expresiones regulares.
definimos esta expresion regular como ejemplo:
```javascript
var myRegExp = new RegExp('j.*t') // encuentra que cumpla la condición que empieza por 'j' y termina en 't', aquí dará true
```

```javascript
myRegExp.test ('javascript') // true
myRegExp.test('JavaScript') // false (es case sensitive)
```

### otra manera es con la expresion literal
```javascript
var myRegExp = /.*t/
// o este ejmplo entre corchetes que cumpla criterios de busqueda.
/[otx]/.test('some text') // true
/[aeiou]/.test('some text') // true

//con el simbolo ^ buscaremos lo que no cumpla el patron
"Some Text".match(/[^a-z]/g)// output ["S", " ", "T"]

```

Lo visto anteriormente en resumen es que podemos generarlas con la opción constructura *'new'* y la otra manera en con las dos barras *'/parametros/'*

The 3 first properties represent the modificators of the regular expression:

*   g: global
*   i: ignoreCase
*   m: multiline

```javascript
var re = new RegExp('j.*t', 'gmi');
```

##Methods of the RegExp Objects

*   *test()*: Returns true if it finds something and false if it doesn't
*   *exec()*: Return an array of string that match the pattern

Podemos utilizar algunos **[metodos de string para las expresiones regulares](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions#string-methods-that-accept-regular-expressions)**:
ejempo:
**[match()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/match)**:
```javascript
var s = "HelloJavaScriptWorld"
undefined
s.match(/a/);//output ["a"]
s.match(/a/g);// output ["a", "a"]
```

**[search()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/search)**:

```javascript
s.search(/j.*a/i);// output 5
```

**[split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)** (puede serparar cumpliendo un patrón una expresion regular :
```javascript
>>> csv.split(','); // Output ["one", " two", "three ", "four"]
>>> csv.split(/\s*,\s*/)// Output["one", "two", "three", "four"]
```

**[replace()](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace)**:

```javascript
'HelloJavaScriptWorld'.replace(/A-Z/, '') // output: "elloJavaScriptWorld"
'HelloJavaScriptWorld'.replace(/([A-Z])/g, "_$1") // output: "_Hello_Java_Script_World"

```

###[Sintasix expresiones regulares](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions#regular-expression-syntax)

### Carácteres de escape que podemos usar: [link](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions#)

'\' - '\n' - '\r' - '\f' - '\t' - '\v' - '\s' - '\S' - '\w' - ' \W' - '\d' - '\D' - '\b' - '\B'


### Página donde podemos probar las expresiones regulares [http://regexr.com/](http://regexr.com/)

**Hoy conocemos los anotacion hungara (*'[hungarian notation](https://en.wikipedia.org/wiki/Hungarian_notation)'*)** Buscar info

---

# HTML
Es un lenguaje de marcados. Es la capa que se encarga de darle contenido a una página web.

##*txt vs HTML*:

En **HTML** puedes indicar y darle significado semantico al texto.
**H**yper **T**ext **M**ark **L**anguage
Semantico --> rol que juega cada palabra dentro del texto

Primer Tag DocType --> significa la versión del HTML.
Ejemplo estructura básica:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

Diferentes tags de un HTML 5:

![https://line25.com/wp-content/uploads/2011/typo-code/html5-layout.jpg](https://line25.com/wp-content/uploads/2011/typo-code/html5-layout.jpg)


HTML5 Element FlowChart

![http://html5doctor.com/downloads/h5d-sectioning-flowchart.png](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)

##Creación formularios:

```
<!DOCTYPE html>
<html>
<body>

<form>
 <fieldset>
  <legend>Personalia:</legend>
  Name: <input type="text"><br>
  Email: <input type="text"><br>
  Date of birth: <input type="text">
 </fieldset>
</form>

</body>
</html>
```
    
*resultado*:
 ![img](img/fieldtext.png)
