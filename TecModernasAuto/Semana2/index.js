let person = {
name : 'Juan',
age: 25,
isOlder: true,
};


//Operators in JS
let x = 2;
let y = 2;
let z = 2;
//1. Arithmetic (+ - * / % **)
console.log (x + y); // concatena porque uno es int y el otro string
console.log (x - y);
//(x**y) eleva a la potencia / (x%y) =  modulo/ residuo / 

//Concatenar
const name2 = 'Juan';
const lastname = 'Perez'
console.log (name2 + ' ' + lastname);

//2. Increment ++
y = y + 1;
console.log(y);
++x; // incrementa
console.log(x);
z += 5;
console.log(z);

//3. Compararision
console.log( x>y);
console.log( x>=y);
console.log( x===y);
console.log( x!==y);

//4. Ternary Operator
console.log (`${name2} ${lastname === 'Perez' ? 'Doe' : 'NONE'}`);
// Operador ternario:  se pone la condicion y lo que este despues del ? 
//es lo que tiene que pasar si la condicion es true, si es false, pasa lo que viene despues de los :
//const isOlder =  person.isOlder ? 'Yes':'No';

//Truthy and Falsy Values
//Falsy = 0, false, null, undefined, Nan, todo fuera de estos es Truthy
let myVar;

if(myVar){
    console.log ('myVar does not exist');
}else{
            console.log ('myVar does exist');
        }

   console.log( !myVar ? 'myvar does not exist' : 'my var does exist');

   //Spread Operator Expande lo que tiene el objeto a otras variables

   const {name, age} = person;
        console.log(name);
        console.log (age);

        const numbers = [1,2,3,4,5];//array o colecciones, el nombre va en plural
        const users = ['Melissa', 'Grey']
  
        const [first, second, ...rest] =  numbers;
        console.log (first);
        console.log (second);

        //rest operator
        console.log (rest);


//ES5 /  ES6, estandar de JavaScript

//Diferencia entre parametro y argumento = parametro cuando se define la funcion, argumento cuando se llama la funcion
//Definir funcion //  function declaration
function myFunc (...elements){  // ... convierte a array automaticamente // cuando se declara la funcion, aqui van los parametros (placeholders)
    elements.length;
    for (element of elements){
    console.log(element);
    }
}
//aqui se llama / ejecuta la funcion
myFunc('hola', 25, true, 67.5); // aqui van los argumentos, cuando se envian los valores / valor real

//hoisting: se puede llamar a la funcion antes de declararse, proceso que ejecuta el motor de js, empieza de arriba
// solo para functions declaraton y no para functions expressions
//hacia abajo, y va en orden, pero en hosting, escanea el archivo y las funciones declaradas se leen primero.

//function expressions
const  myFunc2  = function(...elements){ 
    elements.length;
    for (element of elements){
    console.log(element);
    }
} 

myFunc2('hola', 25, true, 67.5); 


//Arrow functions 
const greet = (name) => `Hola ${name}`; // el return es implicito

const func3 = (name, age) =>{
 return {name, age};
};


const greeting =  greet ('Melissa');
const processed =  func3 ('Pablo', 31)

console.log(greeting);
console.log(processed);

//Arrays
const names = ['Melissa', 'Pablo', 'Carmen', 'Juana', 'Marco'];
//console.log (names.length);
//console.log (names.push('Alejandro'));//agrega al final
//console.log(names);
//console.log(names.pop()); // elimina el ultimo elemento
//console.log(names);
//console.log(names.unshift('Lucia')); // agrega al inicio de la lista
//console.log(names);

//for (name of names){
//    let isIncluded = false;
 //   isIncluded = name.startsWith('P');
//}

console.log(names.every((name) => name.startsWith('P')));
console.log(names.some((name) => name.startsWith('P')));
console.log(names.filter((name) => name.startsWith('P')));
const filtered =  names.filter ((name)=> name.startsWith('P'));
console.log(names);
console.log (filtered);

const find =  names.find ((name)=> name.startsWith('P'));
console.log (find);

console.log (names.map((name)=>name.toUpperCase()));
console.log(names.map((map)=> ({name, length: name.length})));

const numbers2 = [1,2,3,4,5];

for (number of numbers2){
    let total = 0;
    total += number;
}

console.log(numbers2.reduce((total, number)=> total + number));



