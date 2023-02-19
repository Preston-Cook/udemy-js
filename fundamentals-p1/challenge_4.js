const bills = [275, 40, 430];

for (let i = 0; i < bills.length; i++) {
    const tip = (50 <= bills[i] && bills[i] <= 300) ? bills[i] * .15 : bills[i] * .20;
    console.log(`The bill was ${bills[i].toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value was ${(bills[i] + tip).toFixed(2)}`);
}