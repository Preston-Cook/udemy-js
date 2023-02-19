const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

const dolphinsAvg = average([97, 112, 101]);
const koalasAvg = average([109, 95, 106]);

if (dolphinsAvg < 100 && koalasAvg < 100) {
    console.log("There is no winner");
} else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("The Dolphins win!")
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log("The Koalas win!");
} else {
    console.log("There is a tie!");
}