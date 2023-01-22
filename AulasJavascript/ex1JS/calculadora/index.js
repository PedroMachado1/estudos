const entrada1 = prompt("Digite um número:");
const entrada2 = prompt("Digite o segundo número:");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const menos = x - y;
const multi = x * y;
const divisao = x / y;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    soma +
    "\nSubtração: " +
    menos +
    "\nMultiplicação: " +
    multi +
    "\nDivisão: " +
    divisao
);

if (soma === 10) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
