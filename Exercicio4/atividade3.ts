/*Leia 1 valor inteiro N, que representa o número 
de casos de teste que vem a seguir. Cada caso de teste consiste
de 3 valores reais, cada um deles com uma casa decimal. Apresente 
a média ponderada para cada um destes conjuntos de 3 valores, sendo 
que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem
peso 5.
Nome : Sophia Gumbia
*/
const teclado = require(`prompt-sync`)();

let n: number = parseInt(teclado(`Quantos casos de teste? `));

for (let i = 0; i < n; i++) {
    let valor1: number = teclado(`Digite o 1° valor separado por espaço: `);
    let valor2: number = teclado(`Digite o 1° valor separado por espaço: `);
    let valor3: number = teclado(`Digite o 1° valor separado por espaço: `);
    let a = valor1
    let b = valor2
    let c = valor3;
    let media: number = (a * 2 + b * 3 + c * 5) / 10;
    console.log(`Média: ${media}`);
}