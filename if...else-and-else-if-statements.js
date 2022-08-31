// What keyword specifies an action when all tests above have failed?

// else

// What are the keywords that test for a condition when all tests above it have failed?

// else if

// In one word, what type of statement is formatted the same way as else and else if?

// if


// What is the last line of an else block?

if (a != b) {
    console.log("a");
}
else (a === b) 
    console.log("b");

// Code an else block that displays an alert saying "Nope".

if (name !== "justin") {
    alert("nope");
} 
else (name === "justin")
alert("yes");

// Code an else if block that tests whether a has the same value as b. If so, display an alert that says "OK".


if(a === b){
alert("nope");
}
else if (a === b) 
    alert("ok");

// Code an else block that assigns the value of one variable to another.

if (a === b) {
    alert("a equals b")
}   
else(a !== b)
("a doesn't equals b")

// Code an else block that assigns a number to a variable and displays an alert specifying a string as the message. The variable has been declared beforehand.

var age = 27;

var age = prompt("how old are you?")

if (age <= 18) {
    alert("not old enought to drink");
}
else (age >= 21 )
    alert("legas age to drink");

// Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, displays a prompt that assigns the user's response to a variable that has been declared beforehand.

if (age !== age) {
    console.log('incorrect')
}
else if (age === age) {
    alert("correct awnser"); 
}
else {
    console.log("invalid");
}



if (condition) {
        // statement
} else if(condition){
        // statement
}else{
  // statement
}

// Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, displays a prompt that assigns the user's response to a variable that has been declared beforehand.

if (a != b) {
c = prompt ("the awnser is d");
}



// Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

if (a >= b) {
alert("a is more than b");
}
else {
    alert("a is less than b");
}

// Code an if statement that tests whether the value represented by a variable is less than the value represented by another variable. If so, display an alert. If not, test whether the value represented by the first variable is greater than the value represented by the second variable. If so, display a different alert.

if (a <= b) {
    alert("a is more than b");
}
else if (a>= b) {
    alert("a is greater than b");
}
else {
    alert("a is equal to b")
}

//if else tp check condition

// Time goal: 30 seconds. Code an else block that assigns the value of one variable to another.

if (a = b) {
    alert("equal")
}
else {
    alert("different")
}

// Code a block, that, if tests above it fail, checks whether one variable doesn't equal another and, if so, displays a prompt that assigns the user's response to a variable that has been declared beforehand.

if (a !== b) {
b = prompt("assign a to b");
}


// Code an if statement that tests whether the value represented by a variable is greater than or equal to the value represented by another variable. If so, display an alert. If not, display a different alert.

if (2 >= a){
    alert("2 is greater than a");
}
else {
    alert("2 is less than a");
}

// Code an if statement that tests whether the value represented by a variable is less than the value represented by another variable. If so, display an alert. If not, test whether the value represented by the first variable is greater than the value represented by the second variable. If so, display a different alert.

if (a < b) {
    alert("a is less than b");
}
else if (a > b) {
    alert("a is greater than b");
}

// This is the if statement that begins the code.
if (a === 10) {
  alert("a is 10");
}
else  {
    alert("a is " + a);
}
// If a isn't 10, display an alert that says "a is " followed by the value of a.

// Prompt the user to enter a city.
// If the city is Akron, display an alert acknowledging it.
// If not, display an alert acknowledging it isn't Akron.
// Click the Run It button to run your code live.

var city = prompt("Enter City hear");

if (city === "Akron") {
    alert("Correct!");
}
else {
    alert("Incorrect City");
}

// Prompt the user to enter a city.
// If the city is Akron, display an alert acknowledging it.
// If not, check to see if it's Buffalo.
// If it is, display an alert acknowledging it's Buffalo.
// Otherwise, display a different alert.
// Click the Run It button to run your code live.

var enterCity = prompt("Enter City Name");

if (enterCity === "Akron") {
    alert("Correct City!");
}
else if (enterCity === "Buffalo") {
    alert("Correct City!");
}
else {
        alert("Incorrect City!");
}