/*

	04 Data Structures

*/

let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
}; 

console.log(day1.squirrel);

console.log(day1.wolf); //> undefined
day1.wolf = false;

console.log(day1.wolf)


let anObject = {left: 1, right: 2};
console.log(anObject.left) //> 1
delete anObject.left;
console.log(anObject.left) //> undefined

console.log(anObject.middle) //> undefined
anObject.midde = 3

console.log(anObject)
console.log("right" in anObject);

Object.assign(anObject, {newProperty: 42})


let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(anObject);




console.log("\n----------------\n")


// The lycanthrope's log

let journal = [];

function addEntry(events, squirrel) {
	journal.push({Ereignisse: events, Transformation: squirrel});
}

addEntry(["work", "running", "pizza", "sleep"], true)
addEntry(["work", "running", "cooking"], false)
addEntry(["running", "pizza"], true)

// Ad-hoc Phi by me
function phi(n11, n00, n10, n01) {
	let n1_ = n11 + n10;
	let n0_ = n00 + n01;
	let n_1 = n11 + n01;
	let n_0 = n00 + n10;

	let phi = ((n11*n00) - (n10*n01)) / Math.sqrt(n1_*n0_*n_1*n_0)

	return phi
}

console.log(
	phi(
		n11 = 1, 
		n00 = 76,
		n10 = 4,
		n01 = 9
	)
) //> 0.068599434

// using binary logic to index a flat array as a representation for a frequency table
function phi2(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi2([76, 9, 4, 1]));// → 0.068599434

// loads data in the variable JOURNAL
require('./data/journal.js')

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(phi2(tableFor("weekend", JOURNAL)))

// find all different events function by me
function listEvents(journal) {
	let eventList = [];
	for (let i = 0; i < journal.length; i++) {
		let entry = journal[i];
		for (let j = 0; j < entry.events.length; j++) {
			if (!eventList.includes(entry.events[j])) {
				eventList.push(entry.events[j])
			}
		}
	}
	eventList.sort()
	return eventList;
}

console.log(listEvents(JOURNAL))

let myEvents = listEvents(JOURNAL)

// same function from the book -> same but more concise 
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

let bookEvents = journalEvents(JOURNAL)
bookEvents.sort()
console.log(bookEvents)

// not the same because it compare identity of objects, not content
console.log(myEvents == bookEvents)

// create tables for all events
let tables = []
for (var i = 0; i < myEvents.length; i++) {
	let out = tableFor(myEvents[i], JOURNAL)
	tables[i] = out
}

let phiResults = []

for (var i = 0; i < tables.length; i++) {
	let phi = phi2(tables[i])
	phiResults[i] = {event : myEvents[i], phi}
}

console.log(phiResults)
