/*Fazer um programa para ler um número inteiro positivo N. 
O programa deve então mostrar na tela N linhas,
começando de 1 até N. Para cada linha, mostrar o número da linha, 
depois o quadrado e o cubo do valor, conforme exemplo.
Nome: Sophia Gumbio
*/
const teclado = require(`prompt-sync`)();
const n : number = (teclado(`Digite um número inteiro: `));
if (n > 0) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} ${i * i} ${i * i * i}`);
    }
} else {
    console.log(`número inválido`);
}