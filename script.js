const form = document.querySelector("#sign-up");

form.addEventListener("submit", (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
  }

  form.classList.add("validated");
})