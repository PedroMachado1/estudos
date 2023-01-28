let valorM = prompt("Insira um valor em metros: ");
let valorMM = parseFloat(valorM);

const medida = prompt(
  "Para qual medida você quer converter? \nMilímetro (mm) \nCentímetro (cm) \nDecímetro (dm) \nDecâmetro (dam) \nHectômetro (hm) \nQuilômetro (km)"
);

switch (medida) {
  case "mm":
    const conversor1 = valorMM * 1000;
    alert(valorM + " " + "metros" + " em milímetros é " + conversor1 + "mm");
    break;

  case "cm":
    const conversor2 = valorMM * 100;
    alert(valorM + " " + "metros" + " em centímetro é " + conversor2 + "cm");
    break;

  case "dm":
    const conversor3 = valorMM * 10;
    alert(valorM + " " + "metros" + " em decímetro é " + conversor3 + "dm");
    break;

  case "dam":
    const conversor4 = valorMM / 10;
    alert(valorM + " " + "metros" + " em decâmetro é " + conversor4 + "dam");
    break;

  case "hm":
    const conversor5 = valorMM / 100;
    alert(valorM + " " + "metros" + " em hectômetro é " + conversor5 + "hm");
    break;

  case "km":
    const conversor6 = valorMM / 1000;
    alert(valorM + " " + "metros" + " em quilômetro é " + conversor6 + "km");
    break;

  default:
    alert("Opção Inválida!");
}
