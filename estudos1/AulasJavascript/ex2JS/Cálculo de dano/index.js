const nPersonagem1 = prompt("Insira o nome do primeiro personagem: ");
const poderDeAtaque = prompt("Insira a quantiade de dano: ");
const pAtaque = parseFloat(poderDeAtaque);

const nPersonagem2 = prompt("Insira o nome do segundo personagem: ");
let pontosDeVida = prompt("Insira a quantiade de vida: ");
const poderDeDefesa = prompt("Insira o poder de defesa: ");
let pVida = parseFloat(pontosDeVida);
const pDefesa = parseFloat(poderDeDefesa);
const escudo = prompt("O " + nPersonagem2 + " possui um escudo? (Sim ou Não)");

let danoCausado = 0;

if (pAtaque > pDefesa && escudo === "Não") {
  danoCausado = pAtaque - pDefesa;
} else if (pAtaque > pDefesa && escudo === "Sim") {
  danoCausado = (pAtaque - pDefesa) / 2;
}

pVida -= danoCausado;

alert(
  nPersonagem1 + " causou " + danoCausado + " pontos de dano " + nPersonagem2
);
alert(
  nPersonagem1 +
    "\nPoder de ataque: " +
    pAtaque +
    "\n\n" +
    nPersonagem2 +
    "\nPontos de vida: " +
    pVida +
    "\nPoder de defesa: " +
    pDefesa +
    "\nPossui escudo: " +
    escudo
);
