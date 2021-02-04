class Bmw {
    constructor(model, cost, maxSpeed) {
        this.model = model;
        this.cost = cost;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if (type === "X5") return new Bmw(type, 10000, 250);
        if (type === "X6") return new Bmw(type, 15000, 280);
    }
}

const factory = new BmwFactory();

const x5 = factory.create("X5");
const x6 = factory.create("X6");

console.log(x5);
console.log(x6);