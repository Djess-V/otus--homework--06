import {
  showDayOfTheWeek,
  diffStartDayToNowInMinutes,
  whoAreYounger,
} from "./date";

describe("showDayOfTheWeek", () => {
  test("is a function", () => {
    expect(showDayOfTheWeek).toBeInstanceOf(Function);
  });

  test("For '04.04.2023', the answer is 'вторник'", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("04.04.2023");
    expect(showDayOfTheWeek()).toBe("вторник");
  });

  test("For '10', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("10");

    expect(() => showDayOfTheWeek()).toThrow();
  });
});

describe("diffStartDayToNowInMinutes", () => {
  test("is a function", () => {
    expect(diffStartDayToNowInMinutes).toBeInstanceOf(Function);
  });

  test("For '2023-03-04T15:00:00.000Z', the answer is 900", () => {
    const NOW = "2023-03-04T15:00:00.000Z";
    const mockDateNow = jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date(NOW).getTime());

    expect(diffStartDayToNowInMinutes()).toBe(900);
  });
});

describe("whoAreYounger", () => {
  test("is a function", () => {
    expect(whoAreYounger).toBeInstanceOf(Function);
  });

  test("For '04.04.1985' and '01.07.1955', the answer is `Пользователь с датой рождения - 04.04.1985 моложе`", () => {
    expect(whoAreYounger("04.04.1985", "01.07.1955")).toBe(
      `Пользователь с датой рождения - 04.04.1985 моложе`
    );
  });

  test("For '04.04.1985' and '04.04.1985', the answer is `У пользователей одинаковая дата рождения!`", () => {
    expect(whoAreYounger("04.04.1985", "04.04.1985")).toBe(
      `У пользователей одинаковая дата рождения!`
    );
  });

  test("For '04.04.1955' and '01.07.1985', the answer is `Пользователь с датой рождения - 01.07.1985 моложе`", () => {
    expect(whoAreYounger("04.04.1955", "01.07.1985")).toBe(
      `Пользователь с датой рождения - 01.07.1985 моложе`
    );
  });
});
