/**********************************

	JavaScript | First Steps 

**********************************/

console.log("Hello, World!");

// Inheritance in JS is based on Objects (not Classes)
const Dog = {barks: true}
const Pug = Object.create(Dog)
x = Pug.barks //> true

// Ternary Operator 
x = 2<3 ? "yes" : "no"

// var -> initialize, assign value, change value
var v = "var_variable"; 

// let -> like var but variable is limited to the respective
// 		  block statement (e.g. an if statement)
//		  + variables ceated with let can be reassigned later
let l = "let_variable";


// always use const unless have to otherwise 
const c = "something else"

// Functions
function f(input) {
	const out = input * 2;
	return out;
}
// Function Short Hand for one-liners 
const f2 = (input) => input/2

// Closures ~ "function within a function where the inner
// 	function references a variable that is declared in the
// 	outer function"
//
// https://www.youtube.com/watch?v=9emXNzqCKyg&list=PL0vfts4VzfNixzfaQWwDUg3W5TRbE7CyI&index=3
// ~ 11 Minuten
function outer() {
	const fish = "fish";
	let count = 0;
	function inner() {
		count++;
		return `${count} ${fish}`
	}
	return inner
}
const fun = outer();
fun()
fun()
//console.log(fun())

// Objects: store key-value pairs
const Person = {
	first_name: "Lukas", 
	last_name: "Feuer"
}
Person.first_name
Person["first_name"]




console.log(x)