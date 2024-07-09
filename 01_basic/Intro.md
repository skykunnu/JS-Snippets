
JavaScript- It is a programming language that is used to create interactive and dynamic contents for website. 
===========================================================================================================================

# Dual Environments of javascript 

# Browser-side environment - JS executes within browser on the client-side, alongside HTML and CSS, ex- DOM,Event-handling, Browser-API and so on.

# Server-side environment - Node js is a server-side runtime environment that allows js to run on servers outside the browser, It uses V8 JS engine to execute js code on the server. ex- HTTP request, CRUD Operation and so on. 


=====================================================================================================================================

# JS Engine is an environment in which JS Code is executed.
# when js engine scans a script file it makes an evironment known as Global execution context. this GEC consists of two phase- Memory phase and Code execution phase. after GEC is formed it is pushed onto the call stack for execution. And When a function is invoked, a new Function Execution Context is created and pushed onto the Call Stack above global context and after execution gets poped out.

# Memory phase is a place where all function & variable are declared in key-value pair. 

# Code Execution phase is a place where all variables are initialized with their value and if any function is invoked, then again a local GEC is formed with same two phases  but it is temporarily formed and destroyed after function execution inside a call stack.


==========================================================================================================================================

# Compile time (Compilation) refers to the phase where source code is processed by a compiler to translate it into machine code or bytecode that the computer's processor can understand and execute. 

# Interpretation (Interpreter) refers to process where interpreter directly reads and executes the source code line by line during runtime

# Run time, on the other hand, is the phase when the compiled or interpreted program is executed by the computer's processor.

# It is both interpreted and compiled language and uses JIT Compilation technique to execute code in js Engine. this technique is a combination of both compilation and interpretation in this it will compile all of the code to machine code and then immediately sent for execution. 

# JS is dynamically typed language meaning data type of a variable is assigned at run-time. 

# JS is statically scoped language meaning scope of a variable is determined at compile-time. 


=========================================================================================================================================






