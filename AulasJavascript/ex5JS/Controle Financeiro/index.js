let saldo = parseFloat(prompt("Informe o saldo inicial:"));
let opcao = "";

do {
  opcao = prompt(
    "Banco Kofy\n" +
      "Saldo: " +
      saldo +
      "\n1. Adicionar dinheiro" +
      "\n2. Retirar dinheiro" +
      "\n3. Encerrar"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Insira o valor a ser adicionado:"));

      break;

    case "2":
      saldo -= parseFloat(prompt("Insira o valor a ser removido:"));

      break;

    case "3":
      alert("Encerrando...");

      break;

    default:
      alert("Operação Inválida!");
  }
} while (opcao !== "3");
