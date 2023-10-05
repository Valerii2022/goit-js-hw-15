const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(e) {
  if (Number(e.target.dataset.length) === e.target.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    return;
  }
  inputRef.classList.remove("valid");
  inputRef.classList.add("invalid");
  return;
}
