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

const pessoas = [
  {
    nome: "Paula",
    posicao: 4,
    pontos: 50,
    insignia: "bronze",
    foto: "../img/Group 79.png"
  },
  {
    nome: "Maluf",
    posicao: 3,
    pontos: 635,
    insignia: "prata",
    foto: "../img/Group 80.png"
  },
  {
    nome: "Éder",
    posicao: 2,
    pontos: 850,
    insignia: "prata",
    foto: "../img/Group 81.png"
  },
  {
    nome: "Israel",
    posicao: 1,
    pontos: 999,
    insignia: "ouro",
    foto: "../img/Group 82.png"
  }
];

const insignias = {
  ouro: "../img/Group 78.png",
  prata: "../img/Group.png",
  bronze: "../img/Group 75.png"
};

const lista = document.getElementById('lista-podio');
const botoes = document.querySelectorAll('.nav-podio a');

function renderizarPodio(filtro = null) {
  lista.innerHTML = "";

  let pessoasFiltradas = filtro
    ? pessoas.filter(p => p.insignia === filtro)
    : pessoas;

  pessoasFiltradas.sort((a, b) => a.posicao - b.posicao);

  pessoasFiltradas.forEach(p => {
    const item = document.createElement('div');
    item.className = 'pessoa';

    item.innerHTML = `
      <div class="info">
        <div class="avatar">
          <img src="${p.foto}" alt="Foto de ${p.nome}">
        </div>
        <div class="detalhes">
          <strong>${p.posicao}º. ${p.nome}</strong>
          <span>Pontos: ${p.pontos}/1000</span>
        </div>
      </div>
      <div class="insignias">
        <img src="${insignias[p.insignia]}" alt="Insígnia ${p.insignia}">
      </div>
    `;

    lista.appendChild(item);
  });
}

botoes.forEach(botao => {
  botao.addEventListener('click', (e) => {
    e.preventDefault();
    const filtro = botao.dataset.filtro;
    renderizarPodio(filtro);
  });
});

renderizarPodio();
