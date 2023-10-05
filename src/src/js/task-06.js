const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleInputBlur);

function handleInputBlur(e) {
  if (Number(e.target.dataset.length) === Number(e.target.value.length)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
  return;
}
