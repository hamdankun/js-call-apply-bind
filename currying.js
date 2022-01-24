function multiply(a, b) {
    return a*b
}

// params chaining using bind (rest of code)
let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))