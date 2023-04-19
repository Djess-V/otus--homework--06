import {
  reduceArray,
  expandNumOfArrIn2,
  findMaxAndMinElemOfArray,
} from "./arrays";

describe("reduceArray", () => {
  test("is a function", () => {
    expect(reduceArray).toBeInstanceOf(Function);
  });

  test("For array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], the answer is 55", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    reduceArray(array);

    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(55);
  });

  test("For array = '10', the answer is Error", () => {
    expect(() => reduceArray("10")).toThrow();
  });
});

describe("expandNumOfArrIn2", () => {
  test("is a function", () => {
    expect(expandNumOfArrIn2).toBeInstanceOf(Function);
  });

  test("For array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], the answer is [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expandNumOfArrIn2(array);

    expect(consoleLogSpyOn).toHaveBeenLastCalledWith([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
    ]);
  });

  test("For array = '10', the answer is Error", () => {
    expect(() => expandNumOfArrIn2("10")).toThrow();
  });
});

describe("findMaxAndMinElemOfArray", () => {
  test("is a function", () => {
    expect(findMaxAndMinElemOfArray).toBeInstanceOf(Function);
  });

  test("For array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], the answer is 'Max = 10, Min = 1'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    findMaxAndMinElemOfArray(array);

    expect(consoleLogSpyOn).toHaveBeenLastCalledWith("Max = 10, Min = 1");
  });

  test("For array = {}, the answer is Error", () => {
    expect(() => findMaxAndMinElemOfArray({})).toThrow();
  });
});
