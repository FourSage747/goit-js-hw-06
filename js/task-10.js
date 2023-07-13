const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

const createBtn = controls.querySelector('button[data-create]');
const destroyBtn = controls.querySelector('button[data-destroy]');
const input = controls.querySelector('input[type="number"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;
  let boxSize = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxColor = getRandomHexColor();
    const box = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${boxColor};"></div>`;
    boxesHTML += box;
    boxSize += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}