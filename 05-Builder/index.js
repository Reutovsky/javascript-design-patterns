class EmptyCar {
    constructor() {
        this.engine = "V4";
        this.signaling = false;
        this.parktronic = false;
        this.autopilot = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new EmptyCar();
    }

    addEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }

    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }

    addAutopilot(autopilot) {
        this.car.autopilot = autopilot;
        return this;
    }

    build() {
        return this.car;
    }
}

const myFirstCar = new CarBuilder()
    .addAutopilot(true)
    .addEngine("V8")
    .build();

const mySecondCar = new CarBuilder()
    .addParktronic(true)
    .addSignaling(true)
    .build();

console.log(myFirstCar);

// EmptyCar {
//     engine: 'V8',
//     signaling: false,
//     parktronic: false,
//     autopilot: true
// }

console.log(mySecondCar);

// EmptyCar {
//     engine: 'V4',
//     signaling: true,
//     parktronic: true,
//     autopilot: false
// }