


var arr = [1, 3, 5, 7, 9, 13]

//Countdown
//Create a function that accepts a number as an input. 
//Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?



const countdown = (num) => {
    arr = [];
    arr.push(num)
    for (i = num; i <= 0 ? i++ : i--;) {
        arr.push(i);
    }
    console.log(arr.length)
    console.log(arr)
}

// countdown();


//print and return
// Your function will receive an array with two numbers. Print the first value, and return the second.

const printAndReturn = (arr) => {
    console.log(arr[0])
    return(arr[1])
}

// printAndReturn(arr)


//First Plus Length
//Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

const firstPlusLength = (arr) => {
    console.log(
        arr[0] + arr.length
    )
}

// firstPlusLength(arr)


//Values Greater than Second
//For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

const valuesGreaterThanSecond = (arr) => {
    let holder = []
    for(let i = 0; i < arr.length; i++) {
        arr[i] > arr[1] ? holder.push(arr[i]) : null
    }
    console.log(holder.length)
}

// valuesGreaterThanSecond(arr)



//Values Greater than Second, Generalized
//Write a function that accepts any array, and returns a new array with the array values that are greater
//than its 2nd value.Print how many values this is.What will you do if the array is only one element long ?

const valuesGreaterTwo = (arr) => {
    let holder = []
    if (arr.length >= 2) {
        for( let i = 0; i < arr.length; i++) {
            arr[i] > arr[2] ? holder.push(arr[i]) : console.log(`${arr[i]} is less than ${arr[2]}`)
        }
        console.log(holder)
        return(holder)
    } else {
        console.log("array must be at least 2 indecies")
    }
}

// valuesGreaterTwo(arr)

//This Length, That Value
//Given two numbers, return array of length num1 with each value num2.Print "Jinx!" if they are same.

const thisLengthThatValue = (num1, num2) => {
    let holder = []
    for(let i = 0; i < num1; i++) {
        holder.push(num2)
    }
    console.log(holder)
    if(num1 === num2) {
        console.log("Jinx!")
    }
}

thisLengthThatValue(5, 5)
