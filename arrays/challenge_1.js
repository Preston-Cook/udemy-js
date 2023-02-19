const juliaOne = [3, 5, 2, 12, 7];
const kateOne = [4, 1, 15, 8, 3];
const juliaTwo = [9, 16, 6, 8, 3];
const kateTwo = [10, 5, 6, 1, 4];

function checkDogs(dogsJulia, dogsKate) {
    const dogsJuliaCorrected = [...dogsJulia];
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);

    [ ...dogsJuliaCorrected, ...dogsKate].forEach((age, i) => {
        if (age >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    })
}

checkDogs(juliaOne, kateOne);
checkDogs(juliaTwo, kateTwo);