const categoriesEl = document.querySelector("#categories");

const itemEl = categoriesEl.children;
console.log(`Number of categories: ${itemEl.length}`);

const categoryFirstEl = categoriesEl.firstElementChild;
const categoryNameFirstEl = categoryFirstEl.firstElementChild.textContent;
console.log(`Category: ${categoryNameFirstEl}`);

const elementsFirst = categoryFirstEl.lastElementChild.children.length;
console.log(`Elements: ${elementsFirst}`);

const categorySecondEl = document.querySelectorAll(".item");
const categoryNameSecondEl = categorySecondEl[1].firstElementChild.textContent;
console.log(`Category: ${categoryNameSecondEl}`);

const elementSecond = categorySecondEl[1].lastElementChild.children.length;
console.log(`Elements: ${elementSecond}`);

const categoryLastEl = categoriesEl.lastElementChild;
const categoryNameLastEl = categoryLastEl.firstElementChild.textContent;
console.log(`Category: ${categoryNameLastEl}`);

const elementsLast = categoryLastEl.lastElementChild.children.length;
console.log(`Elements: ${elementsLast}`);
