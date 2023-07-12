// --Завдання 1--
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const h2 = item.querySelector("h2");
  console.log(`Category: ${h2.textContent}`);
  const li = item.querySelectorAll("li");
  console.log(`Elements: ${li.length}`);
});




// --Завдання 2--
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulin = document.querySelector("#ingredients");
const elements = ingredients.map((ingredient) => {
  const option = document.createElement("li");
  option.textContent = ingredient;
  option.classList.add("item");
  return option;
});

ulin.append(...elements);




// --Завдання 3--
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const imagesEl = (image) => {
  return `<li><img src="${image.url}" alt="${image.alt}" width = "600"></li>`;
};
const imagesHM = images.map(imagesEl).join("");

gallery.insertAdjacentHTML("beforeend", imagesHM);




// --Завдання 4--
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let currentValue = 0;

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});
decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});




// --Завдання 5--
const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.span.textContent = event.currentTarget.value;
}




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



// --Завдання 7--
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', fontSizeControlInput);

function fontSizeControlInput(event) {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
};


// --Завдання 8--
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть усі поля');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  loginForm.reset();
}



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