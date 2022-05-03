'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this.head = null;
}

function Node (value){
  this.value = value;
  this.next = null;
}
LinkedList.prototype.add = function(value){
       let newNode = new Node (value);
       let current= this.head;
       if (!current){
         this.head = newNode;
         return newNode;
       }
       while(current.next !== null){
        current = current.next;
  }
   current.next = newNode;
   return newNode;
}


LinkedList.prototype.remove = function(){ 
  let current = this.head;
    //eliminar el ultimo nodo
  if(this.head === null){
    return null;
  } else if (current && !current.next){
    let aux = current.value;
    this.head = null;
    return aux;
  }
  while (current.next.next){
    current = current.next;
  }
  let aux = current.next.value;
  current.next = null;
  return aux;
}


LinkedList.prototype.search = function(value){ 
  if(this.head === null) return null;
  let current = this.head;
  while (current){
    if(current.value === value) return current.value;
     else if(typeof value == "function"){
      if (value(current.value)){
        return current.value;
      }
    }
    current = current.next;
  }
  return null;
}


// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.numBuckets = 35;
  this.contenedor = []
}
HashTable.prototype.hash = function(key){
  let sum = 0;
  for(let i =0;i<key.length; i++){
    sum+=key.charCodeAt(i);
  }
  return sum%this.numBuckets;
};
HashTable.prototype.set = function(key, value){
  if(typeof key !== "string") throw TypeError('Keys must be strings');
  let i = this.hash(key);
  if(this.contenedor[i]=== undefined){
    this.contenedor[i] = {};
  }
  this.contenedor [i][key] = value;
};
HashTable.prototype.get = function(key){
 let i = this.hash(key);
 return this.contenedor[i][key];
};
HashTable.prototype.hasKey = function(key){
  let i = this.hash(key);
 return this.contenedor[i].hasOwnProperty(key);
};
//var ropero = new HashTable().hash;
//console.log(ropero("a"));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
