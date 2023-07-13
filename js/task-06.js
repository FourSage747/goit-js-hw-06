// --Завдання 6--
const input = document.querySelector("#validation-input");
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const requiredLength = parseInt(input.getAttribute("data-length"));
  const enteredLength = input.value.length;

  if(requiredLength === enteredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
};