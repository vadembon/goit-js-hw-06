const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const makeItemEl = document.querySelector("#ingredients");

const ingredientsEl = (elementsName) => {
  return elementsName.map((elementName) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = elementName;
    return itemEl;
  });
};

const elements = ingredientsEl(ingredients);
makeItemEl.append(...elements);
