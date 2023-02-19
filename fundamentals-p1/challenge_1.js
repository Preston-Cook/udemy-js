function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

const [w1, h1, w2, h2] = [78, 1.69, 92, 1.95];

const markHigherBMI = calculateBMI(w1, h1) > calculateBMI(w2, h2);

console.log(markHigherBMI);