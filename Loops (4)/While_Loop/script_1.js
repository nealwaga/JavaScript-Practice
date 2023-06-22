// A While Loop is a control flow statement that allows the code to be executed repeatedly based on the given boolean condition. The while loop can be thought of as a repeating if statement.
// The loop can be used to execute the specific block of code multiple times until it failed to match the condition.
// There are mainly two types of loops:
// 1. Entry Controlled loops: In this type of loop, the test condition is tested before entering the loop body. For Loop and While Loops are entry-controlled loops.
// 2. Exit Controlled Loops: In this type of loop the test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute at least once, irrespective of whether the test condition is true or false. the do-while loop is exit controlled loop.

/// Example 1:
let val = 1;
while (val < 7) {
    console.log(val);
    val += 1;
}


// A do-while loop is a control flow statement that executes a block of code at least once, 
// and then repeatedly executes the block or not depending on a given boolean condition at the end of the block.
/// Example:
let n = 1;
do {
    console.log(n);
    n += 1;
} while (n < 8);