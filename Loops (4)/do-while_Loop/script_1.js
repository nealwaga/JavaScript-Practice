// A do...while loop is a control statement in which the code is allowed to execute continuously based on a given boolean condition. It is like a repeating if statement.
// The do...while loop can be used to execute a specific block of code at least once.
// There are mainly two types of loops:
// 1. Entry Controlled Loops: In this type of loop, the test condition is tested before entering the loop body. 'For Loop' and 'While Loops' are entry-controlled loops.
// 2. Exit Controlled Loops: In this type of loop the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. The 'do-while loop' is exit controlled loop.

/// Example 1:
let test = 1;
do {
    console.log(test);
    test++;
} while (test <= 5);


// The main difference between do...while and while loop is,
// that it is guaranteed that do...while loop will run at least once. Whereas, the while loop will not run even once if the given condition is not satisfied.
/// Example 2 - understanding the difference between the two loops
let value = 3;
do {
    console.log(value);
} while (test < 3);


while (value < 3) {
    console.log(value);
}