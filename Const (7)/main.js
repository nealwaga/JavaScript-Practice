// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.

const PI = 3.14;


// Constant Objects and Arrays
// Constant Arrays
// You can create a costant array:
const cars = ["Audi", "BMW", "Mercedes"];
// You can change an element
cars[0] = "Rolls Royce";
// You can add an element
cars.push("Volvo");


// Constant Objects
// You can create a const object:
const car = {type:"Range Rover", colour:"white", price:950};
// You can change a property:
car.colour =  "black";
// You can add a property:
cars.owner = "Neal Waga";


// Block Scope
// Declaring a variable with const is similar to let when it comes to Block Scope.
// The x declared in the block, in this example, is not the same as the x declared outside the block:
const x = 10;
// Here x is 10
{
const x = 2;
// Here x is 2
}

// Here x is 10