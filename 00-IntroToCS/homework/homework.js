"use strict";
///a
function BinarioADecimal(num) {
  let cantidad = String(num);
  let array = [...cantidad];
  let inver = array.reverse();
  let sumar = 0;
  for(let i = 0;i<=cantidad.length; i++){
    if (inver[i]== "1"){
      sumar = sumar +2**i;
    }
  }
return sumar;
  // tu codigo aca
  // algo
}

function DecimalABinario(num) {
  let binario = [];
 for (let i = num; i>0;){
       binario.unshift(i%2);
       i= Math.floor(i/2);

 }
 return binario.join("");
  // tu codigo aca

}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
