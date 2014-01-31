// Mike Aurin
// SDI 1401 Project 4
// All of the code is in the same order as the problems on the assignment PDF

// Question 1
// Does a number follow the same pattern as 123-456-7890

var myTelephone = "407-400-4321";
var myOtherNumber = "123-456-7890";

if (myOtherNumber.length === myTelephone.length) {
	console.log("Question 1: " + true); 
	} else {
		console.log("Question 1: " + false)

};
	
	
//Question 2
// Does an email contain a ".edu" in the string


myEmail = "mikeaurin@fullsail.edu";
emailCharacters = myEmail.match(["a-z"]+ "@" + ["a-z",".","a-z"]);
if (emailCharacters != myEmail) {
    console.log("Question 2: " + myEmail + " is a valid email address.");
	} else {
		console.log("Question 2: " + "Please enter a valid email address.");
};

// Question 3
// Does a string begin with "http://" or "https://"

var myWebsite = "http://www.droid-life.com";
var myOtherWebsite = "https://www.phonearena.com";

if (myWebsite.indexOf(0,6) != "http://") {
	console.log("Question 3: " + true)
		} else { 
			console.log("Question 3: " + false)
}	if (myOtherWebsite.indexOf(0,7) != "https://") {
		console.log("Question 3: " + true)
		} else {
			console.log("Question 3: " + false)
};

// Question 4
//  Take a string that is all lowercase and uppercase the first letter of each word


//Question 5
// Replacing string separators with different characters

var myString = ("1/2/3/4/5");


console.log(myString);

//Question 6
// Format a number to a specific number of decimal places

var myNumber = 3.1415995123;
//myNumber - myNumber.substring(4-11);
//console.log(myNumber)

// Question 7
// Is this number below or above a number with a certain percent



// Question 8
// Find the Number of days difference between two dates



// Question 9 
// Give a string version of a number and return an actual number

var myValue = "15";
myValue = parseInt("15");
console.log(myValue);

// Question 10
// Find a value in an array greater than a given number



// Question 11
// Find the total value of an array even if some values aren't numbers

//myArray[3, "phone", 6, "12", "couch", 20];


// Question 12
// Given an array and a given key, return the sorted array.