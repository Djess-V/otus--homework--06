import { maxNumber, showMonth, testCircleInSquare } from "./terms";

describe("maxNumber", () => {
  test("is a function", () => {
    expect(maxNumber).toBeInstanceOf(Function);
  });

  test("For 3 and 4, the answer 4", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    maxNumber(3, 4);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(4);
  });

  test("For {} and {}, the answer is Error", () => {
    expect(() => maxNumber({}, {})).toThrow();
  });

  test("For '3' and '8', the answer is Error", () => {
    expect(() => maxNumber("3", "8")).toThrow();
  });
});

describe("showMonth", () => {
  test("is a function", () => {
    expect(showMonth).toBeInstanceOf(Function);
  });

  test("For '11', the answer is 'ноябрь'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("11");
    showMonth();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledTimes(1);
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith("ноябрь");
  });

  test("For entered 'string', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("string");
    expect(() => showMonth()).toThrow();
  });

  test("For entered '1234', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("1234");
    expect(() => showMonth()).toThrow();
  });
});

describe("testCircleInSquare", () => {
  test("is a function", () => {
    expect(testCircleInSquare).toBeInstanceOf(Function);
  });

  test("For 25 and 15, the answer is 'Поместится'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    testCircleInSquare(25, 15);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith("Поместится");
  });

  test("For 26 and 30, the answer is 'Не поместится'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    testCircleInSquare(26, 30);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith("Не поместится");
  });

  test("For '25' and 35, the answer is Error", () => {
    expect(() => testCircleInSquare("25", 35)).toThrow();
  });
});
