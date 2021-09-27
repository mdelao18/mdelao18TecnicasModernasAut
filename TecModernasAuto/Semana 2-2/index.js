//Arrays
const names = ['Melissa', 'Pablo', 'Carmen', 'Juana', 'Marco'];

const user = {
    username: 'Sofi123',
    email: 's@s.com',
    };

//Object Destructuring

//const { name, age, country} =  person;

//Array  Destructuring

//const [name] =  names;


//Spread Operator
const additionalInfo = {
name: 'Sofi',
lastname: 'Perez',
age: 25,
country: 'MX',
};

// for of array
//for (const name of names){}

//for (const key in child){
//    person[key] = child[key];
//}

//Spread Operator // mezcla dos arrays

const newPerson = {...user,...additionalInfo, gender: 'female', children: ['Matt', 'Lilly']};

//console.log(newPerson);

//Ejercicio de ejemplo, eliminar el primer # del array, sumar los elementos y meterlos en otro array

//shift =  elimina el primer elemento /  reduce =  los suma  /// recorrer elementos  numbers.length
//original funcion v1
function partsSums(numbers){
    const totals =  [];
    const totalInterations = numbers.length;
    for (let index = 0; index < totalInterations; index++){
        console.log(totals);
        const total = numbers.reduce ((accum, current) => accum + current);
        totals.push(total);
        numbers.shift()
    }
    totals.push(0);
    return totals;
}

//v2
function partsSums2 (numbers, totals = []){
    if (numbers.length > 0){
        totals.push(numbers.reduce ((accum, current) => accum + current)); // suma lo que hay dentro del array
        numbers.shift();
        return partsSums2 (numbers,totals);
    }
totals.push(0);
return totals;
}
//Tarea, duplicados  en array infexOf() da indice de un elemento,  lastIndexOf()

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

// Find Duplicates
const dups = animals.filter((element, index, array) => array.indexOf(element) !== array.lastIndexOf(element));
// A set is a collection of unique elements.
let uniques = new Set(dups);
// console.log([...uniques]);

// Javascript Promises
// Keep my promise =====> Resolved
// Waiting for promise =====> Pending
// Break my promise =====> Rejected

// Promise
let completed = true;
const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  completed ? resolve('Success') : reject('Error message');
  // }, 5000);
});

console.log('Before Promise');
// Receive promises and send promises
promise
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => resolve(result + ' 2'));
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve) => resolve(result + ' 3'));
  })
  .then((result) => {
    console.log(result);
  });

// Async / Await
(async function myTest() {
  try {
    const result = await promise;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.log(error);
  }
})();

console.log('After Promise');
console.log('another message');
console.log('another message2');



