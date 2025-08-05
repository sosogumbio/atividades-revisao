/*Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode
começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
Nome: Sophia Gumbio*/

const teclado = require(`prompt-sync`)();
let horaInicial: number = parseInt(teclado(`Digite a hora inicial: `));
let horaFinal: number = parseInt(teclado(`Digite a hora final: `));

if (horaInicial < 0 || horaInicial > 24 || horaFinal < 0 || horaFinal > 24) {
    console.log(`Hora inválida! As horas devem estar entre 0 e 24.`);
}
else {
    console.log(`A duração do jogo é de ${horaFinal - horaInicial} horas.`);
    if (horaFinal <= horaInicial) {
        console.log(`O jogo durou ${24 - (horaInicial - horaFinal)} horas.`);
    }
}