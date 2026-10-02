// 1. Pegando os elementos do DOM
const campoNum1 = document.getElementById("num1");
const campoNum2 = document.getElementById("num2");
const campoOperacao = document.getElementById("operacao");
const visor = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");
const btnLimpar = document.getElementById("btnLimpar");

// 2. Função que mostra uma mensagem (resultado ou erro) na página
function mostrar(texto, ehErro) {
  visor.textContent = texto;
  visor.classList.toggle("erro", ehErro);
}

// 3. Função principal: lê os valores, valida e calcula
function calcular() {
  const valor1 = campoNum1.value;
  const valor2 = campoNum2.value;

  // Condicional: campos vazios
  if (valor1 === "" || valor2 === "") {
    mostrar("Preencha os dois números para calcular.", true);
    return;
  }

  // Inputs retornam texto: convertemos para número
  const a = parseFloat(valor1);
  const b = parseFloat(valor2);
  const operacao = campoOperacao.value;
  let resultado;

  // Condicionais: escolhe a operação
  if (operacao === "soma") {
    resultado = a + b;
  } else if (operacao === "subtracao") {
    resultado = a - b;
  } else if (operacao === "multiplicacao") {
    resultado = a * b;
  } else if (operacao === "divisao") {
    if (b === 0) {
      mostrar("Não é possível dividir por zero. Altere o segundo número.", true);
      return;
    }
    resultado = a / b;
  }

  // Arredonda para evitar erros como 0.1 + 0.2 = 0.30000000000000004
  resultado = Math.round(resultado * 1e10) / 1e10;
  mostrar(resultado.toLocaleString("pt-BR", { maximumFractionDigits: 10 }), false);
}

// 4. Função que limpa tudo
function limpar() {
  campoNum1.value = "";
  campoNum2.value = "";
  campoOperacao.value = "soma";
  mostrar("Resultado aparece aqui", false);
  campoNum1.focus();
}

// 5. Eventos
btnCalcular.addEventListener("click", calcular);
btnLimpar.addEventListener("click", limpar);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") calcular();
});
