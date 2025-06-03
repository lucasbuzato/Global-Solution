// ------------------------------------------------------------------------ Quiz ------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const respostaCorreta = "A";
    const selecionado = document.querySelector('input[name="quiz"]:checked');

    if (!selecionado) {
      alert("Por favor, selecione uma alternativa.");
      return;
    } else if (selecionado.value === respostaCorreta) {
      alert("Resposta correta! Parabens você ganhou +10 Pontos.");
    } else {
      alert("Resposta incorreta. Tente novamente!");
    }
  });

  // ------------------------------------------------------------------------ Podio ------------------------------------------------------------------------

  class Pessoa {
    constructor(nome, posicao, pontos, insignia, foto) {
      this.nome = nome;
      this.posicao = posicao;
      this.pontos = pontos;
      this.insignia = insignia;
      this.foto = foto;
    }

    gerarHTML(insignias) {
      return `
      <div class="pessoa">
        <div class="info">
          <div class="avatar">
            <img src="${this.foto}" alt="Foto de ${this.nome}">
          </div>
          <div class="detalhes">
            <strong>${this.posicao}º. ${this.nome}</strong>
            <span>Pontos: ${this.pontos}/1000</span>
          </div>
        </div>
        <div class="insignias">
          <img src="${
            insignias[this.insignia]
          }" alt="Insígnia ${this.insignia}">
        </div>
      </div>
    `;
    }
  }

  const insignias = {
    ouro: "../img/Group 78.png",
    prata: "../img/Group.png",
    bronze: "../img/Group 75.png",
  };

  const pessoas = [
    new Pessoa("Paula", 4, 50, "bronze", "../img/Group 79.png"),
    new Pessoa("Maluf", 3, 635, "prata", "../img/Group 80.png"),
    new Pessoa("Éder", 2, 850, "prata", "../img/Group 81.png"),
    new Pessoa("Israel", 1, 999, "ouro", "../img/Group 82.png"),
  ];

  const lista = document.getElementById("lista-podio");
  const botoes = document.querySelectorAll(".nav-podio a");

  function renderizarPodio(filtro = null) {
    lista.innerHTML = "";

    let pessoasFiltradas = filtro
      ? pessoas.filter((p) => p.insignia === filtro)
      : pessoas;

    pessoasFiltradas.sort((a, b) => a.posicao - b.posicao);

    pessoasFiltradas.forEach((p) => {
      lista.innerHTML += p.gerarHTML(insignias);
    });
  }

  botoes.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      e.preventDefault();
      const filtro = botao.dataset.filtro;
      renderizarPodio(filtro);
    });
  });

  renderizarPodio();
});
