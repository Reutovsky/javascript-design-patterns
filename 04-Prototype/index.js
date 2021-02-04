class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }

    produce() {
        return new Car(this.model, this.price);
    }
}

const carPrototype = new Car("bmw-x5", 10000);

const car1 = carPrototype.produce();
const car2 = carPrototype.produce();

car2.price = 15000;

console.log(car1); // Car { model: 'bmw-x5', price: 10000 }
console.log(car2); // Car { model: 'bmw-x5', price: 15000 }