const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  input.classList.remove("valid");
  input.classList.remove("invalid");
  event.currentTarget.value.trim().length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
}
