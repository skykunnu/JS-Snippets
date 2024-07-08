// Array and Object Destructuring 
//-----------------------------------------------------

// Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a concise way.
//----------------------------------------------------------------------------------------------------------------------------------------------


// Swapping variables
//-----------------------------

let a=2;
let b=4;

 [a,b]=[b,a]

 // console.log(a) // 4
 // console.log(b) // 2




//  Extracting Values from an Array
//-----------------------------------

let arr=['Shikhar','Khandelwal']
let [firstName,lastName]=arr

// console.log(firstName) // 'Shikhar'
// console.log(lastName) // 'Khandelwal'




// Skipping Elements-> by using double comma 
//-----------------------------------

let numbers = [1, 2, 3, 4, 5];

let [first, , third, , fifth] = numbers;

// console.log(first); // 1
// console.log(third); // 3
// console.log(fifth); // 5


// Using Rest syntanx
//------------------------------

let Numbers = [1, 2, 3, 4, 5];

let [f, second, ...rest] = Numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]



// Using function parameters
//----------------------------------

function Processarray([first,second]){
    console.log(first,second) // 1,2
    
}

// console.log(Processarray([1,2])) 


// Object Destructuring allows you to extract properties from objects and assign them to variables.
//-------------------------------------------


// Simple Extracting 
//-----------------------------
let person = {
    name: "Shikhar",
    age: 24,
    cityName: "New York"
};

// variable name and properties name should be same. 
let { name, age, cityName } = person;

// console.log(name); // "Shikhar"
// console.log(age); // 24
// console.log(cityName); // "New York"




// Renaming variables
//-----------------------------------
let person2 = {
    name: "Sonam",
    age: 30
};

let { name: fullName, age: years } = person;

// console.log(fullName); // "Sonam"
// console.log(years); // 30


// Default value
//------------------------------------
person = {
    Firstname: "John"
};

let { Firstname, Age = 25 } = person;

// console.log(Firstname); // "John"
// console.log(Age); // 25



// Nested destructuring
//----------------------------------------

const user={
    name:'Rashi',
    age:25,
    address:{
        city:'Ahmedabad',
        state:'Gujarat'
    },
}

// we want access only nested object
const {address:{city,state}}=user

// console.log(city) // 'Ahmedabad'
// console.log(state) // 'Gujarat'



// Using Rest Syntax
//-----------------------------------------

let food = {
    Name: "PavBhaji",
    city: "Mumbai",
    Price:120  
};

let { Name, ...rest1 } = food;

// console.log(Name); // "PavBhaji"
// console.log(rest1); // {city: "Mumbai",Price: 120}




//  Destructuring Function Parameters
//------------------------------------------------------

function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

let Person = {
    name: "Disha",
    age: 30
};

// greet(Person); // Hello, my name is Disha and I am 30 years old.

