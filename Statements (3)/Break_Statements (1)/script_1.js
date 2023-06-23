// The break statement comes out of the loop when the condition is true. It breaks out of the loop or switch.
/// Example 1 - the switch case is executed if the condition is true then it breaks out and the next case is not checked.
const fruit = "Mango";

switch (fruit) {
    case "Apple":
        console.log("Apple is a healthy fruit");
        break;
    case "Mango":
        console.log("Mango is my favorite fruit");
        break;
    default:
        console.log("I don't like fruits");
}


/// Example 2
const colour = "Black";

switch (colour) {
    case "Grey":
        console.log("Grey is... okay");
    case "Black":
        console.log("Black is my favorite color");
        break;
    default:
        console.log("I don't have a favourite colour");
}


/// Example 3
for (let i = 4; i < 6; i++) {
    if (i == 4) break;
    console.log(i);
}