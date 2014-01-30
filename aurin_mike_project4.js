// Mike Aurin
// SDI 1401 Project 4
// All of the code is in the same order as the problems on the assignment PDF

// Question 1
// Does a number follow the same pattern as 123-456-7890

var myTelephone = "407-400-4321";
var myOtherNumber = "123-456-7890";

if (myOtherNumber.length === myTelephone.length) {
	console.log(true); 
	} else {
		console.log(false)

};
	
	
//Question 2
// Does an email contain a ".com" in the string

var validEmail = "abc@fullsail.edu";
var userEmail = "mikeaurin@fullsail.edu";

if (userEmail === validEmail.indexOf(12-15)) {
		console.log(true);
		} else {
			console.log(false)	
		
}

// Question 3
// Does a string begin with "http://" or "https://"

var myWebsite = "http://www.droid-life.com";
var myOtherWebsite = "https://www.phonearena.com";

if (myWebsite.indexOf(0-6) === "http://") {
	console.log(true)
		} else { 
			console.log(false)
}	if (myOtherWebsite.indexOf(0-7) === "https://") {
		console.log(true)
		} else {
			console.log(false)
};

// Question 4
//  Take a string that is all lowercase and uppercase the first letter of each word

var myString = "every word in this sentence needs to be capitalized!";

function convertCase() 
myString.substr(0,6,11,14,19,28,34,37,40).toUpperCase()
console.log(myString);

//Question 5
// Replacing string separators with different characters

var myString = "5/4/3/2/1/";
var newString = myString.replace("/",",");
console.log(newString);

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

myValue = "15";
parseInt.myValue;
console.log(myValue);

// Question 10
// Find a value in an array greater than a given number

myArray[2,4,6,8,10]; {
	{	if (myArray[4] = 8) 
		return myArray[5]
	}
};
conosle.log myArray[4];