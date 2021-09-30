//Ejercicio 1
const letras = ['a', 'a', 'a', 'c', 'a', 'b', 'b', 'b', 'd'];

function duplicateLetters (letra){
   const dup1 = letra.filter((element, index, array) => array.indexOf(element) !== array.lastIndexOf(element));
   let dup =[...dup1];
   console.log(dup);
   let totales =  [];
   let final = [];
   let cantidad = 0;
      for (let index = 0; index < dup; index++){
         if (dup[index] === dup[index]){
            cantidad ++;
            let letraDup= dup[index];
            totales.push(letraDup, cantidad);
            final.push (totales);
         }
      }
      console.log(final);
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


