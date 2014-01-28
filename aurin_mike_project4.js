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
		console.log("Email authenticated");
		} else {
			console.log("Please enter a valid Email")	
		
}