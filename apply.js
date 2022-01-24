function a() {
    console.log('hi')
}

a.apply();

/** 
 * apply() have save function with call() same, the difference just how to pass params, 
 * in this case if we use apply we pass as array
 */
// call also able to modify some object using outside function inside another object

const wizard = {
    name: 'Merlin',
    health: 50,
    heal() {
        return this.health = 100
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

wizard.heal.apply(archer)
console.log(archer);

// call also able to send some parameters to desirn function

const object = {
    add(number1, number2) {
        return number1 + number2
    }
}

console.log(object.add.apply(this, [1, 2]))