let counterValue = 0;
let span = document.querySelector('#value');
const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  span.innerHTML = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  span.innerHTML = counterValue;
});
