// You can declare variables in JavaScript in 3 ways:
// var, let & const 
// Variables declared with 'let' and 'const' have block scope - means that they are only accessible within the block where they are defined, as well as any nested blocks inside that block.


// Using var
var a = 'Hello,';
var b = 'my name is Neal';
var c = a + ' ' + b;
console.log(c);


// Using let
function exampleFunction() {
    let x = 10; // x is scoped to the exampleFunction block

    if (true) {
        let y = 20; // y is scoped to the if block
        console.log(x); // Accessible: prints 10
        console.log(y); // Accessible: prints 20
    }

    console.log(x); // Accessible: prints 10
    console.log(y); // Error: y is not accessible outside the if block
}


// Using const
/// Example 1
const aB = 22;
{
    const aB = 90;
    console.log(aB);

    {
        const aB = 75;
        console.log(aB);
    }

    {
        const aB = 66;
        console.log(aB);
    }
}
console.log(aB);

// Example 2 - changing the content of an array in const array
const arr1 = ["Houston Rockets", "New York Knicks", "Memphis Grizzlies", "Atlanta Hawks"];
console.log(arr1.toString());

arr1[2] = "Golden State Warriors";
console.log(arr1.toString());

// Example 3
const person = {
    first_name: "Neal",
    last_name: "Waga",
    age: 23,
    about: "Dedicated junior software engineer"
};
console.log(person);

person.first_name = "Jalen";
person.last_name = "Hurts";
person.age = 25;
person.about = "Pro footballer";
console.log(person);