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