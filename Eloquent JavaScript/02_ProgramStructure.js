/*

	02 Program Structure

*/

let x
console.log(x) //> undefined

// Only in browser:
//prompt("Enter stuff:")

// Function without a side effect 
console.log(Math.min(2, 4) + 100);


let theNumber = Number("test");
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
console.log(theNumber)


// while loop
let y = 0;
while (y <= 3) {
	console.log(y);
	y ++;
}

// for loop
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result)

// for loop, slightly more concise ways
result = 1;
for (let counter = 0; counter < 10; counter++) {
  result *= 2;
}
console.log(result)

let z = [1, 2, 3, 4]
// for in reverse order
for (var i = z.length - 1; i >= 0; i--) {
	console.log(z[i])
}
// or the most useful one: 
for (var i = 0; i < z.length; i++) {
	console.log(z[i])
}


// Exercises ---------------------------------

// Triangle
let e1 = ""
for (var i = 0; i < 7; i++) {
	e1 += "#";
	console.log(e1);
}

// FizzBuzz
for (var i = 1; i <= 100; i++) {
	let e2 = (i % 3 == 0 ? "Fizz": "") + ( i % 5 == 0 ? "Buzz" : "") 
	console.log(!e2 ? i : e2)
}

// Chessboard
let e3 = ""
for (var i = 0; i < 8; i++) {
	i % 2 == 0 ? e3 += "  " : e3 
	e3 += "  #   #   #   #\n"
}
console.log(e3)

let size = 12;
let board = "";
for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += "  ";
		} else {
			board += "# ";
		}
	}
	board += "\n";
}
console.log(board)
