alert('Hi!');

// This is a basic JS alert!

/*This
is
a
multi-line
comment*/

console.log ("Hello What's up?");

console.log (2+2);

console.log ('Hello!');

var name = "Nikhil";

function changeMe(){
	document.getElementById('el').innerHTML = "Nikhil";
}

var numberofFingers = "10";

var isCodingCool = "True";

console.log(name);

var myFriends = ["John", "Steve", "Bill"];

var myFavThings = [20, "Mint Chip", "Science", "August 20",]

var FriendsFavThings = [myFriends, myFavThings];

console.log (FriendsFavThings)

var Peanuts = ["charlie brown", "snoopy"]

console.log(Peanuts)

var toyotas = ["Camry", "Prius",]
var porsches = ["Camero", "Boxer",]

var cars = [toyotas, porsches]

// The above variable is the same as the one below

var cars = [["Camero", "Boxer"], ["Camry"], ["Prius"]];

console.log (cars [1][1]);

var car = {
	make: "Toyota",
	model: "Prius"
};

console.log(car['make']);

console.log(car ['model']);

var user = {
	firstName: "Nikhil",
	lastName: "Solanki",
	birthday: "August 20, 2001"
};

console.log(user.firstName + " " + user.lastName);

console.log(user.firstName);

if (5>10) {
	console.log ("You'll never see this because 5 isn't greater than 10")
}else{
	alert ("This is true!")
}

var x = 20;

if (x<10) {
	alert('x is less than 10');
	console.log(x)
}else {
	alert("x isn't less than 10")
	console.log(x);
}

if(1>5) {
	console.log ('Hello, 1 is less than 5');
}else if(1===1) {
	console.log ('1 is always equal to 1');
}else {
	console.log ("We won't get this because 1 is indeed less than 5");
}

var response = prompt ("Give me 2 numbers");

function addNumber(numberOne, otherNumber){
	return response(numberOne + otherNumber);
};

console.log(addNumber(4,5));
console.log (addNumber(1,10));

function alertName (somePersonsName){
	return alert(somePersonsName)
};

alertName("Nikhil");

alertName("Diplo");

function alertUser (name) {
	return alert (name);
}

alertUser("John Appleseed");
alertUser("Dr. Suess");

function consoleSomething (){
	return console.log ();
}

consoleSomething("John");

for(var i=0; i<10; i++) {
	console.log(i);
}

friends = ["John", "Steve", "Mike"];

for(var i = 0; i<friends.length; i++){
	console.log (friends[i]);
}

myFavThings = [["John", "Mike", "Steve"], ["Eating", "Swimming", "Watching the Olympics"]]

for (var i=0; i<myFavThings[0].length; i++){
	console.log (friends[1]);
}

for (var i = 0; i<myFavThings[1].length; i++){
	console.log (myFavThings[i]);
}

x=6;

while (x<10){
	console.log ("On number" + x)
	x++;
}



