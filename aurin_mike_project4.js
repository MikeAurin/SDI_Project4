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
var string = "uppercase this sentence.";

function capitalizeString(string)
{
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}
console.log("Question 4: " + string)

//Question 5
// Replacing string separators with different characters


var myString = "1 2 3 4 5";
var mySeparatedString = myString.split(" ");

console.log("Question 5: " + mySeparatedString);

//Question 6
// Format a number to a specific number of decimal places

var myRidiculousNumber = 5.489487342;
console.log("Question 6: " + myRidiculousNumber.toFixed(2));

// Question 7
// Is this number below or above a number with a certain percent



// Question 8
// Find the Number of days difference between two dates
var sisterBirthday = "2014-02-19";
var myBirthday = "2014-08-22";

sisterBirthday = sisterBirthday.split('-');
myBirthday = myBirthday.split('-');

sisterBirthday = new Date(sisterBirthday[0], sisterBirthday[1], sisterBirthday[2]);
myBirthday = new Date(myBirthday[0], myBirthday[1], myBirthday[2]);

sisterBirthday_unixtime = parseInt(sisterBirthday.getTime() / 1000);
myBirthday_unixtime = parseInt(myBirthday.getTime() / 1000);

var timeDifference = myBirthday_unixtime - sisterBirthday_unixtime;

var timeDifferenceInHours = timeDifference / 60 / 60;

var timeDifferenceInDays = timeDifferenceInHours  / 24;

console.log("Question 8: " + timeDifferenceInDays + " between my sister's birthday and my birthday.");


// Question 9 
// Give a string version of a number and return an actual number

var myValue = "15";
myValue = parseInt("15");
console.log("Question 9: " + myValue);

// Question 10
// Find a value in an array greater than a given number



// Question 11
// Find the total value of an array even if some values aren't numbers

//myArray[3, "phone", 6, "12", "couch", 20];


// Question 12
// Given an array and a given key, return the sorted array.