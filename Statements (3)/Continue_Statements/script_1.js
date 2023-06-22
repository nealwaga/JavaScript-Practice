// The continue statement is used to break the iteration of the loop and follows with the next iteration. The break in the iteration is possible only when the specified condition going to occur.
/// Example 1 - continue statement in a for loop
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0)continue;
    console.log(i);
}


/// Example 2 - continue statement in a while loop
let i = 0;
while (i < 11) {
    i++;
    if (i % 2 == 0)continue;
    console.log(i);
}