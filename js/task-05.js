const input = document.querySelector("#name-input");
console.log(input);
const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if ((output.textContent = event.currentTarget.value.trim())) {
    return;
  }
  return (output.textContent = "Anonymous");
}
