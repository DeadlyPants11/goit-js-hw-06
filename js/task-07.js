const rangeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

rangeInput.addEventListener("input", () => {
  spanText.style.fontSize = rangeInput.value + "px";
});
