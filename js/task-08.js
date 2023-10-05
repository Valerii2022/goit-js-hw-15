const form = document.querySelector(".login-form");

form.addEventListener("submit", handleFormSubmit);

let userInfo = {};

function handleFormSubmit(e) {
  e.preventDefault();
  if (e.target.elements[0].value === "" || e.target.elements[1].value === "") {
    return alert("All fields must be filled");
  }
  userInfo.email = e.target.elements[0].value;
  userInfo.password = e.target.elements[1].value;

  console.log(userInfo);
  form.reset();
}
