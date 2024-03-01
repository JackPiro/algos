//Biggie Size
/*Given an array, write a function that changes all
positive numbers in the array to “big”.Example:
makeItBig([-1, 3, 5, -5]) returns that same
array, changed to[-1, "big", "big", -5].*/

let arr = [1,2,3,4,5,6]

const biggieSize = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big'
        }
    }
    console.log(arr)
}

// biggieSize(arr);


/* Print Low, Return High
Create a function that takes array of numbers.
The function should print the lowest value in the
array, and return the highest value in the array.
*/

const lowHigh = (arr) => {
    let low = arr[0]
    let high = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] > high ? high = arr[i] : null
        arr[i] < low ? low = arr[i] : null
    }
    console.log(`high = ${high}`)
    console.log(`low = ${low}`)
}

// lowHigh(arr)

/*  Print One, Return Another
Build a function that takes array of numbers. The
function should print second-to-last value in the
array, and return first odd value in the array. */

const oneAnother = (arr) => {
    for (let i = 0; i< arr.length; i++) {
        var odd = 0;
        if (arr[i] % 2 !== 0) {
            odd = arr[i]
            break;
        }
    }
    console.log(arr[arr.length - 2])
    return(odd);
}

// oneAnother(arr)

/* Double Vision
Given array, create a function to return a new
array where each value in the original has been
doubled. Calling double([1,2,3]) should
return [2,4,6] without changing original. */


const double = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    console.log(newArr)
}

// double(arr)

/* Count Positives
Given array of numbers, create function to
replace last value with number of positive values.
Example, countPositives([-1,1,1,1])
changes array to [-1,1,1,3] and returns it. */

const countPositives = () => {
    var pos = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            pos++
        }
    }
    arr[arr.length - 1] = pos
    console.log(arr)
}

// countPositives(arr)

/* Evens and Odds
Create a function that accepts an array. Every
time that array has three odd values in a row,
print "That’s odd!" Every time the array has
three evens in a row, print "Even more so!" */

const evenOdd = (arr) => {
    let consecutiveEvens = 0
    let consecutiveOdds = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            consecutiveEvens++
            consecutiveOdds = 0
            consecutiveEvens >= 3 ? console.log('Even more so!') : null
        }
        if (arr[i] % 2 !== 0) {
            consecutiveEvens = 0
            consecutiveOdds++
            consecutiveOdds >=3 ? console.log('thats odd...') : null
        }
    }
}

// evenOdd(arr)


/*  Increment the Seconds
Given arr, add 1 to odd elements ([1], [3],
etc.), console.log all values and return arr. */

const seconds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 !== 0 ? (console.log(arr[i]), arr[i]++) : null
    }
}

// seconds(arr)

/*  Previous Lengths
You are passed an array containing strings.
Working within that same array, replace each
string with a number – the length of the string at
previous array index – and return the array. */

arrayStrings = ['gib', 'big', 'seven', 'worf']

// const previousLengths = (arr) => {
//     let holder = 0
//     let prev = 0
//     for (let i = 1 ; i < arr.length; i++) {
//         arr[i] = arr[i - 1].length
//     }
//     console.log(arr)
// }

// previousLengths(arrayStrings)




/*  Add Seven to Most
Build function that accepts array. Return a new
array with all values except first, adding 7 to
each. Do not alter the original array. */

const sevenToMost = (arr) => {
    let holder = []
    for( let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            holder.push(arr[i] + 7)
        }
        console.log(holder)
    }
}

// sevenToMost(arr)

/* Reverse Array
Given array, write a function to reverse values,
in-place. Example: reverse([3,1,6,4,2])
returns same array, containing [2,4,6,1,3]. */

const reverseArray = (arr) => {
    let holder = []
    for ( let i = arr.length - 1; i < arr.length && i > 0; i-- ) {
        holder.push(arr[i])
    }
    for (let i = 0; i < holder.length; i ++) {
        arr[i] = holder[i]
    }
}

const reverseArrayTwo = (arr) => {
    let start = 0
    let end = arr.length - 1
    let holder = 0
    while ( start < end ) {
        holder = arr[start]
        arr[start] = arr[end]
        arr[end] = holder
        start++
        end--
    }
    console.log(arr)
}


// reverseArrayTwo(arr)

/* Outlook: Negative
Given an array, create and return a new one
containing all the values of the provided array,
made negative (not simply multiplied by -1).
Given [1,-3,5], return [-1,-3,-5]. */

const outlookNegative = (arr) => {
    let holder = []
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > 0) {
            holder.push(arr[i] * - 1)
        }
    }
    console.log(holder)
}

// outlookNegative(arr)
