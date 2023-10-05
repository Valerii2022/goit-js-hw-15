const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", handleInputChange);

function handleInputChange(e) {
  textRef.style.fontSize = `${e.target.value}px`;
}
