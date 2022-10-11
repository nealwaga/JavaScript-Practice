// Variables defined with let cannot be redeclared.

// Block Scope
// Variables declared with let inside a { } block cannot be accessed from outside the block while using var can:
{
    let x = 2;
}
// x can NOT be used here

// Redeclaring Variables
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2

let x = 10;
// Here x is 10
{
let x = 2;
// Here x is 2
}
// Here x is 10