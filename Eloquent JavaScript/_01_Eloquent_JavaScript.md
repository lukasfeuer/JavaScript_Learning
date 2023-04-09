# Eloquent JavaScript - Part 1

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


## Program Structure

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
* while and do loops 
	* 