// Errors will most definitely occur, but all errors can be solved and to do so we use five statements that will now be explained:
// 1. The try statement lets you test a block of code to check for errors.
// 2. The catch statement lets you handle the error if any are present.
// 3. The throw statement lets you make your own errors.
// 4. The finally statement lets you execute code after try and catch.  
// 5. The finally block runs regardless of the result of the try-catch block.

/// Example 1:
try {
    dadalert('Welcome fellow geek!');
}
catch (err) {
    console.log(err);
}

/// Example 2:
function geekFunc() {
    let a = 10;
    try {
        console.log('Value of variable a is : ' + a);
    }
    catch (e) {
        console.log('Error: ' + e.description);
    }
}
geekFunc()

/// Example 3:
try {
    throw new Error('Yeah, no, sorry... there is an error');
}
catch (e) {
    console.log(e);
}

/// Example 4:
try {
    console.log('try');
} catch (e) {
    console.log('error');
} finally {
    console.log('finally');
}