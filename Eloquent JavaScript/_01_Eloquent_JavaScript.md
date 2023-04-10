# Eloquent JavaScript - Part 1

[Exercise Solutions](https://eloquentjavascript.net/code/#2)

## 00 Introduction

An example for adding numbers from one to ten: 

```JS
let total = 0, count = 1
while (count <= 10) {
	total += count;
	count ++;
}
console.log(total) //> 55
```

## 01 Values, Types and Operations

[Chapter 1](https://eloquentjavascript.net/01_values.html)

* Count bits in binary easily, e.g. the number 13:

  0   0   0   0   1   1   0   1
128  64  32  16   8   4   2   1

* The `%` symbol is used to represent the remainder/modulo operation. X % Y is the remainder of dividing X by Y. For example, 314 % 100 produces 14
* Special Numbers:
	- `Infinity` and `-Infinity`: `Infinity -1` is still Infinity 
	- `NaN`: "Not a Number"; for example, try to calculate 0 / 0
	- `Number()` function to convert string to a number. Similiar: `String()` and `Boolean`
	- `Number.isNaN()` function that returns true only if the argument it is given is NaN
* Strings: 
	- 'single quotes', "double quotes", or \`backticks\`
	- Newlines can be included without escaping only when the string is quoted with backticks (\`)
	- **escape**: with backslash (\\); indicates that the character after it has a special meaning
	- **contcatenate** with `+`: "con" + "cat" + "e" + "nate"
	- String values have a number of associated functions (*methods*) that can be used to perform other operations on them
	- **template literals** (Backtick-quoted strings): can do a few more tricks. Apart from being able to span lines, they can also embed other values: 
```JS
`half of 100 is ${100 / 2}`
```
* Unary Operators: operators written as words, not symbols
	- `typeof`; only takes one argument 
	- **binary operators** takte two values
* Boolean values: `true` and `false`. `NaN` the one value in JavaScript that is not equal to itself
* Logical operators
	- `&&`: logical "and"
	- `||`: logical "or"
	- **ternary operator** `true ? 1 : 2`
* Empty values: denote the absence of a meaningful value. Mostly interchangable
	- `undefined`: usually as a default of many functions
	- `null`: (heared from other sources) usually explicitly assigned by the user
* Automatic type conversoin: 
	- JavaScript tries to convert values to needed types for an operation
	- When something that doesn’t map to a number is converted to a number, you get the value NaN. Further arithmetic operations on NaN keep producing NaN
	- `===` and `!==` for comparisons when you do not want any type conversions to happen
* Short-circuting of logical operators: 
	- `||` operator will return the value to its left when that can be converted to true and will return the value on its right otherwise. Use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put `||` after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead (0, NaN, and the empty string ("") count as false)
	- `&&` operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right
	- *short-circuit evaluation*: part to the right is evaluated only when necessary


## 02 Program Structure

[Chapter 2](https://eloquentjavascript.net/02_program_structure.html)

* Expressions and statements
	* *expression*: fragment of code that produces a value
	* *statement*: a "full sentence", in the simplest kind an expression with a semicolon at the end (not always necessary but recommended)
	* *program*: list of statements 
	* *side effects*: changes of the internal state of the machine through a statement, that will affect the statements that come after it (e.g. showing a dialog box or writing text to the screen)
* Bindings 
	* `let x = 1`: "let" indicates a binding (the binding here is "x")
	* `const`: "constant", binding that cannot be changed
* Binding names: may include dollar signs or underscores but no other punctuation or special characters 
* The environment: collection of bindings and their values. Is not empty at start of program 
* Control flow: statements are usually executed from top to bottom
	* Conditional execution with `if`; braces from a *block*
	* **do loops**: control structure similar to while loop. Only difference: do loop executes body always at least once and then checks if more runs have to follow

```JS
let yourName; 
do {
	yourName = prompt("Who are you?");
} while (!yourName); // until yourName is not an empty String
console.log(yourName)
```
* Indenting Code: indentation is not necessary for execution
* for loops: 
	* comprehensive form of the standard while loop: create a "counter" binding, test expression, update counter
	* statements after keyword neet to be seperated with semicolons 
```JS
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
```
* Breaking Out of a Loop
	* `break`: immedieately jumps out of enclosing loop (and breaks the whole program?)
	* example has no check statement -> loop will never stop unless break is executed 
	* `continue`: also jumps out of loop if encoutered in the body and continues with the loops next iteration

```JS
// find the first number that is both greater than or equal to 20 and divisible by 7
for (let current = 20; ; current++) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
```

* Updating bindings succinctly: there are shortcuts for updating a value
	* `counter = counter + 1` equivalent to `counter += 1` and for this special case also equivalent to `counter++`
	* also: `*=`, `-=` and `--`
* Dispatching on a value with switch
	* express a dispatch with `switch`
	* alternative to using a series of if else statements
	* starts execution at label that corresponds to lable that switch was given (or default)
	* continues execution **even across other labels until it reaches a break statement** 
		* that way labels can "share" code with each other
		* be aware of where and when to break!
```JS
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
* Capitalization:  most JavaScript programmers capitalize every word except the first in naming a binding: `fuzzyLittleTurtle`
* Lenght: Lenght of a string can be found by writing `.length` after it 


## 03 Functions

[Chapter 3](https://eloquentjavascript.net/03_functions.html)

* wrapping a piece of program in a value 
* `const` or `let` keyword used for function definition
* functions can reutrn a value or just create side effects (e.g. printing to the console)
* `return` directs flow of control directly out of the function
* Without an expression after reurn or without a return keyword `undefined` is returned 
* Bindings and scope: 
	* global bindings: defined outside of functions or blocks
	* local bindings: e.g. bindings created with `let` and `const` for function parameters or declared inside a function
	* `var` bindings are visible throughout the whole function they appear in 
```JS
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
* Nested scope - **lexical scoping**: each local scope can also see all the local scopes that contain it, and all scopes can see the global scope
* Functions as values: function value can do all the things that other values can do: use it in arbitrary expressions, store a function value in a new binding, pass it as an argument to a function etc. 
* Declaration notation: 
	* preceding code that calls a function that is defined later with declaration notation still works 
	* function declarartions are not part of regular flow control; they are moved to the top of their scope
* Arrow notation
```JS
// Binding notation, semicolon is required 
let square1 = function(x) {
	return x * x;
}; 
// Declaration notation, no semicolon required
function square2(x) {
  return x * x;
}
// Arrow Notation 
const square3 = (x) => {return x * x; };
const square4 = x => x * x; // if only one parameter
const horn = () => { // no parameters 
	console.log("Toot");
};
```
* The call stack
	* needed to temporarily store context information for the flow of control through a program 
	* **call stack**: place in memory that stores context information if a function etc. is called. Context information is pushed on top of the stack if a new context is encountered and pulled of the stack if the context call finished execution and uses this context to continue execution
	* Errors: "out of stack space", "too much recursion"
* Optional Arguments 
	* if too many arguments are passed to a function, the extra ones are ignored. In case of too few, the missing parameters get assigned the value `undefined`
	* Danger: using the wrong number of arguments without noticing 
	* Upside: this behavior can be used to allow a function to be called with different numbers of arguments
```JS
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
```
* Closure -> **read again**
	*  local bindings are created anew for every call, and different calls can’t trample on one another’s local bindings
	* **closure**: reference a specific instance of a local binding in an enclosing scope
	* think of function values as containing both the code in their body and the environment in which they are created
```JS
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5)); // → 10
```
* Recursion -> **read again**
	* function that calls itself (is okay as long as it doesn't overflow the stack)
	* example below: three times slower than looping 
```JS
// Example1
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent -1);
	}
}

// Example2
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

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```
* Growing functions: A useful principle is to not add cleverness unless you are absolutely sure you’re going to need it. It can be tempting to write general “frameworks” for every bit of functionality you come across. Resist that urge. You won’t get any real work done—you’ll just be writing code that you never use.
* Functions and side effects: **pure function**: value-producing function that not only has no side effects but also doesn’t rely on side effects from other code


## 04 Data Structures

[Chapter 4](https://eloquentjavascript.net/04_data.html)

