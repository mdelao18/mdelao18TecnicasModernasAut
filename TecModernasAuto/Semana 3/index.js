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

//JavaScript Promises = 



