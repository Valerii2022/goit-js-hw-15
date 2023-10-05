function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValue = document.querySelector("#controls");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const list = document.querySelector("#boxes");

create.addEventListener("click", () =>
  createBoxes(inputValue.children[0].value)
);
destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxesList = [];
  let sizes = 30;

  for (let i = 0; i < Number(amount); i += 1) {
    boxesList.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizes}px; height: ${sizes}px"></div>`
    );
    sizes += 10;
  }

  list.insertAdjacentHTML("beforeend", boxesList.join(""));
}

function destroyBoxes() {
  inputValue.children[0].value = "";
  list.innerHTML = "";
}
