const allItems = document.querySelectorAll(".item");
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;

  let oneTitleElements = element.querySelectorAll("li");
  let oneTitleElemntsQty = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQty}`);
});