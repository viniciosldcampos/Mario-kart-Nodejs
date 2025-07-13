# 🏁 Corrida Maluca com Mario & Luigi
  
## 📋 Descrição
  
Este projeto simula uma **corrida de 5 rodadas** entre dois personagens icônicos: **Mario** e **Luigi**. A cada rodada, um tipo de bloco da pista é sorteado, determinando qual atributo (VELOCIDADE, MANOBRABILIDADE ou PODER) será testado. O vencedor é quem acumular mais pontos ao final!

---
  
## ⚙️ Regras e Mecânicas
  
### 🎮 Jogadores
  
Cada personagem possui os seguintes atributos:
- `VELOCIDADE`: Utilizado nas **retas**
- `MANOBRABILIDADE`: Utilizado nas **curvas**
- `PODER`: Utilizado nos **confrontos**
- `PONTOS`: Pontuação atual (inicia em 0)

---
  
### 🛣️ Pista
  
A corrida ocorre em uma pista composta por **5 blocos**. Cada bloco pode ser:

- 🔁 **RETA** → Testa **VELOCIDADE**
- ➰ **CURVA** → Testa **MANOBRABILIDADE**
- 🥊 **CONFRONTO** → Testa **PODER**

---
  
### 🎲 Dinâmica da Rodada
  
- Cada jogador rola um dado de **6 lados**.
- Soma-se o valor do dado ao atributo relacionado ao tipo de bloco.
- Quem tiver o maior total vence a rodada.
  
📌 No **CONFRONTO**:
- O jogador que **perde** a rodada perde **1 ponto**
- Pontuação **não pode ser negativa**
- Em caso de empate, ninguém perde pontos

---
  
### 🏆 Condição de Vitória

- Quem tiver **mais pontos** ao final das 5 rodadas vence a corrida
- Em caso de empate, é declarado empate

---
  
## 🧩 Estrutura do Código
  
### 1. 🎭 Criação dos Personagens

```js
const player1 = {
  NOME: "Mário",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};
```
  
### 2. 🎲 Rolar o dado
```js
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
```
Simula um dado de 6 lados.
  
### 3. 🛤️ Sortear bloco da pista
```js
async function getRandomBlock() {
  let random = Math.random();
  if (random < 0.33) return "RETA";
  else if (random < 0.66) return "CURVA";
  else return "CONFRONTO";
}
```
Sorteia aleatoriamente entre os 3 tipos de blocos.
  
### 4. 📢 Exibir resultado da jogada
```js
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}
```
Imprime o resultado da jogada de cada personagem.
  
### 5. 🚦 Motor da Corrida
```js
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    ...
  }
}
```
Realiza as 5 rodadas:
Sorteia o bloco
Rola dados para os dois personagens
Soma com atributo correspondente
Atualiza pontuação com base no resultado
  
Especial no CONFRONTO:
O personagem perdedor perde 1 ponto
Se empatar, nada acontece
  
### 6. 🏁 Declarar Vencedor
```js
async function declareWinner(character1, character2) {
  ...
}
```
Mostra o resultado final e declara o vencedor (ou empate).
  
### 7. 🚀 Função Principal (main)
```js
(async function main_DecimoPrimeiro_Exercicio() {
  ...
})();
```
Inicia a corrida:
Exibe mensagem inicial
Executa o motor da corrida
Mostra o vencedor ao final
  
### 📎 Licença
Este projeto é livre para estudo, uso e modificação com fins educacionais.