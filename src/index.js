// Criando abaixo objetos (dois jogadores)
const player1 = {
    NOME : "Mário",
    VELOCIDADE : 4,
    MANOBRABILIDADE : 3,
    PODER : 3,
    PONTOS: 0,
}

const player2 = {
    NOME : "Luigi",
    VELOCIDADE : 3,
    MANOBRABILIDADE : 4,
    PODER : 4,
    PONTOS: 0,
};

// Async significa que a função não bloqueará a execução do restante do código enquanto aguarda o resultado de uma operação assíncrona.
// A função main abaixo é chamada de função de entrada e vai chamar as demais funções.
// Forma de chamar a função main.
// A colocação de '(' antes do async  o fechamento do parenteses junto com abre e fecha parenteses ')()' depois da função mostra que aquela função é auto-invocavel.
(async function main_segundo_Exercicio() {
    console.log("2° Exercício: Hello");
})();
