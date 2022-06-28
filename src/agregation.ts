export class Watch{
    wearing(){
        console.log('watch weared');
    }
}

class Personality{
    constructor(
        private  readonly watch: Watch
    ){}

    goout(){
        console.log('clothes weared');
        this.watch.wearing()
    }
}

const  Max = new Personality(new Watch())

Max.goout()