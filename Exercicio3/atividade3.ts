/* Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes. Escreva
um algoritmo para ler o tipo de combustível abastecido (codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel
4.Fim). Caso o usuário informe um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até
que seja válido). O programa será encerrado quando o código informado for o número 4. Deve ser escrito a
mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo de combustível, conforme
exemplo.
Nome: Sophia Gumbio
*/
const teclado = require(`prompt-sync`)();
console.log(`-----------------------------------------`)
console.log(`Informe o tipo de combustível abastecido:`);
console.log(`1.Álcool---------------------------------`);
console.log(`2.Gasolina-------------------------------`);
console.log(`3.Diesel---------------------------------`);
console.log(`4.Fim------------------------------------`);
console.log(`-----------------------------------------`);

let alcool = 0;
let gasolina = 0;
let diesel = 0;
let tipo = 0;

while (true) {
    let tipo : number = parseInt(teclado(`Digite o código do combustível: `));
    if (tipo == 1) {
        alcool++;
    } else if (tipo == 2) {
        gasolina++;
    } else if (tipo == 3) {
        diesel++;
    } else if (tipo == 4) {
        break;
    } else {
        console.log(`Código inválido! Digite novamente.`);
    }
}

console.log(`-------------------------------------------`);
console.log(`--------------MUITO OBRIGADO---------------`);
console.log(`Álcool: ${alcool} -------------------------`);   
console.log(`Gasolina: ${gasolina} ---------------------`);
console.log(`Diesel: ${diesel} -------------------------`);
console.log(`-------------------------------------------`);
