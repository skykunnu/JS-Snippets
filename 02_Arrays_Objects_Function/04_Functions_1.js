// Functions-> It is a block of code that performs a specific task and it can be used again-again to perform task. 
/*
Functions in JavaScript are first-class objects 
meaning they can be assigned to variables, passed as arguments, and returned from other functions. 
*/ 



/* Function Defination */
//------------------------------------------------------

function sumTwoNumbers(a, b) {
    return a + b;
  }
  const returnValue = sumTwoNumbers(4, 9);
  // console.log(returnValue);
  
  
  // Defining Parameters.
  //----------------------------------------------------------------------
  function introducedMe(username){
    console.log(username) // Shikhar 
     return username; // this return value will be send to function called place. 
  }
  
  const output = introducedMe("Shikhar") // return value 
  console.log(output) // Shikhar
  

  
  // Using Template literals
//-------------------------------------------------------------------------------

  function city(cityName){
    // using template literals to print different cityName. 
  return `I belong to ${cityName}` 
  }
  // console.log(city("Jaipur")) // I belong to jaipur
  // console.log(city("Bombay")) // I belong to Bombay
  // console.log(city("San-Fransisco")) // I belong to San-Fransisco
  // console.log(city("Gurugram")) // I belong to Gurugram
  
  
  
  
  // Using Default parameters
  //--------------------------------------------------------------------
  
  function foods(foods="Indian Cuisine"){
    return `I love ${foods}`
  }
  
  // foods(); // I love Indian Cuisine, Default value gets printed out as no argument is passed.
  // foods("Pizza") // I love Pizza, because pizza overrides default parameter.
  // foods("Burger") // I love Burger
  // foods("Chowmein") // I love Chowmein
  // foods("Pasta") // I love Pasta
  
  //------------------------------------------------------------------------------------------------------------
  
  /* Function Expression */
  
   /* const singHappyBirthday = function () {
    // here function does'nt hold any name, the variable name is the function name.
    console.log("Happy Birthday to you !!");
  };
  
  singHappyBirthday();
  */




  /* Arrow Function */
  
  const singHappyBirthday1 = () => {
    console.log("Happy Birthday to you !!");
  };


  // singHappyBirthday1();
  

  const Sum = (a, b) => a + b; // function compressed into single line, first Sum function gets called after that values are assigned to parameters and then sum of a & b are return.
  // console.log(Sum(2, 3));
  
  //************************************************************************************************************************
  