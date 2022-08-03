const array = [1, 2, 3];

function getMaxNumber(arr) {
    return Math.max(...arr)
}

console.log(getMaxNumber.call(null, array))
console.log(getMaxNumber.apply(null, [array]))


