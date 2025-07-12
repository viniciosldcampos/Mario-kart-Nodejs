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

// Essa função serve para sortear um número de 1 a 6, como se você tivesse jogado um dado.
// ➡ return é uma palavra que diz: "Ei, essa função terminou e o resultado dela é esse aqui!" Ou seja, o return devolve um valor quando a função acaba. Esse valor você pode usar depois, se quiser.
// ✅ Math.random() 👉 Gera um número aleatório entre 0 e quase 1
// ✅ Math.floor(...) 👉 O Math.floor arredonda o numero
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Essa função simula uma corrida de 5 rodadas entre dois personagens, sorteando o resultado a cada rodada.
async function playRaceEngine(character1,character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} `)

        //sortear bloco
    }
}

// O JavaScript por padrão é sincrono, ou seja, executa tudo ao mesmo tempo. O async quer dizer que essa função vai esperar um passo anterior terminar para começar a executar essa função.
// Exatamente a mesma função acima, porém, colocando as variaveis do nome do objeto player 1 e player 2.
(async function main_quinto_Exercicio() {
    console.log(`5° Exercício: 🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);

    await playRaceEngine(player1, player2)
})();
