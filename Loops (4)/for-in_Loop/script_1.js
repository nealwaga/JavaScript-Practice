// For-in loop is used to iterate over the properties of an object.
/// Example 1:
const languages = {
    firstLanguage: "JavaScript",
    secondLanguage: "React",
    thirdLanguage: "Angular"
}
let value = '';
for (let item in languages) {
    value += languages[item] + ' ';
}
console.log(value);


/// Example 2:
const courses = {
    // Declaring a courses object
    firstCourse: "C++ STL",
    secondCourse: "DSA Self Paced",
    thirdCourse: "CS Core Subjects"
};

// Creating a new empty object with prototype set to courses object
const student = Object.create(courses);
// Defining student properties and methods
student.id = 1;
student.firstName = "Neal";
student.lastName = "Waga";
student.showEnrolledCourses = function() {
    console.log(courses);
}

// Iterating over all properties of student object
for (let prop in student) {
    console.log(prop + " -> " + student[prop]);
}