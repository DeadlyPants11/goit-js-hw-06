const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  let object = {};
  object[form.email.name] = form.email.value;
  object[form.password.name] = form.password.value;
  console.log(object);
  form.reset();
}
