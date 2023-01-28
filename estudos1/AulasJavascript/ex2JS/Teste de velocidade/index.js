const nCarro1 = prompt("Nome do primeiro carro: ");
const vCarro1 = prompt("Velocidade do carro (Em Km/h): ");

const nCarro2 = prompt("Nome do segundo carro: ");
const vCarro2 = prompt("Velocidade do carro (Em Km/h): ");

const vvCarro1 = parseFloat(vCarro1);
const vvCarro2 = parseFloat(vCarro2);

if (vvCarro1 > vvCarro2) {
  alert(
    nCarro1 +
      " " +
      vvCarro1 +
      "Km/h" +
      " " +
      "é mais rápido que " +
      nCarro2 +
      " " +
      vvCarro2 +
      "Km/h"
  );
} else if (vvCarro2 > vvCarro1) {
  alert(
    nCarro2 +
      " " +
      vvCarro2 +
      "Km/h" +
      " " +
      "é mais rápido que " +
      nCarro1 +
      " " +
      vvCarro1 +
      "Km/h"
  );
} else {
  alert("A Velocidade dos dois são iguais");
}
