let order = [];
let clickOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");

let shuftleOrder = () => {
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) +1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.toggle('selected');
    }, number - 250);
    setTimeout (() => {
        element.classList.remove('selected');
    });
}


//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.toggle('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder()
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//funcao para proximo nível do jogo
let nextLevel = () => {
    score++;
    shuftleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar novamente`);
    order =[];
    clickOrder = [];

    playGame();
}


//funcao de inicio de jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}


//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame()