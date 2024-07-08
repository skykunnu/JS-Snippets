// Arrays-> It is a data structure that is used to store ordered collection. 
// It's type of value is object. 

/* In js, Arrays can store any primitive and 
Non-primitive data types like (strings, arrays, boolean, objects,undefined, null)
And it can also store another array into it. 
*/


// Ways of creating an array 
//--------------------------------------
// 1) Array literals

let myArr = [0, 1, 2, 3, 4]; // arrays with number value. 
const myHeros = ["Hulk", "Captain America"]; // arrays with string contents. 

// 2) Array constructor  

let fruits = new Array("Apple", "Banana", "Mango");
let numbers = new Array(); 

// console.log(fruits) // ['Apple','Banana','Mango']
console.log(numbers) // []-> empty array. 


// Common Array Methods-> These methods modifies the orignal array. 
//-----------------------------------------------------------------------------------------------------------------------

myArr.push(6); // adds the element from the end.

// console.log(myArr) // [0,1,2,3,4,6]

myArr.pop(); // removes the element from the end.

// console.log(myArr) // [0,1,2,3,4]

myArr.unshift(9); // add the element from the start.

// console.log(myArr) // [9,0,1,2,3,4]

myArr.shift(); // remove the element from  the start.

// console.log(myArr) // [0,1,2,3,4]


// basic array methods & ways to clone an array
//-----------------------------------------------                  

// Concat-> It adds the elements of two different array.
//--------------------------------------------------------
let array1 = ["1", "2", "3"];
let array2 = ["4", "5", "6"];

let array3=array1.concat(array2)
// console.log(array3) // ['1','2','3','4','5','6']


// cloning using concat with an empty array.
// --------------------------------------------------

let clonedArray=array1.concat()  
// console.log(clonedArray) // ['1','2','3']


// Clone using Array.from()-> creates a new array instance from an array-like object.
//------------------------------------------------------------------------------ 

let originalArray = [2,4,6,8,10];
let clonedArr = Array.from(originalArray);
// console.log(clonedArr); // [2,4,6,8,10]


// Clone using slice()-> it returns a shallow portion of an original array to new array
// --------------------------------------------------------------------------------
originalArray=[2,4,6,8,10]
let newArr=originalArray.slice()

// console.log(newArr) // [2,4,6,8,10]


// Clone using map()
//-----------------------------------------------------------------------
let originalArray1 = [1, 2, 3];
let clonedArray1 = originalArray1.map(item => item);
// console.log(clonedArray1); // [1, 2, 3]


// Clone using for loop
//------------------------------------------------------------------------
let originalArray2 = [1, 2, 3];
let clonedArray2 = [];
for (let i = 0; i < originalArray2.length; i++) {
    clonedArray2.push(originalArray2[i]);
}
// console.log(clonedArray2); // [1, 2, 3]


// Clone using Reduce 
//--------------------------------------------------------------------------

let originalArray3 = [1, 2, 3];
let clonedArray3 = originalArray3.reduce((acc,item)=>{
acc.push(item);
return acc
},[])

// console.log(clonedArray3); // [1, 2, 3]


// Clone using json.parse() and json.stringify()
// ------------------------------------------------------------------
let originalArray4 = [1, 2, {a: 3, b: 4}];
let clonedArray4 = JSON.parse(JSON.stringify(originalArray));

//console.log(clonedArray4); // [1, 2, {a: 3, b: 4}]




//indexOf() --> It returns (-1) if the element is not present in the array otherwise return its index value. 
//--------------------------------------------------------------------------------

myArr = [0, 1, 2, 3, 4];
// console.log(myArr.indexOf(0)) // 0
// console.log(myArr.indexOf("2")) // 2
// console.log(myArr.indexOf("4")) // 4
// console.log(myArr.indexOf("8")) // -1, becoz not present in the array. 


// includes() --> It tells whether the required element is present or not.
//----------------------------------------------------------------------------
// console.log(myArr.includes("2")) // false, because string 2 is not present number 2 is present. 
// console.log(myArr.includes(2)) // true


// reverse() --> It reverse the original array.
//--------------------------------------------------------------------------------------

// console.log(myArr.reverse()); // [4,3,2,1,0]



// sort() --> sort the array in alphabetical order.
//----------------------------------------------------

// It modifies the original array
// always write first letter of an element either in uppercase or lowercase not mixed elements, else it will give unexpected result.

let animals=['cat','dog','bear','elephant','fox']
// console.log(animals.sort()) //  ['bear', 'cat', 'dog', 'elephant', 'fox']

// slice()
//--------------------------------------------------

// It doesn't modify the original array.
// const myArr = [0, 1, 2, 3, 4];
const myn1 = myArr.slice(1, 3); // prints the index value 1 and 2 and excludes 3.
// console.log(myn1); // [1,2]





// Splice()->  modifies the original array and returns the removed elements in new array.
//-------------------------------------------------------
 animals=['cat','dog','bear','elephant','fox']

const return_array=animals.splice(2,2);

// console.log(return_array) // ['bear','elephant']

  const return_array2=animals.splice(3,2,'lion','dear',100) // 3-> starting index, 2-> no of elements to be removed and 100 will also be included as it is part of the arguments.  
  
  
  // console.log(return_array2) // ['elephant','fox']

  // console.log(animals) //[ 'cat', 'dog', 'bear', 'lion', 'dear', 100 ] --> even though only two elements can be replaced but still 100 is also added to array.                                                                   
// ================================================================================================================


// Multidimensional Array
//-------------------------------------------

// They are also called as arrays inside array
const multiDArray=[['Shikhar',1],['Harshit',2],['Yash',3]]
// console.log(multiDArray) // [ [ 'Shikhar', 1 ], [ 'Harshit', 2 ], [ 'Yash', 3 ] ]
// console.log(multiDArray[0]) // [ 'Shikhar', 1 ]
// console.log(multiDArray[1]) // [ 'Harshit', 2 ]
// console.log(multiDArray[2]) // [ 'Yash', 3 ]
// console.log(multiDArray[0][1]) // 1
// console.log(multiDArray[1][1]) // 2
// console.log(multiDArray[2][1]) // 3 
// console.log(multiDArray[0][2]) // Undefined
// console.log(multiDArray[1][2]) // Undefined
// console.log(multiDArray[2][2]) // Undefined
// console.log(multiDArray[0][0]) // Shikhar 



