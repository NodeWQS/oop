// Abstraction is paradigm of oop.With this paradigm we can create class by thing

export class Person{
    constructor(
        public name: string,
        public lastname: string,
        private passport: number
    ){}

    walking(){
        console.log('go go go!');
    }
}

const Max = new Person('Max', 'Jhonson', 122121)