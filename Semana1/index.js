/*//ECMA5
var name  = "Juan";

//ECMA6 -  usar esto para el curso
let name = "Juan"; // cuando el valor puede varias en el futuro
const tax = 0.21; // se utiliza cuando se define una variable y no se necesita sobre escribir

function myfunc(){
var name = "Juan";

for (let index = 0; index <array.length; index++){
let name = "Tatiana";
}
 console.log (lastname)
 }

 function myfunc2(){
 let result =  someOtherFunction(5,10);
 return result;


 ** Types **

 Number
 String
 Boolean
 Object
 Array
 Function
 Undefined
 Null

 }

 let name = "Juan";
 const tax = 0.21;

 console.log (typeof name);

 name = 25;

 cconsole.log(typeof name);

 name = ['Peter', 'Jay']

 console.log (typeof name);

 let isOlder =  true;
 console.log (!isOlder);
 console.log (isOlder);
  
*/
 //Objects
 let person = {
    name: "Juan",
    age: 25,
    isOlder: true,
    };
   
   
    //JS Objects dot notation
    console.log (person.name);// utilizar este
   
    //JS Objects Bracket Notation
    console.log(person ['name']);
   
    for (let key in person){
    //console.log(key)
    console.log (person [key]);
    }

    console.log('Hello world');
    console.log('Hello hello');