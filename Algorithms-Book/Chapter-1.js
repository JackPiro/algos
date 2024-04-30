/*Stan learned something today: that directly decrementing an array’s .length immediately shortens it
by that amount. Given array arr and number X, remove all except the last X elements, and return arr
(changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it. */

let array = [7,12,5,9,0,0,0]

const onlyTheLastFew = (arr, num) => {
    let newArr = []
    for (let i = arr.length - 1; i > arr.length - (num + 1); i--) {
        newArr.push(arr[i])
    }
    arr.length = num
    arr = newArr
    console.log(arr)
}

onlyTheLastFew(array, 3)


/* Soaring IQ
Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered
with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day,
then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the
way until increasing by .98 on his 98th day (the end of 14 full weeks). What is Bogdan’s final IQ?
*/

const bogdan = (IQ, days, incr) => {
    modIncr = incr * 100
    IQ = IQ * 100
    for (let i = 0; i < days; i++) {
        IQ = IQ + modIncr
        modIncr = modIncr + (incr * 100)
        console.log(incr)
        console.log(IQ)
    }
    IQ = IQ % 100
    console.log(IQ)
}

// bogdan(101, 98, 0.01)

const bogdan2 = (iq, days, increment) => {
    scaledIq = iq * 100;
    scaledIncrement = increment * 100;

    for (let i = 0; i < days; i++) {
        scaledIq += scaledIncrement
        scaledIncrement += (increment * 100)
    }
    finalIQ = scaledIq % 100;
    console.log(finalIQ)
}

bogdan2(101, 98, 0.01)

