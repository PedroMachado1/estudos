const arr = [
  "1 Nivel",
  ["2 Nivel", 42, true],
  [["3 nivel, 1 item", "Olá, mundo!"], [("3 nivel, 2 item", "Oi, mundo!")]],
  [],
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2]);
console.log(arr[2][1]);
console.log(arr[2][1][0]);
