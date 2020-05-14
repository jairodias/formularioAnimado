const btnForm = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnForm.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value == "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName == "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
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
