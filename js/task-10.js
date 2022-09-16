function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
  const colorBoxArr = [];
  for (let i = 0; i < amount; i += 1) {
    colorBoxArr[i] = document.createElement("div");
    colorBoxArr[i].style.height = `${30 + 10 * i}px`;
    colorBoxArr[i].style.width = `${30 + 10 * i}px`;
    colorBoxArr[i].style.background = getRandomHexColor();
  }
  boxes.append(...colorBoxArr);
};

btnCreate.addEventListener("click", () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});
