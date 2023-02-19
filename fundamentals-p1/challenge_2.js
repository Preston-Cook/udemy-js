function calculateBMI(weight, height) {
  return weight / height ** 2;
}

const [w1, h1, w2, h2] = [78, 1.69, 92, 1.95];

const [markBMI, johnBMI] = [calculateBMI(w1, h1), calculateBMI(w2, h2)];

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is greater than John's BMI ${johnBMI}`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI ${johnBMI} is greater than Mark's BMI ${markBMI}`);
} else {
  console.log(`Mark's BMI ${markBMI} is equal to John's BMI ${johnBMI}`);
}
