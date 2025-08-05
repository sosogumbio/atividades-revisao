/*Fazer um programa para ler um número N. Depois leia N pares de números
e mostre a divisão do primeiro pelosegundo. Se o denominador for igual a zero, 
mostrar a mensagem "divisao impossivel".
Nome: Sophia Gumbio
*/
const teclado = require(`prompt-sync`)();
let n: number = parseInt(teclado(`Quantas divisões você quer fazer? `));

for (let i = 0; i < n; i++) {
    let valor1: number = parseFloat(teclado(`Digite o 1° valor : `));
    let valor2: number = parseFloat(teclado(`Digite o 2° valor : `));
    if (valor2 == 0 && valor1 == 0) {
        console.log(`Divisão impossível`);
    }
    else {
        let divisao: number = valor1 / valor2;
        console.log(`${divisao}`);
    }
}