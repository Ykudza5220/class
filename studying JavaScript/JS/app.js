class Car {
    constructor (options) {
        this.model=options.model;
        this.mark=options.mark;
        this.country=options.country;
        this.speed=options.speed;

    }
        increaseSpeed(){
    console.log('max speed 90');
        }
        decreaseSpeed(){
    console.log('min sped 50');

        }
    };
class Truc extends Car{
    constructor(options){
        super(options)
        this.takeWeigh=options.takeWeigh;
    console.log(this.mark,this.model,this.takeWeigh);
    }

};
class Bus extends Car{
constructor(options){
    super(options)
    this.takePeople=options.takePeople;
    console.log(this.mark,this.model,this.takePeople);
}
};
class Transporter extends Car{
    constructor(options){
        super(options)
        this.takeCars=options.takeCars;
    console.log(this.mark,this.model,this.takeCars);
    }
};
const truc = new Truc({
    model:'Volvo',
    mark:' FH 13',
    country:'Sweden',
    speed:90,
    takeWeigh:18000

});
const bus = new Bus({
    model:'NEOPLAN',
    mark:'cіtylіner',
    speed:120,
    country:'Germany',
    takePeople:48
});
const transporter = new Transporter({
    model:'Car transporter',
    mark:' Scania',
    speed: 90,
    country:'Sweden',
    speed:90,
    takeCars:'Toyota Corolla Hybrid,Lexus GX,Mini Cooper,Toyota Prius,Mazda MX—5 Miata'

});