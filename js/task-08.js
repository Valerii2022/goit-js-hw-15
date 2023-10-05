const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  if (e.target.elements[0].value === "" || e.target.elements[1].value === "") {
    return alert("All fields must be filled");
  }
  const userInfo = {
    [e.target.elements[0].name]: e.target.elements[0].value,
    [e.target.elements[1].name]: e.target.elements[1].value,
  };
  console.log(userInfo);
  formRef.reset();
}
