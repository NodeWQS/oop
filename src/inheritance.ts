// inheritance is paradigm of oop with this paradigm we can create class based another class.
// With super method we can inheritanced another class properties.
import { Person } from "./abstraction";

class Programmer extends Person{
    private _workingYears: number
    public language: string
    constructor(name: string, lastname: string, passport: number, years: number, lang: 'python' | 'javascript'){
        super(name, lastname, passport)
        this._workingYears = years
        this.language = lang
    }

    get coding(){
        return `Now I am coding in ${this.language}`    
    }
}

const prog = new Programmer('Max', 'Ivanov', 12211, 3, 'javascript')
console.log(prog.coding);
