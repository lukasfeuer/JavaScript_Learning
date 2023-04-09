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

let y = 0;
while (y <= 3) {
	console.log(y);
	y ++;
}

