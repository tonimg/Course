## [Today 25.04 ](https://skylabcoders.github.io/bootcamp-abril2017/?full#116)

Continue with the exercises of yesterday and another put for the techeer today "[Data_jquery_exercise](Data_jquery_exercise)".

### [jQuery Events](http://learn.jquery.com/events/)

From JavaScript we can listen the events. This is the structure how do it:

![events.png](img/events.png)

When we click in a link (a), we also do click in its container (li,ul), in the body and finally in the document. This is what is called event propagation.

You can capture these events with
[``$().on()``](http://api.jquery.com/on) y [``$().off()``](http://api.jquery.com/off/): The cross-browsing **[addEventListener](https://developer.mozilla.org/en/DOM/element.addEventListener)**/**[removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.removeEventListener)**.

The event handler, was define like an objet when I define a function.

Examples:

1. Prevent the even click
```javascript
$("a").on('click', function(e){
e.preventDefault()
console.log("This is is preventDefault")
    })
```

2. Stop propagation (corta al nivel superior pero no a los siblings)
```javascript
$("a").on('click', function(e){
e.stopPropagation()
console.log("This is is preventDefault")
    })
```

3. Stop inmediate propagation (deja de propagarse en cualquier direccion)
```javascript
$("a").on('click', function(e){
e.stopInmeditatePropagation()
console.log("This is is preventDefault")
    })
```

4. Change the class for other.
```javascript
$("a").on('click', function(e){
$('.class').addClass('.inverse')
    })
```

5. Example events
```javascript
 // $('ul').on('click',function(e) {
    //   e.preventDefault();
    //   var $liParent = $(e.target).closest('li')
    //   alert( $liParent.text() )
    // })

    $('ul').on('click', 'li', function(e) {
      console.log(this)
      e.preventDefault();
      alert( $(this).text() )
    })
```



This is a Function Callback. *Remember* :

```javascript
function calculator (operation, a , b){
    operation a,b
}
caculator(function(a,b){return a+b},3,6)

```

The even type we can capture are:

blur, focus, focusin, focusout, load, resize, scroll, unload, click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave, change, select, submit, keydown, keypress, keyup, error.

**Examples**: 

- [events_first_steps](examples/events_first_steps.html)
- [data method](examples/data_method.html)
- [list elems several ways](examples/list_elems_several_ways.html)
- [jquery_dynamic_list](examples/jquery_dynamic_list.html)





