const arr1 = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(arr) {
    const humanYears = arr.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const olderDogs = humanYears.filter(age => age >= 18);
    return olderDogs.reduce((acc, cur) => acc + cur) / olderDogs.length;
}

console.log(calcAverageHumanAge(arr1));
console.log(calcAverageHumanAge(arr2));