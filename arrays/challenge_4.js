const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
]

// Step 1
dogs.forEach(elm => {
    elm.recommendedFood = Math.trunc(elm.weight ** 0.75 * 28);
})

// Step 2
const sarahDog = dogs.find(elm => elm.owners.includes('Sarah'));
console.log(sarahDog.recommendedFood > sarahDog.curFood ? 'Eating too little' : 'Eating too much');

// Step 3
const ownersEatTooMuch = dogs.filter(elm => elm.curFood > elm.recommendedFood).flatMap(elm => elm.owners);
const ownersEatTooLittle = dogs.filter(elm => elm.curFood < elm.recommendedFood).flatMap(elm => elm.owners);

// Step 4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// Step 5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// Step 6
console.log(dogs.some(dog => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1));

// Step 7
const dogsEatingOkayFood = dogs.filter(dog => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1);

// Step 8
const sortedDogs = [...dogs].sort((a, b) => (a.recommendedFood - b.recommendedFood))

console.log(sortedDogs);
