// Looping in programming languages is a feature that facilitates the execution of a set of instructions repeatedly until some condition evaluates and becomes false.
// Statement 1: It is the initialization of the counter. It is executed once before the execution of the code block.
/// Example 1:
let x;
// for loop begins when x=2
// and runs till x <= 4
// and increments x by 1 in each iteration
for (x = 2; x <= 4; x++) {
    console.log('Value of x:' + x);
}

/// Example 2:
let y = 2;
for (; y <= 5; y++) {
    console.log('Value of y:' + y);
}


// Statement 2: It is the testing statement that defines the condition for executing the code block It must return a boolean value. 
// It is also an entry-controlled loop as the condition is checked before the execution of the loop statements.
// This is also an optional statement and Javascript treats it as true if left blank.
/// Example 1:
let z = 2;
for (; ; z++) {
    console.log('Value of z:' + z);
    break; // if the break is not added, it will continue iterating
}


// Statement 3: It is a controlled statement that controls the increment/decrement of the counter variable. It is also optional by nature and can be done inside the loop body.
/// Example 1:
const languages = ["Python", "JavaScript", "Java", "C"]
let i = 0;
let len = languages.length;
let gfg = "";
for (; i < len; ) {
    gfg += languages[i + ""];
    i++;
}
console.log(gfg);


// There is another advanced loop called for/in loop which runs through all the properties of an object. The loop will be executed once for each property of the object.
function NMW() {
    let Names = { fname:"Neal", mname:"Muluta", lname:"Waga"};

    let text = "";
    let x;
    for (x in Names) {
        text += Names[x] + " ";
    }
    console.log(text);
}
NMW()


// The for/in loop can also be used over the properties of arrays. 
// However, it is not advised to use for/in loop over arrays. for/of and Array.forEach() loops are suggested to be used while working with arrays.