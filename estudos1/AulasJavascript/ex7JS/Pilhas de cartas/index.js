let fila = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      fila.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é o nome da carta?");
      fila.push(novaCarta);

      break;

    case "2":
      const cartaPuxada = fila.pop();

      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert("Você puxou um(a) " + cartaPuxada);
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
