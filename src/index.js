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

//Imprime o nome do personagem, o tipo de bloco e o valor do dado rolado.
async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
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

            await logRollResult(character1.NOME, "Velocidade", diceResult1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "Velocidade", diceResult2, character2.VELOCIDADE);
        }
        if(block === "CURVA"){
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "Manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "Manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
        }
        if(block === "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;  

            console.log(`${character1.NOME} confrontou com ${character2.NOME} 🥊`);
            
            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);
        
            // Trecho 1
            // if (powerResult1 > powerResult2) {
            //     if(character2.PONTOS > 0) {
            //         character2.PONTOS--;
            //     }
            // }
            // // Esse trecho faz a mesma função que o trecho 1 acima.
            // character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;

            // Fazendo o trecho acima usando o if
            if(powerResult1 > powerResult2 && character2.PONTOS > 0){
                character2.PONTOS--;
            }

            // // Trecho 2
            // if (powerResult2 > powerResult1) {
            //     if(character1.PONTOS > 0) {
            //         character1.PONTOS--;
            //     }
            // }
            // // Esse trecho faz a mesma função que o trecho 2 acima.
            // character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1 : 0;
            
            // Fazendo o trecho acima usando o if
            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto.`);
                character2.PONTOS--;
            }

            // Trecho 3
            // if (powerResult1 === powerResult2) {
            //     console.log("Os jogadores empataram. Nenhum ponto perdido!");
            // }
            // // Esse trecho faz a mesma função que o trecho 3 acima.
            // console.log(powerResult1 === powerResult2 ? "Os jogadores empataram. Nenhum ponto perdido!" : "");
        
            // Fazendo o trecho acima usando o if
            if(powerResult2 > powerResult1 && character1.PONTOS > 0){
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto.`);
                character1.PONTOS--;
            }
            console.log( powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido" : "");
        }
        
        // verificando o vencedor
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;           
        } else if(totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }
    }
}
// Função que exibe o resultado final da corrida e declara o vencedor com base na pontuação.
async function declareWinner(character1, character2) {
    console.log("Resultado Final")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)
    
    if(character1.PONTOS > character2.PONTOS) {
        console.log(`${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    } else {
        console.log("A corrida terminou empatada!");
    }
}

// O JavaScript por padrão é sincrono, ou seja, executa tudo ao mesmo tempo. O async quer dizer que essa função vai esperar um passo anterior terminar para começar a executar essa função.
// Exatamente a mesma função acima, porém, colocando as variaveis do nome do objeto player 1 e player 2.
(async function main_DecimoPrimeiro_Exercicio() {
    console.log(`11° Exercício: 🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...`);

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
})();
