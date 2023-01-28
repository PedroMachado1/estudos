let opcao = "";

do {
  opcao = prompt(
    "Menu Interativo" +
      "\n1. Primeira opção" +
      "\n2. Segunda opção" +
      "\n3. Terceira opção" +
      "\n4. Quarta opção" +
      "\n5. Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");

      break;

    case "2":
      alert("Você escolheu a opção 2");

      break;

    case "3":
      alert("Você escolheu a opção 3");

      break;

    case "4":
      alert("Você escolheu a opção 4");

      break;

    case "5":
      alert("Encerrando...");

      break;

    default:
  }
} while (opcao !== "5");
