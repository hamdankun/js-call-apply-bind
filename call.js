function a() {
    console.log('hi')
}

a.call();

// call() or a.call() as same

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

wizard.heal.call(archer)
console.log(archer);

// call also able to send some parameters to desirn function

const object = {
    add(number1, number2) {
        return number1 + number2
    }
}

console.log(object.add.call(this, 1, 2))