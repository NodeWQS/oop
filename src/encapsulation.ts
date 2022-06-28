// Encapsulation is paradigm of oop.With this paradigm we can combine properties and methods in one object
// Hidding is proccess when we can create private or public properties or methods.
// In typescript have 4 access modifers (protected,public,private,readonly)

class System{
    constructor(private _path: string){}

    public rename(filename: string){
        setTimeout(() => {
            console.log(`file renamed ${filename}`)
        }, 1000)
    }
    public delete(){
        setTimeout(() => {
            console.log('file deleted successfully')
        }, 2000)
    }
    get path():string{
        return this._path
    }
}

const file = new System('./tsconfig.json')
console.log(file.path)
file.rename('config.json')