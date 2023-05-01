import { сreatElemAndWorkWithEvents } from "./сreatElemAndWorkWithEvents";

describe("сreatElemAndWorkWithEvents", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
    сreatElemAndWorkWithEvents(div);
  });

  test("at the beginning of the 3 paragraphs and the button is hidden", () => {
    expect(div.querySelectorAll("p").length).toBe(3);
    expect(div.querySelector("button").style.display).toBe("none");
  });

  test("after clicking on the button the paragraph with the value from the input field will be added", () => {
    const button = div.querySelector("button");
    const input = div.querySelector("input");
    input.value = "Four";

    button.click();
    expect(div.querySelectorAll("p").length).toBe(4);
    expect(div.querySelector("input").value).toBe("");
  });

  test("if the paragraph becomes more than 5 - 1 is deleted", () => {
    const button = div.querySelector("button");
    const input = div.querySelector("input");

    input.value = "Four";
    button.click();

    input.value = "Five";
    button.click();

    input.value = "Six";
    button.click();

    expect(div.querySelectorAll("p").length).toBe(5);
    expect(div.querySelectorAll("p")[0].textContent).toBe("Two");
  });
});
