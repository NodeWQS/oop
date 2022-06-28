//  Polymorphysm is paradigm of rule of polymorphysm is very simple. one model different realisation.

class Person{   
    constructor(
      public name: string,
      public lastname: string,
      private passport: string
    ){}

    doing(): string{
        return 'Now I am doing something.'
    }
}

const Maxim = new Person('Maxim', 'Ivanov', 'AU231299')

class Programmer extends Person{
    constructor(
    name: string, lastname: string, passport: string,
    private language: 'python' | 'javascript' | 'rust'
    ){ super(name, lastname, passport) }

    doing(): string {
        return `Now I am coding in ${this.language}`
    }
}

const Jhon = new Programmer('Jhon', 'Doe', 'AT122112', 'rust')

class Employee extends Person{
    constructor(name:string, lastname:string, passport: string){
        super(name, lastname, passport)
    }

    doing(): string {
        return 'Now I am unloading'
    }
}

const Mesrop = new Employee('Mesrop', 'Araqelyan', 'AU112233')