let opcao = "";

do {
  opcao = prompt(
    "Calculadora Geométrica\n" +
      "\n1. Área do triângulo" +
      "\n2. Área do retângulo" +
      "\n3. Área do quadrado" +
      "\n4. Área do trapézio" +
      "\n5. Área do círculo" +
      "\n6. Sair"
  );

  switch (opcao) {
    case "1":
      function areaTriangulo(base, altura) {
        let calcTriangulo = (base * altura) / 2;
        return calcTriangulo;
      }

      let baseTriangulo = parseFloat(prompt("Digite a base do triângulo"));
      let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo"));

      alert(
        "A área do triângulo " +
          baseTriangulo +
          " x " +
          alturaTriangulo +
          " / 2" +
          " é " +
          areaTriangulo(baseTriangulo, alturaTriangulo)
      );

      break;

    case "2":
      function areaRetangulo(base, altura) {
        let calcRetangulo = base * altura;
        return calcRetangulo;
      }

      let baseRetangulo = parseFloat(prompt("Digite a base do retângulo"));
      let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo"));

      alert(
        "A área do retângulo " +
          baseRetangulo +
          " x " +
          alturaRetangulo +
          " é " +
          areaRetangulo(baseRetangulo, alturaRetangulo)
      );

      break;

    case "3":
      function areaQuadrado(lado) {
        let calcQuadrado = lado * lado;
        return calcQuadrado;
      }

      let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado"));

      alert(
        "A área do quadrado " +
          ladoQuadrado +
          " x " +
          ladoQuadrado +
          " é " +
          areaQuadrado(ladoQuadrado)
      );

      break;

    case "4":
      function areaTrapezio(baseMaior, baseMenor, altura) {
        let calcTrapezio = ((baseMaior + baseMenor) * altura) / 2;
        return calcTrapezio;
      }

      let baseMaiorTrapezio = parseFloat(
        prompt("Digite a base maior do trapézio")
      );
      let baseMenorTrapezio = parseFloat(
        prompt("Digite a base menor do trapézio")
      );
      let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio"));

      alert(
        "A área do trapézio " +
          "(" +
          baseMaiorTrapezio +
          " + " +
          baseMenorTrapezio +
          ")" +
          " x " +
          alturaTrapezio +
          " / 2" +
          " é " +
          areaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio)
      );

      break;

    case "5":
      function areaCirculo(raio) {
        let calcCirculo = 3.14 * (raio * raio);
        return calcCirculo;
      }

      let raioCirculo = parseFloat(prompt("Digite o raio do circulo"));

      alert(
        "A área do círculo " +
          "π (3,14) x " +
          raioCirculo +
          " é " +
          areaCirculo(raioCirculo)
      );

      break;

    case "6":
      alert("Saindo...");

      break;

    default:
      alert("Opção inválida!");
  }
} while (opcao !== "6");
