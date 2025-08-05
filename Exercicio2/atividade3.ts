/*Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao
Multiplos", indicando se os valores lidos são múltiplos entre si. Atenção: os números devem poder ser digitados em
ordem crescente ou decrescente.
Nome: Sophia Gumbio */

const teclado = require(`prompt-sync`)();
let a: number = parseInt(teclado(`Digite o primeiro número: `));
let b: number = parseInt(teclado(`Digite o segundo número: `)); 

if (a % b == 0 || b % a == 0) {
    console.log(`São Multiplos`);
} 
else {
    console.log(`Não são Multiplos`);
}