// The for...of loop iterates over the iterable objects, invoking a custom iteration hook with statements to be executed for the value of each distinct property.
/// Example 1 - for...of loop over an array
let numArray = [5, 10, 15, 20, 25, 30, 35];
console.log("Elements of numArray are->");
for (value of numArray) {
    console.log(value);
}

/// Example 2 - for...of loop over a string
let wordStr = "Geeksforgeeks";
console.log("Elements of wordStr are->");
for (value of wordStr) {
    console.log(value);
}

/// Example 3 - for...of loop over an argument objects
let mapObject = new Map ([
    ["Houston Rockets", 1],
    ["Denver Nuggets", 2],
    ["Phoenix Suns", 3]
]);

console.log("Display of Key-Value Pair->");
for (entry of mapObject) {
    console.log(entry);
}

console.log("Display of Value only->");
for ([key, value] of mapObject) {
    console.log(value);
}