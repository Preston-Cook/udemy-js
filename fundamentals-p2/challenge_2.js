const calcTip = bill => (50 <= bill && bill <= 300) ? bill * .15 : bill * .20;

const bills = [125, 555, 44];
const tips = bills.map(elm => calcTip(elm));

const total = [];

for (let i = 0; i < bills.length; i++) {
    total.push((bills[i] + tips[i]).toFixed(2));
}

console.log(bills);
console.log(tips);
console.log(total);