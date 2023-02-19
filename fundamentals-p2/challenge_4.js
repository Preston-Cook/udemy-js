const calcTip = bill => (50 <= bill && bill <= 300) ? bill * .15 : bill * .20;

function avgTotal(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}


const bills = [
    22,
    295,
    176,
    440,
    37, 
    105,
    10,
    1100,
    86,
    52
]

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(avgTotal(bills));
console.log(avgTotal(tips));
console.log(avgTotal(totals));

// TODO