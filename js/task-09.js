function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanTextColor = document.querySelector(".color");
const changeBtn = document.querySelector(".change-color");
const changeBG = document.querySelector("body");

changeBtn.addEventListener("click", () => {
  let color = getRandomHexColor();

  changeBG.style.backgroundColor = color;
  spanTextColor.textContent = color;
});
