// In this file I create class using agregation and compostion
import { Car } from "./composition";
import { Watch } from "./agregation";

class Personality{
    public name: string
    public lastname: string
    private _passport: number
    public watch: Watch
    private car: Car

    constructor(name: string, lastname: string, passport: number, w: Watch){
        this.name = name
        this.lastname = lastname
        this._passport = passport
        this.watch = w
        this.car = new Car()
    }

    // go(){
    //     console.log(`hello I am ${this.name} ${this.lastname}`)
    //     this.car.start()
    //     this.watch.wearing()
    // }
}

const Mesrop = new Personality('Mesrop', 'Araqelyan', 12121,new Watch())

console.log(Mesrop);
