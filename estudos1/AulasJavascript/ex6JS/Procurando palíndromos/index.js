let palavra = prompt(
  "Verificador de Palíndromos\n" + "Informe uma palavra para ser verificada:"
);
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo\n" + palavra + " = " + palavraInvertida);
} else {
  alert(
    palavra + " não é um palíndromo\n" + palavra + " !== " + palavraInvertida
  );
}

/* const palavra = prompt(
  "Verificador de Palíndromos\n" + "Informe uma palavra para ser verificada:"
);
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida
  );
}
 */
