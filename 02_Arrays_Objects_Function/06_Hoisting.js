// Hoisting- It is a feature in js, where variable and function declarations are moved into the top of their containing scope. 

/* Only possible in case of Regular Function Declaration, Not possible in case of function Expression & Arrow functions */


/* In case of variable declared with var will give undefined if accessed before initialization.
   In case of variable declared with let and const will give ReferencedError if accessed before initialization-> this is 
   because they are in temporal dead zone (TDZ is an area of a block where variable is inacessible untill computer completely initializes it with a value.)  
*/
// In order to avoid hoisiting use Strict at the top of the editor. 

hello(); // Hello world--> Because, before the invokation of hello function all the log values inside the function was already present in the global object. 
console.log(x); // Undefined-->(Although variable x is defined in the memory space but it not defined with any value).
var x=6;
function hello() {
  console.log("Hello World");
}
hello(); // Hello World
console.log(x); // 6