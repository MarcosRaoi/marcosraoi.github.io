var canvas = document.getElementById("antgame"); // Pega a referência do Canvas.
var context = canvas.getContext("2d"); // Pega, do Canvas, o contexto 2D para trabalhar nele.

var monstro = new Image();monstro.src = "imgs/monster_3.png"; // cria a imagem do monstro.
var monstroMorto = new Image();monstroMorto.src = "imgs/monster1_2.png"; // sprite do Monstro Morto.

// o tamanho da formiga, que por enquanto está sendo referida como Ponto, por ser a Pontuação, vou por
// ao invés de ponto, vou colocar monster... Vai ser um monstro, sei lá. 

var velocidademonstro = 1; // Quanto menor = mais rápido. É em miliseconds.
var fps = 2; // Os dois trabalham na velocidade, esse aqui é o quanto aumenta a pintura, quantos frames "pula".
var cadamonstro = 2000; // Cada monstro chamado a tantos segundos.

var monstro_width = 72; // ele não tá pegando o monstro.width, isso tá me incomodando, to chateado. krs
var monstro_height = 96; // altura do monstro.

var posicaoX = Math.round(Math.random()*(canvas.width-monstro_width)); // Posição onde o Monstro nasce.

var resolucao = {x:window.innerWidth,y:window.innerHeight};
var tamanhodoJogo = {x:360,y:640};
var margem = {x:((resolucao.x - tamanhodoJogo.x) / 2) - 2,
              y:((resolucao.y - tamanhodoJogo.y) / 2) - 2}

// se a pessoa muda durante o jogo, digo, o tamanho da tela, ela buga... Afinal só pega no começo do script.

// isso aqui eu vou usar no clique /\ ;

var score = 0;
var posX;
var posY;

var pontuarUmaVez = 1;

//var pontuacao = ""; // TINHA SCORE escrito, mas tirei.
var corscore = "#fff";
var fontescore = "40pt Georgia";

var espreme = new Audio(); espreme.src = "sounds/espreme.mp3";

// esses dois, by Mettal lindo <3 o cara é bom
var fundo = new Audio(); fundo.src = "sounds/Jogo.mp3";fundo.loop = true;
var fail = new Audio(); fail.src = "sounds/fail.mpeg";

// Depois vamos trocar as artes, música de fundo etc... É isto. Mettalzão vai fazer uma trilha absurda, to ligado xD
// Vou fazer a arte etc etc pixel art na veia... Acho que dá tempo :D <3 


window.addEventListener("load", function(){
    
    window.addEventListener("click", tocaMusica);
    
    function tocaMusica()
    {
        fundo.play();
    }
    
    context.fillStyle = corscore;
    context.font = fontescore;
    context.fillText(score, 300, 50);
    
    var posicaoY = 0; // cria uma variável pra começar onde ele nasce. Do começo da tela, 0, até o final. 
    
    game = setInterval(vemMonstro,cadamonstro); // Chama um monstro na tela acada 1 segundo = 1000 miliseconds.
    
    function vemMonstro() // função, em tese, pra printar o monstro andando pela tela.
    {
        pontuarUmaVez = 1;
        
        aparicao = setInterval(function(){

            context.clearRect(0,0,canvas.width,canvas.height);
            context.drawImage(monstro,posicaoX,posicaoY,monstro_width,monstro_height);
            posicaoY+= fps;
            
            context.fillStyle = corscore;
            context.font = fontescore;
            context.fillText(score, 300, 50);
            
            //console.log("O i é igual a "+i);
            //console.log("O fps é igual a "+fps);
            
            canvas.onclick = xecaClique;
            
            if (posicaoY >= canvas.height + fps)
                {
                    clearInterval(aparicao);
                    posicaoY = 0;
                    score--;
                    fail.play();
                }
            
 
        },velocidademonstro);
        
        
        posicaoY=0;
        posicaoX = Math.round(Math.random()*(canvas.width-monstro_width));

        
        
    
    }
    
    document.addEventListener("keydown",function(){
        
        let tecla = event.keyCode;
        
        if (tecla == 80)
            {
                alert("Jogo Pausado. Dependendo de Onde pausar o Jogo, irá bugá-lo. Até sair da tela dá umas bugadas nele, sinto muito... Aperte Enter / ou o Ok para voltar ao jogo.");
            }
    });
    
    function xecaClique(event)
    {
        posX = posicaoX + margem.x;
        posY = posicaoY + margem.y;
        
        
        if (((event.clientX >= posX) && (event.clientX <= posX + monstro_width)) &&
            ((event.clientY >= posY) && (event.clientY <= posY + monstro_height)))
            {
                //console.log("Acertei o monstro");
                context.clearRect(0,0,canvas.width, canvas.height);
                if(pontuarUmaVez == 1)
                {
                    score++;          // aumenta a pontuação.
                    pontuarUmaVez--; // diminui a variável que permite só pontuar uma vez, pro usuário não ficar clicando.
                    espreme.play(); // toca o som de espremer
                    clearInterval(aparicao); // desaparece com o dito cujo
                    context.drawImage(monstroMorto,posicaoX,posicaoY,monstro_width,monstro_height);
                }
                
            }
        
        context.fillStyle = corscore;
        context.font = fontescore;
        context.fillText(score, 300, 50);
        
        //console.log("O clique do X é: "+event.clientX);
        //console.log("O clique do Y é: "+event.clientY);
    }
    
    //Borda 1 = x:778, y:147
    //Borda 2 = x:1139, y:147
    //Borda 3 = x:778, y:788
    //Borda 4 = x:1139, y:788 
    
    // só pra ter uma ideia, entretanto acho que a função calculará corretamente.
    
});