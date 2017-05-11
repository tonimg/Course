var demo = 'hello'
function getDemo (demo) { // argumento recibido a local y va hacer caso al que tiene dentro.
  var test = function () { // variable locales
    return demo + 'my friend' // aqui demo vale:
  }
  demo = demo + 'how are you' // cualquier referencia a demo esta definida en la funcion como argumento y se comporta como variable.
  return test() // va ejecutar solo lo que hay en su interior. // aqui la linea demo vale "Hi how are you"
}
console.log(getDemo('Hi')) // devuelve: Hi how are you my friend
demo = 'Hey'
