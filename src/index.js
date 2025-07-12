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

// Exatamente a mesma função acima, porém, colocando as variaveis do nome do objeto player 1 e player 2.
(async function main_quarto_Exercicio() {
    console.log(`4° Exercício: 🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);
})();
