var dificuldade = prompt("Select the Difficulty: 'easy'(default), 'medium' or 'hard':");
var velocidade = 88;

var aparece_ratin = 3000;
var simbora_ratin = 4000;

setDificulty();
function setDificulty()
{
if (dificuldade == "medium")
    {
        velocidade = 60;
        aparece_ratin = 4000;
        simbora_ratin = 3000;
    }

else if (dificuldade == "hard")
    {
        velocidade = 30;
        aparece_ratin = 5000;
        simbora_ratin = 2000; // eu acho que não tá funcionando :( // tá funcionando sim ^^'
    }

else
{
    velocidade = 88;
}
}

// Eventos especiais como F8 (hack) e P de Pause.
document.addEventListener("keydown",function(){
    
    let tecla = event.keyCode;
    
    if (tecla == 119) // Pequeno Hack / Glitch, se aperta F8, o cara consegue mudar a Velocidade ^^' 
        {
            velocidade = parseInt(prompt("Congrats Hacker! Set your Speed!"));
            clearInterval(game); 
            
            game = setInterval(draw,velocidade);
        }
    
    if (tecla == 80) // Se o cara aperta P, pausa o jogo.
        {
            var pause = document.getElementById("pause");
            
            pause.style.display = "block";
            
            //var teste = 5;
            var pausado = false;
            
            setTimeout(function(){
                alert("GAME PAUSED! ENTER TO RETURN!"); 
                //teste = 4; if (teste == 4)
                pausado = true;
                
                if (pausado){pause.style.display = "none"} }, 10); 
            
        }
    
}); // Updates, vamo ver

var cvs = document.getElementById("jogo"); // ou var canvas... 
var ctx = cvs.getContext("2d"); // pegar o contexto ... ou var contexto... enfim. ^^" 
var pontos = document.getElementById("pontos");
var ctx2 = pontos.getContext("2d");

function pintaPontuacao()
{
var pontuacao = "SCORE:                                                         ";       
ctx2.fillStyle = "#ff0";
//ctx2.textAlign = "center";
ctx2.font = "19pt Comic Sans MS";
ctx2.fillText(pontuacao+0, 20, 33);
ctx2.strokeText(pontuacao+0, 20, 33); // Colocar o Score na tela rsrsrs, o zerado no caso rsrs, pq antes só colocava depois que pegava ponto.
}
pintaPontuacao();

// Criando o ovinho ^^" 
var ovo = new Image;
ovo.src = "img/egg_alpha2_stroked.png"; // ele era 20x20, originalmente feito nesse tamanho, mas tava fazendo uns testes pra ver...
// Criando o ratinho ^^'
var rato = new Image;
rato.src = "img/rato2_alpha_stroked.png"; // Vou tentar deixar ele 40x40 e funcionar a gameplay assim, vamos ver.
////////////////

var pontinhos = 0; // começamos a pontuação no zero
var box = 20; // TAMANHO DA COBRINHA, QUE FOFO :3 

// A SUA COBRA TEM VÁRIAS PARTES, COMENDO ELA AUMENTA. E TU COME PELA CABEÇA. ^^'
// CARAI, A COBRA VAI SER UM VETOR, QUE DAORA MANO ^^" 

var snake = [];

// vai começar pintando a cabeça. 
//ERRADO NÃO TÁ.lllkkkkkk, ;) 

var w = 600; // tamanho da tela. 600x600
var h = 600;
var telinha = (w / box)-1; // quantas telinha cabe na tela. '='-'-'-'-'-, qntas box cabela na tela, enfim. 

// Cabeça da cobra rs...
snake[0]=
    {
        x: Math.floor(Math.random()*telinha+1)*box, // x da cobra,
        y: Math.floor(Math.random()*telinha+1)*box // y da cobra... Gerados aleatoriamente.
    };

var food = 
    { 
        x: Math.floor(Math.random()*telinha+1)*box, // x da comida, 
        y: Math.floor(Math.random()*telinha+1)*box // y da comida, gerados aleatoriamente.
        
        // .floor() = Arredonda pra baixo. Math.ceiling() = Arredonda pra cima.
        
        // food na cobra... fudi na cobra... ...foda....
    }

var d; // she want's the d'. She wants the cobra. ============ d de direção ae..

document.addEventListener("keydown",direcao); // Vamo lá^^', famoso keydown, usei no Aleatorium.
function direcao(event)
{
    var key = event.keyCode; // W == 87 / A == 65 / S == 83 / D == 68
                             // ^ == 38 / < == 37 / v == 40 / > == 39 
    
    if (((key == 87) || (key == 38)) && (d != "DOWN")) // pra tu não comer seu próprio corpo. 
        {
            d = "UP"; // W
        }
    
    else if (((key == 65) || (key == 37)) && (d != "RIGHT")) // tá indo pra cima, não pode tar indo pra baixo.
        {
            d = "LEFT"; // A
        }
    
    else if (((key == 83) || (key == 40)) && (d != "UP"))
        {
            d = "DOWN"; // S
        }
    
    else if (((key == 68) || (key == 39)) && (d != "LEFT"))
        {
            d = "RIGHT"; // D
        }
    
    
}

function draw()
{
    ctx.clearRect(0,0,cvs.width,cvs.height); // Conferir o site mozilla MDN. web docs... Tem a parte do Canvas com muita coisa interessante e tudo....
    
    //ctx.fillStyle = "#0f0"; // comidinha
    //ctx.fillRect(food.x,food.y,box,box); // box = 20 // Preencher 
    
    ctx.drawImage(ovo,food.x, food.y, box, box);
    
    ctx.drawImage(rato,rat.x, rat.y, sizerat, sizerat);

    
    // pra fazer a imagem........ de uma frutinha...
    // draw Image. draw Text.... Text pra fazer a pontuação, Image pra fazer a frutinha.
    
    for (var i=0; i < snake.length; i++) // NEM FODENDO QUE EU ESCREVI LENGHT... MERDA
        {
            ctx.fillStyle = (i==0)?"#b79ddd":"#bacff4"; // estudar sobre if ternário.
            ctx.fillRect(snake[i].x,snake[i].y,box,box);
            ctx.strokeStyle = "#fff"; // vou copiar a ideia do Mettal, de deixar da mesma cor do fundo
            ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        }
    
    //LENGTH, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length, length. length. length; 
    
    var snakeX = snake[0].x;
    var snakeY = snake[0].y; // a cabeça entrou, todo resto vai. 
    
    if (d=="UP")    {snakeY -= box;} //W    // snakeX = snakeX - box; amadorismo.
    if (d=="LEFT")  {snakeX -= box;} //A    // não precisa das chaves na mesma linha;  
    if (d=="DOWN")  {snakeY += box;} //S
    if (d=="RIGHT") {snakeX += box;} //D
  
    // se a sua cabeça tocar na comida.
    
    if (snakeX == food.x && snakeY == food.y)
        {
            document.getElementById("point").play();
            
            ctx2.clearRect(0,0,pontos.width,pontos.height);
            
            food = 
                {
                    x: Math.floor(Math.random()*telinha+1)*box, 
                    y: Math.floor(Math.random()*telinha+1)*box
                }
            
            pontinhos++;
            //console.log(pontinhos);
            //document.getElementById("pontos").innerHTML = pontinhos; // tá, é pra fazer por DrawText
            
            var pontuacao = "SCORE:                                                         ";
            
            ctx2.fillStyle = "#ff0"; // mudei do roxo pro amarelo.
            //ctx2.textAlign = "center";
            ctx2.font = "19pt Comic Sans MS";
            ctx2.fillText(pontuacao+pontinhos, 20, 33);
            ctx2.strokeText(pontuacao+pontinhos, 20, 33);
            
        }
    
    else if ((snakeX == rat.x || snakeX == rat.x+20) && (snakeY == rat.y || snakeY == rat.y +20 ))
        {
            
            document.getElementById("crunchcrunch").play();
            
            ctx2.clearRect(0,0,pontos.width,pontos.height);
            
            rat = 
                {
                    x: -sizerat,
                    y: sizerat
                }
            
            pontinhos+=5;
            //console.log(pontinhos);
            //document.getElementById("pontos").innerHTML = pontinhos; // tá, é pra fazer por DrawText
            
            var pontuacao = "SCORE:                                                         ";
            
            ctx2.fillStyle = "#ff0"; // foda...
            //ctx2.textAlign = "center";
            ctx2.font = "19pt Comic Sans MS";
            ctx2.fillText(pontuacao+pontinhos, 20, 33);
            ctx2.strokeText(pontuacao+pontinhos, 20, 33);
            
            clearInterval(ratito);
            clearInterval(ratatito);
            veemRatinho();
        }
    
    else
        {
            snake.pop(); // Apagar a posição antiga..... 
            // The pop() method removes the last element of an array, and returns that element. Note: This method changes the length of an array.
        }
    
    var newHead = 
        {
            x: snakeX,
            y: snakeY
        }
    
    if (snakeX < 0 || snakeX > cvs.width-box || // se o eixo X tocou a caixinha
        snakeY < 0 || snakeY > cvs.height-box || // se o snakeY é menor que zero ou maior que a altura da caixa.
       collision(newHead,snake))
        {
            document.getElementById("fail").play();
            
            clearInterval(game); // desliga o jogo.
            ctx.fillStyle = "#fff";
            ctx.textAlign = "center";
            ctx.font = "72pt Impact";
            ctx.fillText("SSSSSORRY...", cvs.width/2, cvs.height/2);
            ctx.font = "11pt Impact";
            ctx.fillStyle = "#00f";
            ctx.fillText("(Press >>F5<< to try again! Please like us on fb.com/BlueLightningStudio)", cvs.width/2+8, cvs.height/2+30)
        }
    
    snake.unshift(newHead); //ela acrescenta o newHead no começo do vetor.
    // O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.
    
    //The unshift() method adds new items to the beginning of an array, and returns the new length. Note: This method changes the length of an array.
} 

var game = setInterval(draw,velocidade);

function collision(head,array)
{
    for(i=0; i< array.length; i++)
        {
            if(head.x == array[i].x && head.y == array[i].y){return true;}
            
        }
    return false;
        
    
}

// Faça aparecer a cada 3 segundos um rato na tela para a 
// cobra comer, ele deve ficar visível somente por 4
// segundos, se o jogador pegar deve ganhar 5 pontos

// As variáveis do Rato tão aqui embaixo... enfim.

var sizerat = 40;
var telao = (w / sizerat)-1;
var rat = 
    {
        x: -sizerat, 
        y: -sizerat
    }


veemRatinho();

function veemRatinho()
{
ratito = setTimeout(function(){
    
    rat = 
    {
        x: Math.floor(Math.random()*telao)*sizerat, 
        y: Math.floor(Math.random()*telao)*sizerat
    }
    
    ratatito = setTimeout(vaaiRatinho,simbora_ratin);
    
    function vaaiRatinho()
    {
        rat = 
        {
            x: -sizerat, 
            y: -sizerat
        }
        clearInterval(ratatito);
        veemRatinho();
    }

    
    
},aparece_ratin);
}
