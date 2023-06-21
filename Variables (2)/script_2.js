// There are 2 types of scopes:
// 1. Global Scope - scope outside the outermost function attached to the window.
// 2. Local Scope - inside the function being executed.


/// Example 1 - inside the function we have access to both global variables (declared outside the function) and local variables (declared inside the function). 
let globalVar = "This is a global variable.";

function fun() {
    let localVar = "This is a local variable.";

    console.log(globalVar);
    console.log(localVar);
}
fun();

/// Example 2 - able to see the value of the global variable, but for the local variable, console.log throws an error. This is because now the console.log statements are present in the global scope where they have access to global variables but cannot access the local variables. 
let _globalVar = "This is a global variable.";

function sad() {
    let _localVar = "This is a local variable.";
}
sad();

console.log(_globalVar);
console.log(_localVar);