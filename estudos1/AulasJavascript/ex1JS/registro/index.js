const primeiroNome = window.prompt("Primeiro Nome:");
const sobreNome = window.prompt("Sobrenome:");
const campoDeEstudo = window.prompt("Seu campo de estudo:");
const nascimento = window.prompt("Ano de nascimento:");
parseFloat(nascimento);
let idadeCalc = nascimento - 2023;
let idade = idadeCalc - idadeCalc - idadeCalc;

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobreNome +
    " " +
    "\nCampo de Estudo: " +
    campoDeEstudo +
    " " +
    "\nIdade: " +
    idade
);
