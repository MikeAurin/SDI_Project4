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

var myWebsite = "http://www.droid-life.com"
var myOtherWebsite = "https://www.phonearena.com"

if (myWebsite.indexOf(0-6) === "http://") {
	console.log(true)
		} else { 
			console.log(false)
}	if (myOtherWebsite.indexOf(0-7) === "https://") {
		console.log(true)
		} else {
			console.log(false)
};