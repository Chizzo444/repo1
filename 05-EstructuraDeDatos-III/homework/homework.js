'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (valor) {
  let nodo = new BinarySearchTree(valor);

  if (valor > this.value) {
    if (!this.right) {
      this.right = nodo;
    } else {
      this.right.insert(valor);
    }
  } else {
    if (!this.left) {
      this.left = nodo;
    } else {
      this.left.insert(valor);
    }
  }
};

BinarySearchTree.prototype.contains = function (valor) {
  if (this.value === valor) return true;
  if (valor > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(valor);
    }
  } else {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(valor);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, recorrido) {
  if (recorrido === "pre-order") {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido);
    }
    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido);
    }
  } else if (recorrido === "post-order") {
    // recorrrido del post order
    //  izq -> der -> nodo
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido);
    }

    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido);
    }

    cb(this.value);
  } else {
    if (this.left) {
      this.left.depthFirstForEach(cb, recorrido);
    }

    cb(this.value);

    if (this.right) {
      this.right.depthFirstForEach(cb, recorrido);
    }
  }
};


BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;
  else if (this.left && this.right)
    return 1 + this.left.size() + this.right.size();
  else if (this.left) return 1 + this.left.size();
  else if (this.right) return 1 + this.right.size();
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array) {
  if (!array) {
    var array = []; // [ 25, x, b]
  }

  if (this.left) {
    array.push(this.left);
  }
  if (this.right) {
    array.push(this.right);
  }
  cb(this.value);
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
