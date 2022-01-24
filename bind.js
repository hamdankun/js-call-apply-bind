function a() {
    console.log('hi')
}

a.call();

/**
 * bind also have smilliar with call and apply, but bind will create some function with new object or types return as function
 */


const sasuke = {
    clan: 'Uciha',
    power: 100,
    getPower(addPower = 0) {
        return this.power + addPower
    }
}

const naruto = {
    clan: 'Uzumaki',
    power: 100,
}

// we call getPower with naruto object as the this references
const getNarutoPower = sasuke.getPower.bind(naruto,  100);
console.log(getNarutoPower());