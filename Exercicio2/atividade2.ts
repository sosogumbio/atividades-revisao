/*Fazer um programa para ler um número inteiro e dizer se este número é par ou ímpar.
Nome: Sophia Gumboio */

const teclado = require(`prompt-sync`)();

let n : number = parseInt(teclado(`Digite um número inteiro: `));

if (n % 2 == 0) {
    console.log(`O número ${n} é par.`);
}
else {
    console.log(`O número ${n} é ímpar.`);
}