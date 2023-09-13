//Imprimir impares del 1 al 20:
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Disminuir múltiplos de 3 del 100 al 0:
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Imprimir la secuencia 4, 2.5, 1, -0.5, -2, -3.5:

for (let i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}

//Sigma (suma de valores del 1 al 100):
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Factorial (producto de valores del 1 al 12):
let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log(product);
