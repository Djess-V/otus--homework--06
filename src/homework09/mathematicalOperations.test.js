import {
  isTriangleRight,
  showLAndSCircle,
  сalcRootsOfQuadraticEquation,
} from "./mathematicalOperations";

describe("isTriangleRight", () => {
  test("is a function", () => {
    expect(isTriangleRight).toBeInstanceOf(Function);
  });

  test("For 3, 4, 5, the answer is 'Данный треугольник - прямоугольный!'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    isTriangleRight(3, 4, 5);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(
      "Данный треугольник - прямоугольный!"
    );
  });

  test("For 2, 2, 5, the answer is 'Данный треугольник - не прямоугольный!'", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    isTriangleRight(2, 2, 5);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenCalledWith(
      "Данный треугольник - не прямоугольный!"
    );
  });

  test("For '10', -5, {}, the answer is Error", () => {
    expect(() => isTriangleRight("10", -5, {})).toThrow();
  });
});

describe("showLAndSCircle", () => {
  test("is a function", () => {
    expect(showLAndSCircle).toBeInstanceOf(Function);
  });

  test("For 11, the answer is `L = 69.08, S = 379.94`", () => {
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("11");
    showLAndSCircle();
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(`L = 69.08, S = 379.94`);
  });

  test("For 'Foo', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("Foo");
    expect(() => showLAndSCircle()).toThrow();
  });
});

describe("сalcRootsOfQuadraticEquation", () => {
  test("is a function", () => {
    expect(сalcRootsOfQuadraticEquation).toBeInstanceOf(Function);
  });

  test("For 1, 1, 1, the answer is `Корней нет!`", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("1");

    сalcRootsOfQuadraticEquation();

    expect(promptSpyOn).toHaveBeenCalled();
    expect(promptSpyOn).toHaveBeenCalledTimes(3);
    expect(сalcRootsOfQuadraticEquation()).toBe("Корней нет!");
  });

  test("For 1, 'Foo', 'null', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValueOnce("1");
    promptSpyOn.mockReturnValueOnce("Foo");
    promptSpyOn.mockReturnValueOnce("null");
    expect(() => сalcRootsOfQuadraticEquation()).toThrow();
  });

  test("For 3, 2, -1, the answer is `x1 = 0.33, x2 = -1.00`", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValueOnce("3");
    promptSpyOn.mockReturnValueOnce("2");
    promptSpyOn.mockReturnValueOnce("-1");

    expect(сalcRootsOfQuadraticEquation()).toBe(`x1 = 0.33, x2 = -1.00`);
  });

  test("For 0, 2, -2, the answer is `x = 1.00`", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValueOnce("0");
    promptSpyOn.mockReturnValueOnce("2");
    promptSpyOn.mockReturnValueOnce("-2");

    expect(сalcRootsOfQuadraticEquation()).toBe(`x = 1.00`);
  });

  test("For 1, 2, 1, the answer is `x = -1.00`", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValueOnce("1");
    promptSpyOn.mockReturnValueOnce("2");
    promptSpyOn.mockReturnValueOnce("1");

    expect(сalcRootsOfQuadraticEquation()).toBe(`x = -1.00`);
  });

  test("For 0, 0, 1, the answer is `Корней нет!`", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValueOnce("0");
    promptSpyOn.mockReturnValueOnce("0");
    promptSpyOn.mockReturnValueOnce("1");

    expect(сalcRootsOfQuadraticEquation()).toBe("Корней нет!");
  });
});
