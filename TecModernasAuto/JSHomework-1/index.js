//Ejercicio 1
const letras = ['a', 'a', 'a', 'c', 'a', 'b', 'b', 'b', 'd'];

function duplicateLetters (letra){
   const dup = letra.filter((element, index, array) => array.indexOf(element) !== array.lastIndexOf(element));
   console.log ([...dup]);
   const totals =  [];
      for (let index = 0; index < letras; index++){
      const total = dup.reduce ((accum, current) => accum + current);
      totals.push(total);
      }
}

duplicateLetters(letras);

//Ejercicio 2
const elementos = [1, [2,3], 4, 5, [6,[7]]];

function flattenMethod (element){
   const flatten = element.flat();
   const finalFlat = flatten.flat();
   console.log(finalFlat);
}

flattenMethod(elementos);


//Ejercicio 3
const palabras = ['top','main','tree','ally','fin','line']
// ['main','line',
palabraCompuesta = 'main';


function wordMethod (array,palabra){
   for (const value of array) {
       if(array.includes(palabra)) {
         const totals =  [];
         array.shift(palabra);
         totals.push(palabra);
         console.log(totals);
      }       
   }
}

wordMethod(palabras,palabraCompuesta);


//Ejercicio 4
const numeroEntero = 9119;

function potenciaNum (num){
var arrayOfNum = ('' + num).split('');
   for (var i = 0; i < arrayOfNum.length; i++){
      const totals =  [];
      const final =  arrayOfNum[i**2];
      totals.push(final);
      console.log(totals.toString());
   }
}
potenciaNum(numeroEntero);


