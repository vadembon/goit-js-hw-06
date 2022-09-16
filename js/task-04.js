const counterValue = {
  value: 0,
};
const valueEl = document.querySelector("#value");

const decrementBtn = document.querySelector("button[data-action ='decrement']");

const incrementBtn = document.querySelector("button[data-action ='increment']");

decrementBtn.addEventListener("click", () => {
  counterValue.value -= 1;
  valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener("click", () => {
  counterValue.value += 1;
  valueEl.textContent = counterValue.value;
});
