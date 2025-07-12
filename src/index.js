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

// For é uma estrutura de repetição, o round é uma variável que começa com o valor 1 e depois vai alterando de 1 em 1 até chegar o numero 5.
async function getRandomBlock() {
    let random = Math.random()
    let result
    switch(true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }
    return result;
}

// Essa função simula uma corrida de 5 rodadas entre dois personagens, sorteando o resultado a cada rodada.
async function playRaceEngine(character1,character2) {
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round} `)

        //sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)
        
        //rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 =  await rollDice();

        //Teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if(block === "RETA"){
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
        }
        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;            
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;
        }
    }
}

// O JavaScript por padrão é sincrono, ou seja, executa tudo ao mesmo tempo. O async quer dizer que essa função vai esperar um passo anterior terminar para começar a executar essa função.
// Exatamente a mesma função acima, porém, colocando as variaveis do nome do objeto player 1 e player 2.
(async function main_Setimo_Exercicio() {
    console.log(`7° Exercício: 🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);

    await playRaceEngine(player1, player2)
})();
