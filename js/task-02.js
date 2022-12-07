const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const array = document.querySelector("ul#ingredients");

ingredients.forEach((ingredient) => {
  const createIngredients = document.createElement("li");
  createIngredients.classList.add("item");
  createIngredients.textContent = ingredient;
  array.append(createIngredients);
});
