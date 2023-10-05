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
  inputValue.children[0].value = "";
  console.log(amount);
  list.insertAdjacentHTML(
    "beforeend",
    `<p style="color:${getRandomHexColor()}">hi</p>`
  );
}

function destroyBoxes() {}
