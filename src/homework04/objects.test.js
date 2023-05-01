import { addAge, createAdmin, destructProp } from "./objects";

describe("addAge", () => {
  const user = {
    name: "John",
  };

  test("is a function", () => {
    expect(addAge).toBeInstanceOf(Function);
  });

  test("For age = 'Foo', the answer is Error", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");
    promptSpyOn.mockReturnValue("Foo");
    expect(() => addAge(user)).toThrow();
  });

  test("For age = '10', the answer is user.age = 10", () => {
    const promptSpyOn = jest.spyOn(window, "prompt");

    promptSpyOn.mockReturnValue("10");

    expect(addAge(user).age).toBe(10);
  });
});

describe("createAdmin", () => {
  test("is a function", () => {
    expect(createAdmin).toBeInstanceOf(Function);
  });

  test("Admin has been set up", () => {
    const user = {
      name: "John",
      age: 17,
    };
    expect(createAdmin(user)).toBeInstanceOf(Object);
    expect(createAdmin(user)).not.toBe(user);
  });

  test("Null will return an error", () => {
    expect(() => createAdmin(null)).toThrow();
  });
});

describe("destructProp", () => {
  test("is a function", () => {
    expect(destructProp).toBeInstanceOf(Function);
  });

  test("Admin has been set up", () => {
    const admin = {
      name: "John",
      age: 17,
      role: "admin",
    };
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    destructProp(admin);
    expect(consoleLogSpyOn).toHaveBeenCalled();
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith("John", 17, "admin");
  });

  test("Null will return an error", () => {
    expect(() => destructProp(null)).toThrow();
  });

  test("Object without the name property will return in the name variable undefined", () => {
    const admin = {
      age: 17,
      role: "admin",
    };
    const consoleLogSpyOn = jest.spyOn(window.console, "log");
    destructProp(admin);
    expect(consoleLogSpyOn).toHaveBeenLastCalledWith(undefined, 17, "admin");
  });
});
