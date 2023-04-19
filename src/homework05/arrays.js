export function reduceArray(array) {
  if (array instanceof Array) {
    console.log(array.reduce((a, b) => a + b, 0));
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function expandNumOfArrIn2(array) {
  if (array instanceof Array) {
    console.log(array.map((a) => a * 2));
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}

export function findMaxAndMinElemOfArray(array) {
  if (array instanceof Array) {
    console.log(`Max = ${Math.max(...array)}, Min = ${Math.min(...array)}`);
  } else {
    throw new Error("Incoming data does not meet requirements");
  }
}
