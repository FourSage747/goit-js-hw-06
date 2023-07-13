// --Завдання 9--
const body = document.body;
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', backgroundcolor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function backgroundcolor (event) {
  const randomcolor = getRandomHexColor();
  body.style.backgroundColor = randomcolor;
  color.textContent = randomcolor;
};
