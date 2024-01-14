
// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.


const setSwap = (var1, var2) => {
    console.log("running setSwap")
    console.log(var1, var2);
    let holder = ""
    holder = var1;
    var1 = var2;
    var2 = holder;
    console.log(var1, var2);
}

// setSwap("Jack", 42);

//Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop.

const printRange = (start, stop) => {
    if(start < stop) {
        for (let i = start; i <= stop; i++) {
            console.log(i);
        }
    } else {
        for (let i = start; i >= stop; i--) {
            console.log(i)
        }
    }
}

// printRange(-56, 1066);

//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

const beCheerful = (num) => {
    if (num >= 1 && num % 1 === 0) {
        for (let i = 0; i <= num - 1; i++) {
            console.log("good morning")
        }
    } else {
        console.log("number must be an integer greater than zero")
    }
}

beCheerful(2);