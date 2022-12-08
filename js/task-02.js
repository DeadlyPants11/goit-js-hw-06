const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let arrayIngredients = document.querySelector("ul#ingredients");
let arrayDom = [];
ingredients.forEach((ingredient) => {
  let createIngredients = document.createElement("li");
  createIngredients.classList.add("item");
  createIngredients.textContent = ingredient;
  arrayDom.push(createIngredients);
});
arrayIngredients.append(...arrayDom);
