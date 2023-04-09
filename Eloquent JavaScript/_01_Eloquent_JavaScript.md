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
* Strings: 
	- 'single quotes', "double quotes", or \`backticks\`
	- Newlines can be included without escaping only when the string is quoted with backticks (\`)
	- backslash (\\) is found inside quoted text, it indicates that the character after it has a special meaning
* 


```JS

```