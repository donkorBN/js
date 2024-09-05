/*const todoList = [
    'make lunch', 'wash clothes','watch ironman'
]

for (let i = 0; index < todoList.length; i++){
    const value = todoList.[i];
    console.log(value)
}

const nums = [4,4,3,3,5,5,31,6,]

let total = 0

for (let i =0; i<nums.length; i++){
    const num = nums[i]
    total += num
}

console.log(total)

for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    nums[i] = num *2
}

//11a)
console.log((nums))

const arr = [10, 20, 30]

arr[2] = 90

console.log(arr) */

//11b

function getLastValue(arr = []){
    lastIndex = arr[arr.length -1];
    console.log(lastIndex)
}

getLastValue([2,4,6])
getLastValue(['hi','hello','world'])

function arraySwap(arr = []){
    let firstValue = arr[0];
    let lastValue = arr[arr.length -1];

    [firstValue, lastValue] = [lastValue, firstValue];

    arr[0] = firstValue;
    arr[arr.length -1] = lastValue;

    console.log(arr)
}

arraySwap([1,2,3,4,5,6])