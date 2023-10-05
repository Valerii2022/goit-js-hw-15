function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorTitle = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", handleBgColorCgange);

function handleBgColorCgange() {
  body.style.backgroundColor = getRandomHexColor();
  colorTitle.textContent = body.style.backgroundColor;
}
