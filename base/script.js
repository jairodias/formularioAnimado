const btnForm = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnForm.addEventListener("click", event => {
  event.preventDefault();
  form.classList.add("form-hide");
});

// CAPTURA O INICIAR DA ANIMAÇÃO
form.addEventListener("animationstart", event => {
  if (event.animationName == "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

// CAPTURA O FINAL DA ANIMAÇÃO
form.addEventListener("animationend", event => {
  if (event.animationName == "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
