/*

	03 Functions

*/

// Scope
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent -1);
	}
}

console.log(power(2, 3))


/*

Recursion

Consider this puzzle: by starting from the number 1 
and repeatedly either adding 5 or multiplying by 3, 
an infinite set of numbers can be produced. How would 
you write a function that, given a number, tries to 
find a sequence of such additions and multiplications 
that produces that number?
*/
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(21));

// 

function zeroPad(number, width) {
	let numberString = String(number); 
	while (numberString.length < width) {
		numberString = "0" + numberString;
	}
	return numberString;
}
console.log(zeroPad(15, 5))

function printFarmInventory(animal, animalCount) {
	return `${zeroPad(animalCount, 3)} ${animal}`
} 

console.log(printFarmInventory("Pigs", 5))

animalInventory = {
	"Pigs": 5,
	"Cows": 12,
	"Horses": 3
}
// how to map over values? 
// how to index an object? 



// Excercises ----------------------------------------------

// Minimum 
function min(x, y) {
	return x < y ? x : y
}
console.log(min(2, -4))

// Recursion 
function isEven(x) {
	if (x === 0) {
		return true
	} else if (x === 1) {
		return false
	} else {
		return isEven(x-2)
	}
}
console.log(isEven(50))
console.log(isEven(4))
	// console.log(isEven(-1)) // --> maximum call stack exceeded

// Bean counting
function countChar(string, Char = "B") {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		string[i] === Char ? counter++ : counter
	}
	return counter
}
console.log(countChar("kakkerlak", "k"))