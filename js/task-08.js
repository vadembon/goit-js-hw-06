const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Будь-ласка заповніть всі поля");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
