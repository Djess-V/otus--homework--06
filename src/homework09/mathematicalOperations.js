export function isTriangleRight(a, b, c) {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    typeof c === "number" &&
    a > 0 &&
    b > 0 &&
    c > 0
  ) {
    const squares = [a * a, b * b, c * c].sort((x, y) => y - x);

    const isTrue = squares[0] === squares[1] + squares[2];

    if (isTrue) {
      console.log("Данный треугольник - прямоугольный!");
    } else {
      console.log("Данный треугольник - не прямоугольный!");
    }
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function showLAndSCircle() {
  let r = prompt("Введите радиус окружности");

  if (!isNaN(r)) {
    r = Math.abs(r).toFixed(2);
    const l = 2 * Math.PI.toFixed(2) * r;
    const s = Math.PI.toFixed(2) * r ** 2;
    console.log(`L = ${l}, S = ${s}`);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function сalcRootsOfQuadraticEquation() {
  let a = prompt("Введите параметр - a");
  let b = prompt("Введите параметр - b");
  let c = prompt("Введите параметр - c");

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    a = Number(a);
    b = Number(b);
    c = Number(c);

    if (a === 0) {
      if (b === 0) {
        return "Корней нет!";
      }
      const x = (-c / b).toFixed(2);
      return `x = ${x}`;
    }
    const d = b ** 2 - 4 * a * c;
    if (d < 0) {
      return "Корней нет!";
    }
    if (d === 0) {
      const x = ((-b / 2) * a).toFixed(2);
      return `x = ${x}`;
    }
    if (d > 0) {
      const x1 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
      const x2 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
      return `x1 = ${x1}, x2 = ${x2}`;
    }
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
