const textInput = document.querySelector("#name-input");
const span = document.querySelector("#name-output");


textInput.addEventListener("input", (evt) => {
  if (textInput.value.trim() === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = evt.currentTarget.value;
  }
});
