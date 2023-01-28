let opcao = "";

do {
  opcao = prompt("Robô da Tabuada\n" + "\n1. Calcular" + "\n2. Sair");

  switch (opcao) {
    case "1":
      const numero = prompt("Digite um número para ser calculado:");
      let resultado = ""
      for (let fator = 1; fator <= 20; fator++) {
        resultado += "->" + numero + " X " + fator + " = " + numero * fator + "\n";
      }
      alert("O resultado da tabuada de " + numero + "\n\n" + resultado);
      break;

    case "2":
      alert("Saindo...");

      break;

    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "2");

/* const numero = prompt(
  "Robô Tabuada\n" + "Informe um número para ele calcular:"
);
let resultado = "";


for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + numero + " X " + fator + " = " + numero * fator + "\n";
}

alert("O resultado da tabuada de " + numero + "\n\n" + resultado);
 */
