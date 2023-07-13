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
