function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);

console.log(resultado);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

/* const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);

console.log(notebook); */

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadradro(lado) {
  return areaRetangular(lado, lado);
}

console.log(areaRetangular(3, 5));

console.log(areaQuadradro(9));

function ola() {
  let texto = "textoaaaaaaaaa";
  texto = "Olá, mundo";
  return texto;
  console.log(texto);
}

console.log(ola());

function maioridade(idade) {
  if (idade >= 18) {
    return "Você é maior de idade";
  } else {
    return "Você não é maior de idade";
  }
}

console.log(maioridade(16));
console.log(maioridade(21));
