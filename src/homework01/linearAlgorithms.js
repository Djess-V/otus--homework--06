export function showSumAndProdOf2Numbers(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    console.log(x + y);
    console.log(x * y);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function countCharsIn2Strings(str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    console.log(str1.length + str2.length);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function calcSumDigitsThreeDigitNumber() {
  const str = prompt("Введите трёхзначное число");
  const isTrue = /^[1-9]\d{2}$/.test(str);

  if (isTrue) {
    const digits = str.split("");
    console.log(digits.reduce((a, b) => Number(a) + Number(b), 0));
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
