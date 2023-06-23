// Declaration of an Array
/// 1. Creating an array using array literal:
let courses = ["JavaScript", "Python", "Java", "C"]
console.log(courses);

/// 2. Creating an array using the JavaScript new keyword:
let arr1 = new Array(3)
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1; ", arr1)

let arr2 = new Array("A", "B", "C")
console.log("Array 2;", arr2)

let arr3 = new Array(5)
console.log("Array 3; ", arr3)


/// 3. Accessing Elements of an Array
const teams = ["Houston Rockets", "Memphis Grizzlies", "Los Angeles Lakers"]
console.log(teams[0]);
console.log(teams[1]);
console.log(teams[2]);


/// 4. Change elements from a pre-defined array
const cars = ["BMW", "Mercedes", "Audi"]
console.log(cars);
cars[2] = "Volkswagen";
console.log(cars);


/// 5. Convert an Array to String
const countries = ["Japan", "Switzerland", "France"]
console.log(countries.toString());


/// 6. Increase and decrease the length of an array
const cities = ["Tokyo", "California", "Paris", "Rome"]
console.log(cities);
cities.length = 2
console.log("Array after decreased length: ", cities);


/// 7. Loop through an Array Elements
const languages = ["Python", "Java", "JavaScript", "C++"]
for (let i = 0; i , i < languages.length; i++) {
    console.log(languages[i]);
}

const frameworks = ["Django", "React", "Angular", "Flask"]
frameworks.forEach(myfunc);
function myfunc(elements) {
    console.log(elements);
}


/// 8. Adding new elements to an Array
const sports = ["Football", "Basketball", "Rugby"]
console.log("Original array: ", sports);
sports.push("American Football");
console.log("Updated array: ", sports);



// Javascript arrays use indexes as numbers while objects use indexes as names.
// Arrays are used when we want element names to be strings while Objects are used when we want element names to be numbers.