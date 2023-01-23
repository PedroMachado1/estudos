/* let x = prompt("Digite um número:"); */

function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

/* dobro(prompt("Digite um numero:")); */

function parametrosDoJeitoErrado(
  nome,
  telefone,
  endereco,
  aniversario,
  email,
  senha
) {
  // ...
}

parametrosDoJeitoErrado(
  "nome",
  "telefone",
  "endereco",
  "aniversario",
  "email",
  "senha"
);

function parametrosDoJeitoCerto(usuario) {
  //...
}

const dadosDoUsuario = {
  nome: "Pedro",
  telefone: "9090",
  email: "pedro@gmail.com",
  senha: "1234",
  aniversario: "28/06",
  endereco: "Rua Colorado 311",
};
parametrosDoJeitoCerto(dadosDoUsuario);
