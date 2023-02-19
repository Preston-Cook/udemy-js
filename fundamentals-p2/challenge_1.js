function checkWinner(avg1, avg2) {
    if (avg1 >= avg2 * 2) {
        return 'Dolphins';
    } else if (avg2 >= avg1 * 2) {
        return 'Koalas';
    }
    return 'Nobody';
}

const dolphins = [44, 23, 71];
const koalas = [65, 54, 49];

const [dolphinAvg, koalaAvg] = [dolphins, koalas].map(elm => elm.reduce((a, b) => a + b) / elm.length);

console.log(`${checkWinner(dolphinAvg, koalaAvg)} wins!`);