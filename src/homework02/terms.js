export function maxNumber(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a > b ? a : b);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function showMonth() {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];
  const str = prompt("Введите номер месяца");
  const isTrue = /^[1-9]{1}$|^1[0-2]{1}$/.test(str);

  if (isTrue) {
    console.log(months[Number(str) - 1]);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function testCircleInSquare(square, circle) {
  if (typeof square === "number" && typeof circle === "number") {
    const isTrue = Math.sqrt(square) > 2 * Math.sqrt(circle / Math.PI);
    console.log(isTrue ? "Поместится" : "Не поместится");
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
