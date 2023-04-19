import { diff, isWord, pow } from "./functions";

describe("diff", () => {
  test("is a function", () => {
    expect(diff).toBeInstanceOf(Function);
  });

  test("For 5 and 9, the answer is 4", () => {
    expect(diff(5, 9)).toBe(4);
  });

  test("For '10' and 'foo', the answer is Error", () => {
    expect(() => diff("10")).toThrow();
  });
});

describe("isWord", () => {
  test("is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });

  test("For '   fuzz', the answer is true", () => {
    expect(isWord("   fuzz")).toBeTruthy();
  });

  test("For '   fuzz   buzz    ', the answer is false", () => {
    expect(isWord("   fuzz   buzz    ")).toBeFalsy();
  });

  test("For '       ', the answer is false", () => {
    expect(isWord("       ")).toBeFalsy();
  });

  test("For 10, the answer is Error", () => {
    expect(() => isWord(10)).toThrow();
  });
});

describe("pow", () => {
  test("is a function", () => {
    expect(pow).toBeInstanceOf(Function);
  });

  test("For 2 and 5, the answer is 64", () => {
    expect(pow(2, 6)).toBe(64);
    expect(pow(3, 3)).toBe(27);
    expect(pow(2, 10)).toBe(1024);
  });

  test("For 'fuzz' and 'buzz', the answer is Error", () => {
    expect(() => pow("fuzz", "buzz")).toThrow();
  });

  test("For {} and 5, the answer is Error", () => {
    expect(() => pow({}, 5)).toThrow();
  });
});
