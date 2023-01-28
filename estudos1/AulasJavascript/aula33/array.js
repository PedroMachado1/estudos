const arr = ["Arroz", "Feijão", "Terra", "Fogo", "Ar"];

console.log(arr);

arr.push(prompt("insira um nome:"));

console.log(arr);

arr.unshift(prompt("insira um nome:"));

const roubei = arr.slice(0, 2);
console.log(roubei);

console.log(arr);
