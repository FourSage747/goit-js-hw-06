// --Завдання 7--
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', fontSizeControlInput);

function fontSizeControlInput(event) {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
};