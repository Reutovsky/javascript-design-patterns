function bmwProducer(kind) {
    return kind === "sport" ? sportcarFactory : familycarFactory;
}

function sportcarFactory() {
    return new Z4();
}

function familycarFactory() {
    return new I3();
}

class Z4 {
    info() {
        console.log("Z4");
    }
}

class I3 {
    info() {
        console.log("I3");
    }
}

const sportProduce = bmwProducer("sport");
const myFirstCar = new sportProduce();
myFirstCar.info(); // Z4

const familyProduce = bmwProducer("family");
const mySecondCar = new familyProduce();
mySecondCar.info(); // I3
