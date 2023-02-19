function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} degrees in ${i + 1} days`);
    }
}

tmp1 = [17, 21, 23];
tmp2 = [12, 5, -5, 0, 4];

printForecast(tmp1);
printForecast(tmp2);