const inputRenge = document.querySelector("#font-size-control");

inputRenge.addEventListener("input", (event) => {
  inputRenge.value = event.currentTarget.value;

  text.style.fontSize = inputRenge.value + "px";
});
