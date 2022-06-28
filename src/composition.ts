// class composition

export class Motor {
    start(){
        console.log('engine started')
    }
}

class Car {
    private engine: Motor
    constructor(){
        this.engine = new Motor()
    }

    start(){
        this.engine.start()
        setTimeout(() => {
            console.log('car is ready to drive');
        }, 1500)
    }
}

const BMW = new Car()
BMW.start()

// object composition with Object.assign and spread operator

const obj1 = { name: 'Mesrop' }
const obj2 = { lastname: 'Araqelyan' }

// @ts-ignore
const obj = Object.assign({}, obj1, obj2)
console.log(obj);

const es6obj = { ...obj1,...obj2 }
console.log(es6obj);

