// The if-else or conditional statement will perform some action for a specific condition. 
// If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition. 
// Such control statements are used to cause the flow of execution to advance and branch based on changes to the state of a program.
/// Example 1 - using if
let age = 19;
if (age > 18) console.log('You are eligible to drive!');


/// Example 2 - using if-else statement
let i = 10;
if (i < 15)
    console.log('i is less than 15');
else
console.log('I am not in If')


/// Example 3 - using nested if statement
let n = 10;
if (n == 10) {
    if (n < 15)
        console.log('n is less than 15');
        if (n < 12)
        console.log('n is less than 12 too');
        else
        console.log('n is greater than 15');
}


/// Example 4 - using if-else-if ladder statement
let w = 20;
if (w == 10)
    console.log('w is 10');
else if (w == 15)
    console.log('w is 15');
else if (w == 20)
    console.log('w is 20');
else
    console.log('w is not present');