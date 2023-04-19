import {
  sumNumFrom50to100,
  showMultiplicationTableBy7,
  showArithmeticMeanOfOddNumFrom1ToN,
} from "./cycles";

describe("sumNumFrom50to100", () => {
  test("is a function", () => {
    expect(sumNumFrom50to100).toBeInstanceOf(Function);
  });

  test("The answer 3825", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    sumNumFrom50to100();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(3825);
  });
});

describe("showMultiplicationTableBy7", () => {
  test("is a function", () => {
    expect(showMultiplicationTableBy7).toBeInstanceOf(Function);
  });

  test("A table of 9 rows will be displayed", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    showMultiplicationTableBy7();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(9);
  });
});

describe("showArithmeticMeanOfOddNumFrom1ToN", () => {
  test("is a function", () => {
    expect(showArithmeticMeanOfOddNumFrom1ToN).toBeInstanceOf(Function);
  });

  test("For '10', the answer is 25", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("10");
    showArithmeticMeanOfOddNumFrom1ToN();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(5);
  });

  test("For entered 'string', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("string");
    expect(() => showArithmeticMeanOfOddNumFrom1ToN()).toThrow();
  });

  test("For entered 'mn 12', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("mn 12");
    expect(() => showArithmeticMeanOfOddNumFrom1ToN()).toThrow();
  });
});
