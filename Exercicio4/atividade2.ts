/*Leia um valor inteiro N. Este valor será a 
quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] 
e quantos estão fora do intervalo , mostrando
essas informações conforme exemplo (use a palavra "in" para dentro do intervalo,
e "out" para fora do intervalo).
Nome : Sophia Gumbio
*/
const teclado = require(`prompt-sync`)();

let n : number = parseInt(teclado(`Quantos números você vai digitar? `));

for (let i = 0; i < n; i++) {
    let x : number = parseInt(teclado(`Digite o ${i + 1}º número: `));
    if (x >= 10 && x <= 20){
        console.log(`Número ${x} está in`);
    }
    else {
        console.log(`Número ${x} está out`);    
    }   
}