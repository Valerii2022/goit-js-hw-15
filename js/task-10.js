function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueRef = document.querySelector("input");
const createRef = document.querySelector("[data-create]");
const destroyRef = document.querySelector("[data-destroy]");
const listRef = document.querySelector("#boxes");

createRef.addEventListener("click", handleCreateBtnClick);
destroyRef.addEventListener("click", handleDestroyBtnClick);

function handleCreateBtnClick() {
  createBoxes(inputValueRef.value);
}

function handleDestroyBtnClick() {
  destroyBoxes();
}

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
  inputValueRef.value = "";
  listRef.innerHTML = "";
}
