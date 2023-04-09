//test_stuff


// how does it work? 
// closures? 

function addCount() {
    let count = 0

    function innerCount() {
        count++;
        return count
    }

    return innerCount // returns a function
}

const addOne = addCount();

addOne()
addOne()
addOne()
console.log(addOne())
