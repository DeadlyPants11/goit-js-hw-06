let setFocusInput = document.querySelector("#validation-input[data-length]");

setFocusInput.addEventListener("blur", () => {
  setFocusInput.classList.remove(`valid`);
  setFocusInput.classList.remove(`invalid`);

  if (setFocusInput.value.length === Number(setFocusInput.dataset.length)) {
    setFocusInput.classList.add(`valid`);
  } else {
    setFocusInput.classList.add(`invalid`);
  }
});

console.dir(setFocusInput);
