const input = document.querySelector("#name-input");
console.log(input);
const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputText = event.currentTarget.value;
  output.textContent = inputText.trim() ? inputText : "Anonymous";
}
