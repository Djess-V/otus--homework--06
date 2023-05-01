export function diff(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return Math.abs(a - b);
  }
  throw new Error("Incoming data does not meet requirements");
}

export function isWord(str) {
  if (typeof str === "string") {
    const cleanStr = str.trimStart().trimEnd();
    if (cleanStr === "") {
      return false;
    }

    return !cleanStr.includes(" ");
  }
  throw new Error("Incoming data does not meet requirements");
}

export function pow(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a ** b;
  }
  throw new Error("Incoming data does not meet requirements");
}
