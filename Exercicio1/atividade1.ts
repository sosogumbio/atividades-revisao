/*Faça um programa para ler dois valores inteiros, e depois mostrar na tela a 
soma desses números com uma mensagem explicativa, conforme exemplos
Nome: Sophia Gumbio */

const teclado = require(`prompt-sync`)();

console.log(`Calculadora de Soma`)


let n1: number;
let n2: number;
let soma: number;

n1 = parseInt(teclado("Coloque o valor do primeiro número"));
n2 = parseInt(teclado("Coloque o valor do segundo número"));

soma = n1 + n2;

console.log(`O valor da soma é igual a ${soma} `);
