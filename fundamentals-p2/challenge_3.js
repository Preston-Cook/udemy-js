const obj1 = {
    first: "Mark",
    last: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return (this.mass / this.height ** 2)
    }
}

const obj2 = {
    first: "John",
    last: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return (this.mass / this.height ** 2)
    }
}

const sortedObjects = [obj1, obj2].sort((a, b) => {
    const aBMI = a.calcBMI();
    const bBMI = b.calcBMI();

    if (aBMI < bBMI) {
        return 1;
    }
    if (bBMI > aBMI) {
        return -1;
    }
    return 0;
})

const largerBMI = sortedObjects[0];
const smallerBMI = sortedObjects[1];

console.log(`${largerBMI.name}'s BMI (${largerBMI.calcBMI()}) is higher than ${smallerBMI}'s BMI (${smallerBMI.calcBMI()})`);