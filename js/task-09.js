function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtnRef = document.querySelector(".change-color");
const colorTitleRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", handleBgColorChange);

function handleBgColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTitleRef.textContent = color;
}
