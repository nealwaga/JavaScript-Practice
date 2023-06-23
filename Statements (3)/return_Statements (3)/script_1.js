// The return statement is used to return a particular value from the function. 
// The function will stop the execution when the return statement is called and return a specific value. 
// The return statement should be the last statement of the function because the code after the return statement won’t be accessible.
/// Example 1 - basic example
function Product(a ,b) {
    return a * b;
}
console.log(Product(6, 10));


/// Example 2 - returning multiple values
function Language() {
    let first = 'Python',
        second = 'JavaScript',
        third = 'Java'
    return {
        first,
        second,
        third
    };
}
let {first, second, third} = Language();
console.log(first);
console.log(second);
console.log(third);