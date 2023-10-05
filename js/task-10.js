function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueRef = document.querySelector("#controls");
const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const listRef = document.querySelector("#boxes");

createRef.addEventListener("click", () =>
  createBoxes(inputValueRef.firstElementChild.value)
);
destroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let boxesList = [];
  let sizes = 30;

  for (let i = 0; i < Number(amount); i += 1) {
    boxesList.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizes}px; height: ${sizes}px"></div>`
    );
    sizes += 10;
  }

  listRef.insertAdjacentHTML("beforeend", boxesList.join(""));
}

function destroyBoxes() {
  inputValueRef.children[0].value = "";
  listRef.innerHTML = "";
}
