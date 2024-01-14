// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.





const setSwap = (var1, var2) => {
    console.log("runing setSwap")
    console.log(var1, var2);
    let holder = ""
    holder = var1;
    var1 = var2;
    var2 = holder;
    console.log(var1, var2);
}


setSwap("Jack", 42);


