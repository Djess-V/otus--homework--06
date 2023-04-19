export function sumNumFrom50to100() {
  let result = 0;

  for (let number = 50; number <= 100; number++) {
    result += number;
  }

  console.log(result);
}

export function showMultiplicationTableBy7() {
  for (let i = 1; i <= 9; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}

export function showArithmeticMeanOfOddNumFrom1ToN() {
  let sum = 0;
  let amount = 0;
  const str = Number(prompt("Введите число N"));

  if (!isNaN(str)) {
    for (let number = 1; number <= str; number += 2) {
      amount++;
      sum += number;
    }
    console.log(Number((sum / amount).toFixed(2)));
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
