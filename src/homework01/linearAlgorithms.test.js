import {
  showSumAndProdOf2Numbers,
  countCharsIn2Strings,
  calcSumDigitsThreeDigitNumber,
} from "./linearAlgorithms";

describe("showSumAndProdOf2Numbers", () => {
  test("is a function", () => {
    expect(showSumAndProdOf2Numbers).toBeInstanceOf(Function);
  });

  test("For 3 and 4, the answer is 7 and 12", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    showSumAndProdOf2Numbers(3, 4);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(2);
  });

  test("For {} and {}, the answer is 'Incoming data does not meet requirements'", () => {
    expect(() => showSumAndProdOf2Numbers({}, {})).toThrow();
  });

  test("For '3' and '8', the answer is 'Incoming data does not meet requirements'", () => {
    expect(() => showSumAndProdOf2Numbers("3", "8")).toThrow();
  });
});

describe("countCharsIn2Strings", () => {
  test("is a function", () => {
    expect(countCharsIn2Strings).toBeInstanceOf(Function);
  });

  test("For 'Hello, World!' and 'World, goodbye!', the answer is 28", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    countCharsIn2Strings("Hello, World!", "World, goodbye!");
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(28);
  });

  test("For 4 and {}, the answer is 'Incoming data does not meet requirements'", () => {
    expect(() => countCharsIn2Strings(4, {})).toThrow();
  });

  test("For null and [], the answer is 'Incoming data does not meet requirements'", () => {
    expect(() => countCharsIn2Strings(null, [])).toThrow();
  });
});

describe("calcSumDigitsThreeDigitNumber", () => {
  test("is a function", () => {
    expect(calcSumDigitsThreeDigitNumber).toBeInstanceOf(Function);
  });

  test("For '123', the answer is 6", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("123");
    calcSumDigitsThreeDigitNumber();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(6);
  });

  test("For entered 'string', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("string");
    expect(() => calcSumDigitsThreeDigitNumber()).toThrow();
  });

  test("For entered '01234', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("01234");
    expect(() => calcSumDigitsThreeDigitNumber()).toThrow();
  });
});
