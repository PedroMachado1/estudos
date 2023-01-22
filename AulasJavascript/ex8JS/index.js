let opcao = "";
let imoveis = [];

do {
  opcao = prompt(
    "LT Imobiliária\n" +
      "Total de Imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:" +
      "\n1. Salvar imóvel novo" +
      "\n2. Ver todos os imóveis" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      let imovel = {};
      (imovel.nomeImovel = prompt("Digite o nome do Imóvel:")),
        (imovel.nome = prompt("Digite o nome do proprietário:")),
        (imovel.quartos = prompt("Digite a quantidade de Quartos:")),
        (imovel.banheiros = prompt("Digite a quantidade de Banheiros:")),
        (imovel.garagem = prompt("O Imóvel possui garagem?"));

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nImóvel: " +
          imovel.nomeImovel +
          "\nProprietário: " +
          imovel.nome +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui garagem: " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando para o menu");
      }

      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nImóvel: " +
            imoveis[i].nomeImovel +
            "\nProprietário: " +
            imoveis[i].nome +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem: " +
            imoveis[i].garagem
        );
      }

      break;

    case "3":
      alert("Saindo...");
      break;

    default:
      alert("Opção Inválida!");
  }
} while (opcao !== "3");
