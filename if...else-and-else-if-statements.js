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