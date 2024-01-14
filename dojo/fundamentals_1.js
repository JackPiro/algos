// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myName = "Jack";
let myNumber = 42;

const setSwap = (var1, var2) => {
    let holder = ""
    var1 = holder;
    var2 = var1;
    holder = var1;
    console.log(var1, var2);
}

setSwap()

