document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaCorreta = "A";
    const selecionado = document.querySelector('input[name="quiz"]:checked');

    if (!selecionado) {
      alert("Por favor, selecione uma alternativa.");
      return;
    }

    if (selecionado.value === respostaCorreta) {
      alert(
        "Resposta correta! Parabens você ganhou +10 Pontos."
      );
    } else {
      alert("Resposta incorreta. Tente novamente!");
    }
  });
});
