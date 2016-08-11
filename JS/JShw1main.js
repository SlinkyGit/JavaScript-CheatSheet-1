alert ('HEY!')
//This is a basic alert

console.log ("Hello What's up?");

//You can add names to variables
var name: "Nikhil";

var x = 10;

console.log ('Hello!');

var isCodingCool = true; 

//You can add multiple values to variables called Arrays
var Peanuts = ["charlie brown", "snoopy"]

console.log (Peanuts)

var user = {
	firstName: "Nikhil",
	lastName: "Solanki",
	birthday: "August 20, 2001"
};

console.log (user.firstName + " " + user.lastName);

//You can add Logic, which are true or false statements
if (5>10) {
	console.log ("You'll never see this because 5 isn't greater than 10")
}else {
	alert ("This is true!")
}

//You can alert the user anything you want, by using functions
function alertUser (name) {
	return alert (name);
}

alertUser("John Appleseed");
alertUser("Dr. Suess");

function alertUser (food) {
	return alert (food);
}

alertUser("Pizza");
alertUser("Dr.Suess");

