/* Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas
de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o
ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
Se o ponto estiver na origem, escreva a mensagem “Origem”.
Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a
situação.
Nome Sophia Gumbio */

const teclado = require(`prompt-sync`)();
let x: number = parseFloat(teclado(`Digite a coordenada x: `));
let y: number = parseFloat(teclado(`Digite a coordenada y: `));

if (x == 0 && y == 0) {
    console.log(`Origem`);
}
else if (x == 0) {
    console.log(`Eixo Y`);
}
else if (y == 0) {
    console.log(`Eixo X`);
}