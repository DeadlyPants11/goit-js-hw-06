function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanTextColor = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');
const changeBG = document.querySelector('body');

changeBtn.addEventListener('click', () => {
  changeBG.style.backgroundColor = getRandomHexColor();
  spanTextColor.textContent = getRandomHexColor();
});