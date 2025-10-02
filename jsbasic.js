console.log("hello world");
Process.stdout.write("hello world\n");
console.table({a:1,b:2,c:3});
console.warn("this is a warning");
console.error("this is an error");

// data type  is 
/*
string
number 
boolean 
undefined
object
BigInt
Symbol
null
array
function

*/



// Variablres 
var a = 10; // function scope
let b = 20; // block scope
const c = 30; // block scope, constant
let  name="John Doe"; // string
let isLogin = true; // boolean
let age;
let salary = null; // null
let bigInt = 1234567890123456789012345678901234567890n;
let sym = Symbol("id"); // symbol
let arr = [1,2,3,4,5]; // array
let obj = {name:"John", age:30}; // object

function add(a,b){
    return a+b;

}

console.log(add(3,4)); // 7