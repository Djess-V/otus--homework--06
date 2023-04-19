export function сreatElemAndWorkWithEvents(el) {
  el.innerHTML = `
    <p>One</p>
    <p>Two</p>
    <p>Three</p>
    <input />
    <br />
    <button>Добавить текст</button>
  `;

  const input = el.querySelector("input");
  const button = el.querySelector("button");

  button.style.display = "none";

  input.addEventListener("input", function f() {
    if (this.value === "") {
      button.style.display = "none";
    } else {
      button.style.display = "";
    }
  });

  button.addEventListener("click", function f() {
    const paragraphs = el.querySelectorAll("p");

    if (paragraphs.length === 5) {
      paragraphs[0].remove();
    }

    const lastP = paragraphs[paragraphs.length - 1];

    lastP.insertAdjacentHTML("afterend", `<p>${input.value}</p>`);

    input.value = "";
    this.style.display = "none";
  });
}
