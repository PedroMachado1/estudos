const numero = prompt(
  "Robô da tabuada \nDigite um número para o robô fazer a tabuada:"
);

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += "->" + numero + " * " + fator + " = " + numero * fator + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
