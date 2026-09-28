// Atividades — Introdução ao JavaScript
// Para executar: node atividades.js
// Ou cole no console do navegador (F12).

function titulo(numero, texto) {
  console.log(`\n===== ${numero}. ${texto} =====`);
}

function situacaoDoAluno(media) {
  if (media >= 7) return "aprovado";
  if (media >= 5) return "em recuperação";
  return "reprovado";
}

// ---------------------------------------------------------------
titulo(1, "Apresentação pessoal");
{
  const nome = "Ana";
  const idade = 25;
  const cidade = "São Caetano do Sul";
  const profissao = "desenvolvedora";
  console.log(
    `Olá! Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e trabalho como ${profissao}.`
  );
}

// ---------------------------------------------------------------
titulo(2, "Operações matemáticas");
{
  const a = 20;
  const b = 4;
  console.log(`${a} + ${b} = ${a + b}`);
  console.log(`${a} - ${b} = ${a - b}`);
  console.log(`${a} * ${b} = ${a * b}`);
  console.log(`${a} / ${b} = ${a / b}`);
}

// ---------------------------------------------------------------
titulo(3, "Conversor de idade");
{
  const idadeEmAnos = 25;
  const meses = idadeEmAnos * 12;
  console.log(`${idadeEmAnos} anos correspondem a aproximadamente ${meses} meses.`);
}

// ---------------------------------------------------------------
titulo(4, "Média de notas");
{
  const nota1 = 8;
  const nota2 = 6.5;
  const nota3 = 9;
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
  console.log(`Média: ${media.toFixed(2)}`);
}

// ---------------------------------------------------------------
titulo(5, "Maioridade");
{
  const idade = 17;
  if (idade >= 18) {
    console.log(`Com ${idade} anos, a pessoa é maior de idade.`);
  } else {
    console.log(`Com ${idade} anos, a pessoa é menor de idade.`);
  }
}

// ---------------------------------------------------------------
titulo(6, "Número positivo, negativo ou zero");
{
  const numero = -5;
  if (numero > 0) {
    console.log(`${numero} é positivo.`);
  } else if (numero < 0) {
    console.log(`${numero} é negativo.`);
  } else {
    console.log(`${numero} é igual a zero.`);
  }
}

// ---------------------------------------------------------------
titulo(7, "Par ou ímpar");
{
  const numero = 7;
  if (numero % 2 === 0) {
    console.log(`${numero} é par.`);
  } else {
    console.log(`${numero} é ímpar.`);
  }
}

// ---------------------------------------------------------------
titulo(8, "Situação do aluno");
{
  const nota1 = 6;
  const nota2 = 5.5;
  const media = (nota1 + nota2) / 2;
  console.log(`Média: ${media.toFixed(1)} -> ${situacaoDoAluno(media)}`);
}

// ---------------------------------------------------------------
titulo(9, "Maior entre dois números");
{
  const a = 15;
  const b = 15;
  if (a > b) {
    console.log(`${a} é maior que ${b}.`);
  } else if (b > a) {
    console.log(`${b} é maior que ${a}.`);
  } else {
    console.log(`Os números são iguais (${a}).`);
  }
}

// ---------------------------------------------------------------
titulo(10, "Maior entre três números");
{
  const a = 12;
  const b = 45;
  const c = 30;
  let maior = a;
  if (b > maior) maior = b;
  if (c > maior) maior = c;
  console.log(`Entre ${a}, ${b} e ${c}, o maior é ${maior}.`);
}

// ---------------------------------------------------------------
titulo(11, "Cálculo de desconto");
{
  const preco = 150;
  let precoFinal = preco;
  if (preco > 100) {
    precoFinal = preco * 0.9; // 10% de desconto
  }
  console.log(`Valor original: R$ ${preco.toFixed(2)}`);
  console.log(`Valor final: R$ ${precoFinal.toFixed(2)}`);
}

// ---------------------------------------------------------------
titulo(12, "Controle de acesso");
{
  const idade = 20;
  const autorizado = true;
  if (idade >= 18 && autorizado) {
    console.log("Acesso permitido.");
  } else {
    console.log("Acesso negado.");
  }
}

// ---------------------------------------------------------------
titulo(13, "Lista de nomes");
{
  const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa"];
  for (const nome of nomes) {
    console.log(nome);
  }
}

// ---------------------------------------------------------------
titulo(14, "Lista de compras");
{
  const compras = ["Arroz", "Feijão", "Leite", "Café", "Pão"];
  console.log(`Total de itens: ${compras.length}`);
  for (const produto of compras) {
    console.log(`- ${produto}`);
  }
}

// ---------------------------------------------------------------
titulo(15, "Cadastro de pessoa");
{
  const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Desenvolvedora",
  };
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Idade: ${pessoa.idade}`);
  console.log(`Cidade: ${pessoa.cidade}`);
  console.log(`Profissão: ${pessoa.profissao}`);
}

// ---------------------------------------------------------------
titulo(16, "Cadastro de produto");
{
  const produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    disponivel: true,
  };
  console.log(
    `O produto ${produto.nome} (categoria ${produto.categoria}) custa R$ ${produto.preco.toFixed(2)} e ${
      produto.disponivel ? "está disponível" : "não está disponível"
    }.`
  );
}

// ---------------------------------------------------------------
titulo(17, "Cadastro de alunos");
{
  const alunos = [
    { nome: "Ana", idade: 20 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carla", idade: 19 },
  ];
  for (const aluno of alunos) {
    console.log(`Aluno: ${aluno.nome} | Idade: ${aluno.idade}`);
  }
}

// ---------------------------------------------------------------
titulo(18, "Dobro de um número");
{
  function dobro(numero) {
    return numero * 2;
  }
  console.log(`Dobro de 4: ${dobro(4)}`);
  console.log(`Dobro de 10: ${dobro(10)}`);
  console.log(`Dobro de -3: ${dobro(-3)}`);
}

// ---------------------------------------------------------------
titulo(19, "Calculadora de soma");
{
  function soma(a, b) {
    return a + b;
  }
  console.log(`2 + 3 = ${soma(2, 3)}`);
  console.log(`10 + 25 = ${soma(10, 25)}`);
  console.log(`-4 + 9 = ${soma(-4, 9)}`);
}

// ---------------------------------------------------------------
titulo(20, "Calculadora de média");
{
  function media(nota1, nota2) {
    return (nota1 + nota2) / 2;
  }
  console.log(`Média de 8 e 6: ${media(8, 6)}`);
  console.log(`Média de 10 e 9: ${media(10, 9)}`);
  console.log(`Média de 4 e 5: ${media(4, 5)}`);
}

// ---------------------------------------------------------------
titulo(21, "Saudação personalizada");
{
  function saudacao(nome) {
    return `Bem-vindo(a), ${nome}! Que bom ter você aqui.`;
  }
  console.log(saudacao("Ana"));
  console.log(saudacao("Bruno"));
}

// ---------------------------------------------------------------
titulo(22, "Tabuada");
{
  const numero = 7;
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// ---------------------------------------------------------------
titulo(23, "Contagem crescente");
{
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
}

// ---------------------------------------------------------------
titulo(24, "Contagem regressiva");
{
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  console.log("Fim!");
}

// ---------------------------------------------------------------
titulo(25, "Números pares");
{
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// ---------------------------------------------------------------
titulo(26, "Soma de uma lista");
{
  const numeros = [10, 20, 30, 40, 50];
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  console.log(`Lista: ${numeros.join(", ")}`);
  console.log(`Soma: ${total}`);
}

// ---------------------------------------------------------------
titulo(27, "Média de uma lista");
{
  const notas = [7, 8.5, 6, 9, 5.5];
  let total = 0;
  for (const nota of notas) {
    total += nota;
  }
  const media = total / notas.length;
  console.log(`Notas: ${notas.join(", ")}`);
  console.log(`Média: ${media.toFixed(2)}`);
}

// ---------------------------------------------------------------
titulo(28, "Verificação de disponibilidade");
{
  const produto = { nome: "Mouse", preco: 80, estoque: 0 };
  if (produto.estoque > 0) {
    console.log(`${produto.nome} (R$ ${produto.preco.toFixed(2)}): disponível, ${produto.estoque} em estoque.`);
  } else {
    console.log(`${produto.nome} (R$ ${produto.preco.toFixed(2)}): indisponível.`);
  }
}

// ---------------------------------------------------------------
titulo(29, "Boletim completo");
{
  const nome = "Ana";
  const nota1 = 8;
  const nota2 = 7;
  const media = (nota1 + nota2) / 2;
  console.log(`Aluno: ${nome}`);
  console.log(`Média: ${media.toFixed(1)}`);
  console.log(`Situação final: ${situacaoDoAluno(media)}`);
}

// ---------------------------------------------------------------
titulo(30, "Desafio final — Sistema de alunos");
{
  const alunos = [
    { nome: "Ana", nota1: 9, nota2: 8 },
    { nome: "Bruno", nota1: 6, nota2: 5 },
    { nome: "Carla", nota1: 3, nota2: 4 },
  ];

  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`\nNome: ${aluno.nome}`);
    console.log(`Nota 1: ${aluno.nota1}`);
    console.log(`Nota 2: ${aluno.nota2}`);
    console.log(`Média final: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacaoDoAluno(media)}`);
  }
}
