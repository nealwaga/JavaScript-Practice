// The switch case statement in JavaScript is also used for decision-making purposes. 
// In some cases, using the switch case statement is seen to be more convenient than if-else statements. 
// Consider a situation when we want to test a variable for hundred different values and based on the test we want to execute some task. 
// Using if-else statements for this purpose will be less efficient than switch-case statements and also it will make the code look messy.
// The switch statement analyses an expression, compares the outcome to the case value, and then executes the statement that corresponds to the correct case value.

/// Example 1 - checking the value with the switch-case
let i = 9;
switch (i) {
    case 0:
        console.log('i is zero');
        break;
    case 1:
        console.log('i is one');
        break;
    case 5:
        console.log('i is five');
        break;
    default:
        console.log('i is nine');
}


/// Example 2
let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Average)";
        break;
    case 'C':
        result = "C (Below Average)";
        break;
    default:
        result = "No grade";
}
console.log(result);