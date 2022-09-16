const input = document.querySelector("#name-input");
console.log(input);
const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  const inputText = event.currentTarget.value;
  if ((output.textContent = inputText.trim())) {
    return;
  }
  return (output.textContent = "Anonymous");
}
