const width = 600;
const height = 600;
const easyString = "easy";
const mediumString = "medium";
const hardString = "hard";
//Ids
const pauseDivId = "pause";
const gameDivId = "jogo";
const _2dcontext = "2d";
const scoreDivId = "pontos";
const scoreSoundId = "point";
const errorSoundId = "fail";
const crunchSoundId = "crunchcrunch";
//Difficults
const difficultPhrase = `Select the Difficulty: ${easyString}(default), ${mediumString} or ${hardString}:`;
const congratsHackerPhrase = "Congrats Hacker! Set your Speed!";
const pausedPhrase = "GAME PAUSED! ENTER TO RETURN!";
const basePlayerSpeed = 88;                 // velocidade = 88, quanto menor mais rápido
const baseRatAppearDelay = 3000;            // tempo pro ratinho aparecer
const baseRatDisappearDelay = 4000          // tempo pro ratinho ir embora
const difficultSpeedMultiplier = 0.68       // velocidade = 60 (88 * 0.68)
const delayAppearMultiplier = 1.33          // aparece_ratin = 4000
const delayDisappearMultiplier = 0.75       // simbora_ratin = 3000
//Hacks
const hackPhrase = "Available Extra Hacks Keys: (F8) (P) (C) (M) - Digit1 / 2 / 3 / 4 in keyboard it works too";
console.log(hackPhrase);
const mKeyCode = 77;    //Movement Customization
const f8KeyCode = 119;  //Set Speed Customization
const pKeyCode = 80;    //Pause Hack
const cKeyCode = 67;    //Color Customization
const delayDespause = 10;
const _1KeyCode = 49;
const _2KeyCode = 50;
const _3KeyCode = 51;
const _4KeyCode = 52;
//Pinta pontuação
const scoreString = "SCORE:                                                         ";
const scoreColor = "#ff0";
const scoreFontStyle = "19pt Comic Sans MS";
const scorePosX = 20;
const scorePosY = 33;
//Criando os elementos
const eggImagePath = "img/egg_alpha2_stroked.png";
const ratImagePath = "img/rato2_alpha_stroked.png";
//Customização do personagem rs
const purpleBLcolor = "#b79ddd";
const blueBLcolor = "#bacff4";
const blackColor = "#000";
let colorHead = purpleBLcolor;
let colorBody = blueBLcolor;
let colorStroke = blackColor;
const lolBackgroundColor = " (better not use 94e146 lol)";
const colorHeadPhrase = "Say a color to your Head!" + lolBackgroundColor;
const colorBodyPhrase = "Say a color to your Body!" + lolBackgroundColor;
const colorStrokePhrase = "Say a color to your Stroke!" + lolBackgroundColor;
//Customização de movimentação rs
const wKeyCode = 87; let _W = wKeyCode;
const aKeyCode = 65; let _A = aKeyCode;
const sKeyCode = 83; let _S = sKeyCode;
const dKeyCode = 68; let _D = dKeyCode;
const arrowUpKeyCode = 38; let _UP = arrowUpKeyCode;
const arrowLeftKeyCode = 37; let _LEFT = arrowLeftKeyCode;
const arrowDownKeyCode = 40; let _DOWN = arrowDownKeyCode;
const arrowRightKeyCode = 39; let _RIGHT = arrowRightKeyCode;
let customUP = 104;     //Numpad8
let customLEFT = 100;   //Numpad4
let customDOWN = 98;    //Numpad2
let customRIGHT = 102;  //Numpad6
const moveUpPhrase = "W / ^ - Set your Keycode to Movement UP, infos at:\n https://keycode.info/";
const moveLeftPhrase = "A / < - Set your Keycode to Movement LEFT, infos at:\n https://keycode.info/";
const moveDownPhrase = "S / v - Set your Keycode to Movement DOWN, infos at:\n https://keycode.info/";
const moveRightPhrase = "D / > - Set your Keycode to Movement RIGHT, infos at:\n https://keycode.info/";
//Vambora
const ratPoints = 5;
const boxSize = 20;
const ratSize = 40;
function farewellMessage() {
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.font = "72pt Impact";
    ctx.fillText("SSSSSORRY...", cvs.width / 2, cvs.height / 2);
    ctx.font = "11pt Impact";
    ctx.fillStyle = "#00f";
    ctx.fillText("(Press >>F5<< to try again! Please like us on fb.com/BlueLightningStudio)", cvs.width / 2 + 8, cvs.height / 2 + 30);
}
// Eu não ia fazer, mas deixei só quatro strings no código
let DIRECTIONS = { // Ah é, não tou no TypeScript pra fazer enum
    UP: "UP",
    DOWN: "DOWN",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
}

let difficult = prompt(difficultPhrase);
let velocidade = basePlayerSpeed;

let aparece_ratin = baseRatAppearDelay;     // tempo para aparecer o ratinho
let simbora_ratin = baseRatDisappearDelay;  // tempo para o ratinho ir embora

this.setDifficulty();
function setDifficulty() {
    switch (difficult) {
        case mediumString:
            velocidade = basePlayerSpeed * difficultSpeedMultiplier;                //(60) // FASTER!
            aparece_ratin = baseRatAppearDelay * delayAppearMultiplier;             //(4000)
            simbora_ratin = baseRatDisappearDelay * delayDisappearMultiplier;       //(3000)
            break;
        case hardString:
            velocidade = basePlayerSpeed * (difficultSpeedMultiplier * 2);          //(30)  // EVEN FASTER!
            aparece_ratin = baseRatAppearDelay * (delayAppearMultiplier * 1.25);    //(5000)
            simbora_ratin = baseRatDisappearDelay / 2;                              //(2000)
            // eu acho que não tá funcionando :( // tá funcionando sim ^^'
            break;
    }
}

// Eventos especiais como F8 (hack) e P de Pause.
document.addEventListener("keydown", function () {
    let tecla = event.keyCode;

    if (tecla == f8KeyCode || tecla == _1KeyCode) {           // Pequeno Hack / Glitch, se aperta F8, o cara consegue mudar a Velocidade ^^' 
        velocidade = parseInt(prompt(congratsHackerPhrase));
        clearInterval(game);
        game = setInterval(draw, velocidade);
    }
    if (tecla == pKeyCode || tecla == _2KeyCode) {            // Se o cara aperta P, pausa o jogo.    
        let pause = document.getElementById(pauseDivId);
        pause.style.display = "block";  //var teste = 5;        
        this.despausado = false;

        setTimeout(function () {
            alert(pausedPhrase);        // Na verdade quem pausa o jogo é o Alert :rofl:
            this.despausado = true;          //teste = 4; if (teste == 4)            
            pause.style.display = "none";
        }, delayDespause);
    }
    if (tecla === cKeyCode || tecla == _3KeyCode) {
        setColor();
    }
    if (tecla === mKeyCode || tecla == _4KeyCode) {
        setMovement();
    }
}); // Updates, vamo ver

let cvs = document.getElementById(gameDivId);   // ou var canvas... 
let ctx = cvs.getContext(_2dcontext);           // pegar o contexto ... ou var contexto... enfim. ^^" 
let pontos = document.getElementById(scoreDivId);
let ctx2 = pontos.getContext(_2dcontext);

function logColors() {
    console.log(colorHeadPhrase, colorHead);
    console.log(colorBodyPhrase, colorBody);
    console.log(colorStrokePhrase, colorStroke);
}

function setColor() {
    colorHead = getColor(colorHeadPhrase);
    colorBody = getColor(colorBodyPhrase);
    colorStroke = getColor(colorStrokePhrase);
    this.logColors();
}

function setMovement() {
    customUP = prompt(moveUpPhrase).toUpperCase();
    customLEFT = prompt(moveLeftPhrase).toUpperCase();
    customDOWN = prompt(moveDownPhrase).toUpperCase();
    customRIGHT = prompt(moveRightPhrase).toUpperCase();

    if (Number.isNaN(parseInt(customUP))) {
        customUP = customUP.charCodeAt(0);
    }
    if (Number.isNaN(parseInt(customLEFT))) {
        customLEFT = customLEFT.charCodeAt(0);
    }
    if (Number.isNaN(parseInt(customDOWN))) {
        customDOWN = customDOWN.charCodeAt(0);
    }
    if (Number.isNaN(parseInt(customRIGHT))) {
        customRIGHT = customRIGHT.charCodeAt(0);
    }
    console.log([customUP, customLEFT, customDOWN, customRIGHT]);
}

function pintaPontuacao(valor = 0) { // lul, tava sendo usado esse mesmo trecho de código 3 vezes, passei o valor pro parâmetro
    let pontuacao = scoreString;
    ctx2.fillStyle = scoreColor;
    //ctx2.textAlign = "center";
    ctx2.font = scoreFontStyle;
    ctx2.fillText(pontuacao + valor, scorePosX, scorePosY);
    ctx2.strokeText(pontuacao + valor, scorePosX, scorePosY);
    // Colocar o Score na tela rsrsrs, o zerado no caso rsrs, pq antes só colocava depois que pegava ponto.
}
this.pintaPontuacao(); // tá sem ordem de código, tudo rs.

let ovo = new Image;        // Criando o ovinho ^^"
ovo.src = eggImagePath;     // ele era 20x20, originalmente feito nesse tamanho, mas tava fazendo uns testes pra ver...
let rato = new Image;       // Criando o ratinho ^^'
rato.src = ratImagePath;    // Vou tentar deixar ele 40x40 e funcionar a gameplay assim, vamos ver.
////////////////

let pontinhos = 0; // começamos a pontuação no zero
let box = boxSize; // TAMANHO DA COBRINHA, QUE FOFO :3 
// A SUA COBRA TEM VÁRIAS PARTES, COMENDO ELA AUMENTA. E TU COME PELA CABEÇA. ^^'
// CARAI, A COBRA VAI SER UM VETOR, QUE DAORA MANO ^^" 

let snake = [];
// vai começar pintando a cabeça. 
//ERRADO NÃO TÁ.lllkkkkkk, ;) 

let w = width; // tamanho da tela. 600x600
let h = height; // acho que nem usei o h, mas beleza.
let telinha = (w / box) - 1; // quantas telinha cabe na tela. '='-'-'-'-'-, qntas box cabela na tela, enfim. 

// Cabeça da cobra rs...
snake[0] = {
    x: Math.floor(Math.random() * telinha + 1) * box, // x da cobra,
    y: Math.floor(Math.random() * telinha + 1) * box // y da cobra... Gerados aleatoriamente.
};

let food = {
    x: Math.floor(Math.random() * telinha + 1) * box, // x da comida, 
    y: Math.floor(Math.random() * telinha + 1) * box // y da comida, gerados aleatoriamente.
    // .floor() = Arredonda pra baixo. Math.ceiling() = Arredonda pra cima.
    // food na cobra... fudi na cobra... ...foda....
}

let d; // she want's the d'. She wants the cobra. ============ d de direção ae..
document.addEventListener("keydown", direcao); // Vamo lá^^', famoso keydown, usei no Aleatorium.
function direcao(event) {
    let key = event.keyCode;
    // W == 87 / A == 65 / S == 83 / D == 68
    // ^ == 38 / < == 37 / v == 40 / > == 39 

    if (checkMoveUp(key) && (d != opposite(DIRECTIONS.UP))) {   // pra tu não comer seu próprio corpo. 
        d = DIRECTIONS.UP;       // W
    } else if (checkMoveLeft(key) && (d != opposite(DIRECTIONS.LEFT))) {          // tá indo pra cima, não pode tar indo pra baixo.
        d = DIRECTIONS.LEFT;     // A
    } else if (checkMoveDown(key) && (d != opposite(DIRECTIONS.DOWN))) {
        d = DIRECTIONS.DOWN;     // S
    } else if (checkMoveRight(key) && (d != opposite(DIRECTIONS.RIGHT))) {
        d = DIRECTIONS.RIGHT;    // D
    }
}

function opposite(direction) {
    switch (direction) {
        case DIRECTIONS.UP:
            return DIRECTIONS.DOWN;
        case DIRECTIONS.DOWN:
            return DIRECTIONS.UP;
        case DIRECTIONS.LEFT:
            return DIRECTIONS.RIGHT;
        case DIRECTIONS.RIGHT:
            return DIRECTIONS.LEFT;
    }
}

function checkMoveLeft(key) {
    return ((key == _A) || (key == _LEFT) || (key == customLEFT));
}
function checkMoveUp(key) {
    return ((key == _W) || (key == _UP) || (key == customUP));
}
function checkMoveRight(key) {
    return ((key == _D) || (key == _RIGHT) || (key == customRIGHT));
}
function checkMoveDown(key) {
    return ((key == _S) || (key == _DOWN) || (key == customDOWN));
}

function draw() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    // Conferir o site mozilla MDN. web docs... Tem a parte do Canvas com muita coisa interessante e tudo....
    //ctx.fillStyle = "#0f0"; // comidinha
    //ctx.fillRect(food.x,food.y,box,box); // box = 20 // Preencher 
    ctx.drawImage(ovo, food.x, food.y, box, box);
    ctx.drawImage(rato, rat.x, rat.y, sizerat, sizerat);
    // pra fazer a imagem........ de uma frutinha...
    // draw Image. draw Text.... Text pra fazer a pontuação, Image pra fazer a frutinha.

    for (let i = 0; i < snake.length; i++) { // NEM FODENDO QUE EU ESCREVI LENGHT... MERDA
        ctx.fillStyle = (i == 0) ? colorHead : colorBody;
        // estudar sobre if ternário. // operador condicional ternário******* já aprendi kk
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = colorStroke; // vou copiar a ideia do Mettal, de deixar da mesma cor do fundo
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    /*//LENGTH, length, length, length, length, length, length, length, length, length, length, -- 11
    length, length, length, length, length, length, length, length, length, length, length, length, -- 12
    length, length, length, length, length, length, length, length, length, length, length, length, -- 12
    length, length, length, length, length, length, length, length, length, length, length, length, -- 12
    length. length. length; -- 47 + 3 = 50 vezes */
    let snakeX = snake[0].x;
    let snakeY = snake[0].y; // a cabeça entrou, todo resto vai. 

    if (d == DIRECTIONS.UP) { snakeY -= box; }       //W     // snakeX = snakeX - box; amadorismo.
    if (d == DIRECTIONS.LEFT) { snakeX -= box; }     //A     // não precisa das chaves na mesma linha;  
    if (d == DIRECTIONS.DOWN) { snakeY += box; }     //S     // Mas vou abrir uma exceção:
    if (d == DIRECTIONS.RIGHT) { snakeX += box; }    //D     // "Não é porque não precisa, que você não deva usar rs", 21:54, 26/06/2021

    if (snakeX == food.x && snakeY == food.y) {     // se a sua cabeça tocar na comida.
        document.getElementById(scoreSoundId).play();
        ctx2.clearRect(0, 0, pontos.width, pontos.height);
        food = {
            x: Math.floor(Math.random() * telinha + 1) * box,
            y: Math.floor(Math.random() * telinha + 1) * box
        }
        pontinhos++;
        //console.log(pontinhos);
        //document.getElementById("pontos").innerHTML = pontinhos; // tá, é pra fazer por DrawText
        this.pintaPontuacao(pontinhos);
    }

    else if ((snakeX == rat.x || snakeX == rat.x + box) && (snakeY == rat.y || snakeY == rat.y + box)) {
        document.getElementById(crunchSoundId).play();
        ctx2.clearRect(0, 0, pontos.width, pontos.height);
        rat = {
            x: -sizerat,
            y: sizerat
        }
        pontinhos += ratPoints; //console.log(pontinhos);
        this.pintaPontuacao(pontinhos);

        clearInterval(ratito);
        clearInterval(ratatito);
        veemRatinho();
    }

    else {
        snake.pop(); // Apagar a posição antiga..... 
        // The pop() method removes the last element of an array, and returns that element. Note: This method changes the length of an array.
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    if (snakeX < 0 || snakeX > cvs.width - box || // se o eixo X tocou a caixinha
        snakeY < 0 || snakeY > cvs.height - box || // se o snakeY é menor que zero ou maior que a altura da caixa.
        collision(newHead, snake)) {
        document.getElementById(errorSoundId).play();

        clearInterval(game); // desliga o jogo.
        farewellMessage();
    }

    snake.unshift(newHead); //ela acrescenta o newHead no começo do vetor.
    // O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

    //The unshift() method adds new items to the beginning of an array, and returns the new length. Note: This method changes the length of an array.
}

let game = setInterval(draw, velocidade); // oia, quase um Phaser 3 xd, n pera, 21:48 / 26/05/2021, boh subir pro Github após os Updates

function collision(head, array) {
    for (i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) { return true; }
    }
    return false;
}


// Faça aparecer a cada 3 segundos um rato na tela para a 
// cobra comer, ele deve ficar visível somente por 4
// segundos, se o jogador pegar deve ganhar 5 pontos

// As variáveis do Rato tão aqui embaixo... enfim. // Bah, esse tal ratatito ficou confuso, mas ok. Na época fez sentido rs.

let sizerat = ratSize;
let telao = (w / sizerat) - 1;
let rat = {
    x: -sizerat,
    y: -sizerat
}
veemRatinho();

function veemRatinho() {
    ratito = setTimeout(function () {

        rat = {
            x: Math.floor(Math.random() * telao) * sizerat,
            y: Math.floor(Math.random() * telao) * sizerat
        }

        ratatito = setTimeout(vaaiRatinho, simbora_ratin);

        function vaaiRatinho() {
            rat = {
                x: -sizerat,
                y: -sizerat
            }
            clearInterval(ratatito);
            veemRatinho();
        }
    }, aparece_ratin);
}

function getColor(phrase) {
    let response = prompt(phrase);
    switch (response.toLowerCase()) {
        case "r":
        case "red":
        case "vermelho":
        case "vermeio":
        case "vermei":
        case "vermelhor":
            response = "f00";
            break;
        case "g":
        case "green":
        case "verde":
        case "verdi":
            response = "0f0";
            break;
        case "b":
        case "blue":
        case "azul":
            response = "00f";
            break;
        case "w":
        case "white":
        case "branco":
            response = "fff";
            break;
        case "k":
        case "black":
        case "preto":
            response = "fff";
            break;
        case "c":
        case "cyan":
        case "ciano":
            response = "0ff";
            break;
        case "m":
        case "magenta":
            response = "f0f";
            break;
        case "y":
        case "yellow":
        case "amarelo":
            response = "ff0";
            break;
        case "cabeça original":
        case "blroxo":
        case "roxinho":
        case "roxo":
        case "purpleBLcolor":
        case "purple":
        case "cabeça":
        case "cabeca":
        case "head":
        case "cabecinha":
        case "0":
            response = "b79ddd";
            break;
        case "corpo original":
        case "blazul":
        case "azulzinho":
        case "azur":
        case "blueBLcolor":
        case "lightblue":
        case "body":
        case "corpo":
        case "corpinho":
        case "1":
        case "bl":
            response = "bacff4";
            break;
        case "2":
        case "bg":
        case "fodasse":
        case "fudeu":
        case "hard":
        case "fundo":
        case "background":
        case "dificil":
        case "difícil":
        case "divizo":
        case "difisso":
        case "divizu":
            response = "94e146";
            break;
    }
    let color = "#" + response;
    return color;
}