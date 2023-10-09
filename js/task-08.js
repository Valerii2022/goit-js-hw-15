const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const { email, password } = e.target.elements;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  formRef.reset();
}
