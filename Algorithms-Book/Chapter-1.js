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