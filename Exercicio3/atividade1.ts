/* Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha
incorreta informada, escrever a mensagem "Senha Invalida". 
Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o 
algoritmo encerrado. Considere que a senha correta é o valor 2002. 

Nome:Sophia Gumbio */ 

console.log("Verificação de senha: ");
const teclado = require(`prompt-sync`)();

let senha: number;

do {
    senha = parseInt(teclado("Digite a senha: "));
    if (senha != 2002) {
        console.log("Senha Invalida");
    }
}
while (senha != 2002);