/*
Objects- (Reference type or Non-Primitive)
-> Objects store key value pair.
-> Objects don't have index
*/


// -------------------------------------------------------------------------------------------------------------------

// Creating Objects


// Using Object literals
//------------------------------

let person={
  firstName: "Sonam",
  lastName: "Bajwa",
  age:30,
  isEmployed: true
};

// Using Object Constructor
//------------------------------

let newPerson = new Object();
newPerson.firstName = "John";
newPerson.lastName = "Doe";
newPerson.age = 30;
newPerson.isEmployed = true;

// Using constructor function
//-------------------------------------
function Person(firstName, lastName, age, isEmployed) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isEmployed = isEmployed;
}

let person1 = new Person("John", "Doe", 30, true);

// console.log(person1) // Person { firstName: 'John', lastName: 'Doe', age: 30,isEmployed: true}


// Accessing Object properties 
// ----------------------------------------

// Using dot notation 

// console.log(person.firstName); // "Sonam"


// Using bracket notation

// console.log(person['lastName']) // "Bajwa"



// Modifying Object Properties
//-----------------------------------------

// Using dot notation 

person.firstName='Disha'
//console.log(person.firstName); // "Disha"


// Using bracket notation
person['lastName']='Patani'
// console.log(person['lastName']) // "Patani"


// Adding Properties using dot & bracket notation 
//------------------------------------------------

person.nationality="Indian"
person['Crush']='Tiger Shroff'

// console.log(person) // { firstName: 'Disha', lastName: 'Patani', age: 30, isEmployed: true, nationality: 'Indian', Crush: 'Tiger Shroff'}

// Deleting properties & checking for properties
//-----------------------------------------------------

 // delete person.age;


// in keyword- to check whether the property is present in object or not. 
//-----------------------------------------------------

// console.log("firstName" in person); // true


// hasOwnProperty-> is a method used to check whether an object has a specific property as its own (not inherited) property.
//-----------------------------------------------------

// console.log(person.hasOwnProperty("lastName")); // true




// Iterating over properties
// -------------------------------------------------------

// Using Object.keys(), Object.values(), and Object.entries().

let keys = Object.keys(person); 
// console.log(keys) // [ 'firstName','lastName','age','isEmployed','nationality','Crush']


let values = Object.values(person); 
// console.log(values) // [ 'Disha', 'Patani', 30, true, 'Indian', 'Tiger Shroff' ]

let entries = Object.entries(person); 
// console.log(entries) // [[ 'firstName', 'Disha' ],[ 'lastName', 'Patani' ],[ 'age', 30 ],[ 'isEmployed', true ],[ 'nationality', 'Indian' ],[ 'Crush', 'Tiger Shroff' ]]


// Merge two different objects
//----------------------------------------------------

// Using object.assign method 
//--------------------------------------
/* this object.assign() has two or more arguments first one being target and remaining one being sources
all the properties of sources are assigned to target and if some properties are same in both target and sources
then target properties get overwrite by sources properties.  

*/
let obj1 = {a: 1, b: 2,d:3};
let obj2 = {c:6,e:7};
let mergeObj = Object.assign(obj1,obj2);

// console.log(mergeObj); // {a:1,b:2,d:3,c:6,e:7}
// console.log(obj1); // {a:1,b:2,d:3,c:6,e:7}

// or 

let objn1={a:1,b:3,c:7};
let objn2={a:6,b:8,c:9};

let resultobj=Object.assign(objn1,objn2)

// console.log(objn1) // { a: 6, b: 8, c: 9 }
// console.log(resultobj) // { a: 6, b: 8, c: 9 }




// Using spread operator 
//----------------------------------------

let obj3 = {a: 1, b: 2};
let obj4 = {c: 3, d: 4};

let merged = {...obj3, ...obj4};
//console.log(merged); // {a: 1, b: 2, c: 3, d: 4}






// Object.freeze() & Object.seal()
//---------------------------------------------------------------------------------------------------------------------------------------------
  
  // Object.seal()--> This function prevents object from further addition and deletion of properties, but you can change the value's of an existing properties.
  // Object.freeze()--> This function prevents everything even the changing of existing values.
  
  // in keyword--> This keyword checks whether the required property is present or not. 
  
  const user={
    firstName:"Shikhar",
    lastName: "Khandelwal",
    address:{
      city:'Jaipur',
      pincode: 302018,
      state:"Rajasthan",
      moreDetails:{
        population: 30000000,
        area:'787 sq km'
      },
    },
    age:23,
    isGraduate:false
  }
  
  
  // Object.seal(user); --> Only user object is sealed not address object.
  // Object.seal(user.address) --> Only address obejct is sealed not user.
  
  // Object.freeze(user) --> Only user object is freezed not nested object.
  // Object.freeze(user.address) --> Only address object is freezed. 
  // console.log('age' in user); // true
  // console.log('mobileNo' in user); // false
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  