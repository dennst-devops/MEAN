class Bike {
	constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0,
    ){}
	doSomethingFun(){
		console.log("This is FUN!");
    }
    displayInfo (){
        console.log("Price: " + this.price);
        console.log("Max Speed: " + this.max_speed);
        console.log("Miles: " + this.miles);
    }
    ride() {
        console.log("Riding...: ");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing...: ");
        this.miles -= 5;
        return this;
    }
}
let Bike1 = new Bike(200, "25mph");
Bike1.displayInfo();
Bike1.ride().ride().ride().ride().ride();
Bike1.displayInfo();
Bike1.reverse();
Bike1.displayInfo();