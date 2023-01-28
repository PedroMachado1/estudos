let pessoa = {
  nome: "Pedro",
  idade: 18,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  },
};

console.log(pessoa);

pessoa.dizerOla();
