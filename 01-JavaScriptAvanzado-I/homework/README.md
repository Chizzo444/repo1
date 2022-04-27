
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5; 
var b = 10; 
var c = function(a, b, c) {//comienza function padre
  var x = 10;
  console.log(x); // imprime 10
  console.log(a); 
  var f = function(a, b, c) { //comienza function hijo
    b = a;
    console.log(b);
    b = c; 
    var x = 5; 
  } //termina function hijo
  f(a,b,c); //llama a function hijo sin asignar argumentos,
  console.log(b);
}//termina function padre
c(8,9,10); //llama a function padre asignando 8 , 9 y 10
console.log(b); // va a imprimir 
console.log(x);// va a imprimir

// resultado
/*  10
*/
```


```javascript
console.log(bar); //imprime 1
console.log(baz);// imprime 2
foo(); // imprime "Hola!"
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //imprime "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor); // imprime "tony"
(function() {
   if(true) {
      var instructor = "Franco"; 
      console.log(instructor); // imprime "Franco"
   }
})();
console.log(instructor); // imprime "tony", "Franco", "Tony"(?)
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);          
    // los ultimos console.log imprimirian la var instructor global y la var pm global
    //los console.log dentro del if imprimirian la var y let que estan dentro de ella.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // imprime 2
"2" * "3" // imprime 6
4 + 5 + "px" //imprime 9 px
"$" + 4 + 5 //imprime $9
"4" - 2 //imprime 2
"4px" - 2 //imprime 2px
7 / 0 //imprime 0
{}[0] //imprime [0]
parseInt("09") //imprime 9
5 && 2 //imprime 2
2 && 5// imprime 5
5 || 0// imprime 0
0 || 5 //imprime 5
[3]+[3]-[10]//imprime 23
3>2>1 // true
[] == ![]//true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
//el output seria undefined y 2.
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
