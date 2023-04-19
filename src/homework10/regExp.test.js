import { isDate, isEmail, isPhoneNumber } from "./regExp";

describe("isDate", () => {
  test("is a function", () => {
    expect(isDate).toBeInstanceOf(Function);
  });

  test("For '04.04.2023', the answer is 'Строка является датой в требуемом формате'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("04.04.2023");

    expect(isDate()).toBe("Строка является датой в требуемом формате");
  });

  test("For '04-04-2023', the answer is 'Строка является датой в требуемом формате'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("04-04-2023");

    expect(isDate()).toBe("Строка является датой в требуемом формате");
  });

  test("For '10.34-0453', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("10.34-0453");

    expect(() => isDate()).toThrow();
  });
});

describe("isEmail", () => {
  test("is a function", () => {
    expect(isEmail).toBeInstanceOf(Function);
  });

  test("e.ageevets@yandex.ru', the answer is 'Имя e-mail соответствует требованиям'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("e.ageevets@yandex.ru");

    expect(isEmail()).toBe("Имя e-mail соответствует требованиям");
  });

  test("For '_@y.com', the answer is 'Имя e-mail соответствует требованиям'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("_@y.com");

    expect(isEmail()).toBe("Имя e-mail соответствует требованиям");
  });

  test("For 'buzz.foo.com', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("buzz.foo.com");

    expect(() => isEmail()).toThrow();
  });

  test("For 'mysite..1234@yahoo.com', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("mysite..1234@yahoo.com");

    expect(() => isEmail()).toThrow();
  });

  test("For '10.34-0453', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("10.34-0453");

    expect(() => isEmail()).toThrow();
  });
});

describe("isPhoneNumber", () => {
  test("is a function", () => {
    expect(isPhoneNumber).toBeInstanceOf(Function);
  });

  test("+79541233434', the answer is 'Номер телефона соответствует требованиям'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("+79541233434");

    expect(isPhoneNumber()).toBe("Номер телефона соответствует требованиям");
  });
  test("+7-954-123-3434', the answer is 'Номер телефона соответствует требованиям'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("+7-954-123-3434");

    expect(isPhoneNumber()).toBe("Номер телефона соответствует требованиям");
  });

  test("For '+7 965 564 6765', the answer is 'Номер телефона соответствует требованиям'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("+7 965 564 6765");

    expect(isPhoneNumber()).toBe("Номер телефона соответствует требованиям");
  });

  test("For 'buzz.foo.com', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("buzz.foo.com");

    expect(() => isPhoneNumber()).toThrow();
  });

  test("For '+7 999.999-8734', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("+7 999.999-8734");

    expect(() => isPhoneNumber()).toThrow();
  });

  test("For '+710.34-0453', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("+710.34-0453");

    expect(() => isPhoneNumber()).toThrow();
  });
});
