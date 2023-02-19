const arr1 = [5, 2, 4, 1, 15, 8, 3];
const arr2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr => arr.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc, cur, _ , arr) => acc + cur / arr.length, 0);


console.log(calcAverageHumanAge(arr1));
console.log(calcAverageHumanAge(arr2));