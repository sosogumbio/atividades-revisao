/*Ler um valor N. Calcular e escrever seu respectivo fatorial
Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
Lembrando que, por definição, fatorial de 0 é 1.
Nome: Sophia Gumbio
*/

const teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Digite um número para calcular o fatorial: `));
let fatorial: number = 1;
for (let i = n; i > 0; i--) {
    fatorial *= i;
}
console.log(`O fatorial do número  ${n} é ${fatorial}.`);