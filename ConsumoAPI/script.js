const APIS = {
  pokemon: {
    rotulo: "Nome ou número do Pokémon",
    exemplo: "pikachu",
    buscar: buscarPokemon,
  },
  cep: {
    rotulo: "CEP (8 dígitos)",
    exemplo: "01001000",
    buscar: buscarCep,
  },
  rick: {
    rotulo: "Nome do personagem",
    exemplo: "rick",
    buscar: buscarRick,
  },
};

let apiAtual = "pokemon";

const abas = document.querySelectorAll(".aba");
const entrada = document.getElementById("entrada");
const rotulo = document.getElementById("rotulo");
const botao = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

abas.forEach((aba) => {
  aba.addEventListener("click", () => {
    apiAtual = aba.dataset.api;

    abas.forEach((a) => {
      const ativa = a === aba;
      a.classList.toggle("ativa", ativa);
      a.setAttribute("aria-selected", ativa);
    });

    rotulo.textContent = APIS[apiAtual].rotulo;
    entrada.placeholder = APIS[apiAtual].exemplo;
    entrada.value = "";
    resultado.innerHTML = "";
    entrada.focus();
  });
});

botao.addEventListener("click", pesquisar);
entrada.addEventListener("keydown", (e) => {
  if (e.key === "Enter") pesquisar();
});


async function pesquisar() {
  const termo = entrada.value.trim();
  if (!termo) {
    mostrarMensagem("Digite algo para buscar.", true);
    return;
  }

  mostrarMensagem("Carregando...");
  try {
    const html = await APIS[apiAtual].buscar(termo);
    resultado.innerHTML = html;
  } catch (erro) {
    mostrarMensagem(erro.message, true);
  }
}

function mostrarMensagem(texto, erro = false) {
  resultado.innerHTML = `<p class="msg ${erro ? "erro" : ""}">${texto}</p>`;
}

async function buscarPokemon(termo) {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(termo.toLowerCase())}`
  );
  if (!resp.ok) throw new Error("Pokémon não encontrado.");
  const d = await resp.json();

  const tipos = d.types.map((t) => t.type.name).join(", ");
  return `
    <article class="cartao">
      <img src="${d.sprites.front_default}" alt="${d.name}">
      <div>
        <h2>${d.name} #${d.id}</h2>
        <p><strong>Tipo:</strong> ${tipos}</p>
        <p><strong>Altura:</strong> ${d.height / 10} m</p>
        <p><strong>Peso:</strong> ${d.weight / 10} kg</p>
      </div>
    </article>`;
}

async function buscarCep(termo) {
  const cep = termo.replace(/\D/g, "");
  if (cep.length !== 8) throw new Error("O CEP precisa ter 8 dígitos.");

  const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!resp.ok) throw new Error("Erro ao consultar o CEP.");
  const d = await resp.json();

  if (d.erro) throw new Error("CEP não encontrado.");

  return `
    <article class="cartao">
      <div>
        <h2>${d.cep}</h2>
        <p><strong>Rua:</strong> ${d.logradouro || "—"}</p>
        <p><strong>Bairro:</strong> ${d.bairro || "—"}</p>
        <p><strong>Cidade:</strong> ${d.localidade} - ${d.uf}</p>
      </div>
    </article>`;
}

async function buscarRick(termo) {
  const resp = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(termo)}`
  );
  if (resp.status === 404) throw new Error("Nenhum personagem encontrado.");
  if (!resp.ok) throw new Error("Erro ao consultar a API.");
  const d = await resp.json();

  return d.results
    .slice(0, 5)
    .map(
      (p) => `
    <article class="cartao">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <h2>${p.name}</h2>
        <p><strong>Status:</strong> ${p.status}</p>
        <p><strong>Espécie:</strong> ${p.species}</p>
        <p><strong>Origem:</strong> ${p.origin.name}</p>
      </div>
    </article>`
    )
    .join("");
}
