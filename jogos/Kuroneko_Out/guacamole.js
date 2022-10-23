var persoX = [51,80,285,250,447,397,639,651]; // Vetor com as 8 posições
var persoY = [109,353,2,221,184,420,60,382]; // X e Y dos possíveis locais de Hamtaro e cia.

// a wild
var hamtaroAppears = 1000;
var hamtaroDisappears = 1000;

//vamos comentar as coisitas... e tá foda esse bang do áudio de fundo einrsrsrs
//console.log("Inner Width:",window.innerWidth);
//console.log("Inner Height:",window.innerHeight);

// opa opa, descobri os comandos rsrsrs ^^'
var resolucao = {x:window.innerWidth,y:window.innerHeight} // antes tava 1920x1080.

var tamanhodoJogo = {x:800,y:600} // E o Y do jogo, no Google Chrome, na minha resolução, não pegando tanto na barra de tarefas lá embaixo, deu 937 a minha página... Só que provavelmente isso muda no Firefox, como deu pra ver, onde o Chrome o tamanho é 101 a parte ali de cima, e do Firefox é só 71 acho... enfim, tou fudido. O X é igual o tamanho da resolução, acredito eu, se não tiver barra de rolagem, mas e o Y velho?? tomei no cu.    937 - 600 = 337 , que dividido por dois dá 168,5, o valor que eu achei da margem. 

// o valor mais baixo que eu clico ali foi: 558 (560 - 2, de boa \/) e 166. 

// não vou precisar mais disso:
    //var tamanhoQueNavegadorCome = 103;
    //var tamanhoQueSOCome = 39;

// essa margem se refere à margem superior... Ao ponto clicado no canto superior esquerdo.
var margem = {x:((resolucao.x - tamanhodoJogo.x) / 2) - 2,
              y:((resolucao.y - tamanhodoJogo.y) / 2) - 2} // porra deu 167, n 166 X_X
                                                            // esse -2 são os dois pixel da borda.
                // troquei pra -3, mesmo sendo estranho, mas de alguma forma meu print fica do tamanho de 1919x1079, sei lá.
                // voltamos pra -2, mas vamo lá né... enfim... essas margem estranha ai, tomar no cu.  // voltamo pra -3. enfim.
                // e finalmente depois de descobrir o innerWidth, voltamos pra -2 ! Xd, agora tá certo. 11:05, 13/05/19

// Coordenadas dos personagens... Seja o Gato, seja o Hamtaro.

canvas = document.getElementById("guacamole");
ctx = canvas.getContext("2d");

var hamtaro = new Image; hamtaro.src = "images/hamtaro_pixelart.png";
var kuroneko = new Image; kuroneko.src = "images/kuroneko_pixelart.png";

var out;

var contagemKuroneko = 0;
var contagemHamtaro = 0;

//////////////////// PONTUAÇÃO ////////////////////

var score = 0;
var pontuacao = "Score: ";
var corscore = "#fff";
var fontescore = "19pt Arial";

var pontuarUmaVez = 1;

//////////////////// ÁUDIO ////////////////////

//var yeah = document.getElementById("yeah");

window.addEventListener("load",function(){
        
    var holeOut = 0; // The number of the especific Hole who Hamtaro or Kuroneko get out.
    var holes = 8 - 1; // The number of holes presented in the game. (Minus 0'postion)
    // it get from: persoX[0];persoY[0] to persoX[8-1];persoY[7];
    
    function randomhole(hole) // Hole #0 to Hole #7. Eight holes. // Tá, fodasse, acho que vou voltar pro português // Depois desse minus 0 position ae, acho que vou voltar pro inglÊs... N sei agora, enfim, foadass....
    {
        hole = Math.round(Math.random()*holes);
        return hole;
    }
    

ctx.fillStyle = corscore;
ctx.font = fontescore;
ctx.fillText(pontuacao+score, 10, 33);
//ctx.strokeText(pontuacao+score, 20, 33);
    
    var game = setInterval(function(){
        
        document.getElementById("abertura").play();
        
        pontuarUmaVez = 1;

        holeOut = randomhole(holeOut);
        
        out = Math.round(Math.random()*2);if (out == 0){out = "Hamtaro";}else {out = "Kuroneko";}
        
        if(out == "Kuroneko"){
            
            ctx.drawImage(kuroneko,persoX[holeOut]-50,persoY[holeOut]-1,kuroneko.width, kuroneko.height);
            //contagemKuroneko++; console.log("Kuroneko apareceu:",contagemKuroneko,"vezes");
            
            canvas.onclick = checaCliqueKuroneko;
            
        
        }
        else if(out == "Hamtaro"){
            
            ctx.drawImage(hamtaro,persoX[holeOut],persoY[holeOut],hamtaro.width, hamtaro.height);
            //contagemHamtaro++; console.log("Já Hamtaro apareceu:",contagemHamtaro,"vezes");
            
            canvas.onclick = checaCliqueHamtaro;
        
        }
        
        
        
                
        var out = setTimeout(function(){ctx.clearRect(0,0,canvas.width, canvas.height);ctx.fillStyle = corscore;ctx.font = fontescore;ctx.fillText(pontuacao+score, 10, 33); pontuarUmaVez--; },hamtaroDisappears); // eu não sei escrever Timeout, eu insisto no TimeOut, VAI TOMAR NO CU!!! ^^'
        
        
        function checaCliqueKuroneko(event)
        {
            if (holeOut == 0) // x + 2 , y + 109
            {
                var buraco0 = {x:margem.x + 2, // X do Buraco 0 rsrs, holeOut 0, buraco que saiu, tec. etc. 
                               y:margem.y + 109 } // Ele está a +109 pixels da borda / margem que é 166. 
                
                checkHoleK(buraco0);
            }
            
            if (holeOut == 1) // x + 31 , y + 353
            {
                var buraco1 = {x:margem.x + 31, 
                               y:margem.y + 353}  
                
                checkHoleK(buraco1);
            }
            
            if (holeOut == 2) // x + 236 , y + 2
            {
                var buraco2 = {x:margem.x + 236, 
                               y:margem.y + 2}  
                
                checkHoleK(buraco2);          
            }
            
            if (holeOut == 3) // x + 201 , y + 221
            {
                var buraco3 = {x:margem.x + 201, 
                               y:margem.y + 221}  
                
                checkHoleK(buraco3);
            }
            
            if (holeOut == 4){var buraco4 = {x:margem.x + 398,y:margem.y + 184};checkHoleK(buraco4);}
            if (holeOut == 5){var buraco5 = {x:margem.x + 348,y:margem.y + 420};checkHoleK(buraco5);}
            if (holeOut == 6){var buraco6 = {x:margem.x + 590,y:margem.y + 60};checkHoleK(buraco6);}
            if (holeOut == 7){var buraco7 = {x:margem.x + 602,y:margem.y + 382};checkHoleK(buraco7);}
            
            // eu tinha os valores das coordenadas lá em cima, eu podia ter feito cálculos em cima deles, mas fodass.
            //var persoX = [51,80,285,250,447,397,639,651]; // Vetor com as 8 posições
            //var persoY = [109,353,2,221,184,420,60,382]; // X e Y dos possíveis locais de Hamtaro e cia.
            
            function checkHoleK(buraco) // Comecei fazendo um por um, depois pensei em fazer a função xd.
            {                
                var hole = {x:buraco.x, 
                           y:buraco.y}  
                
                if ((event.clientX >= (hole.x) && event.clientX <= ((kuroneko.width + hole.x) - 1)) 
                    && (event.clientY >= (hole.y) && event.clientY <= ((kuroneko.height + hole.y) -1 ))) 
                {
                    //console.log("Acertei o Gato!");
                    ctx.clearRect(0,0,canvas.width, canvas.height);
                    if(pontuarUmaVez == 1)
                    {score++; pontuarUmaVez--; document.getElementById("yeah").play();}
                    
                }
                else 
                { 
                    //console.log("Errei o Gato!");
                }
                
                ctx.fillStyle = corscore;
                ctx.font = fontescore;
                ctx.fillText(pontuacao+score, 10, 33);
                
            } // Só não sei se vou usá-la no do Hamtaro, pq os valores são diferentes... e o que fará tbm, sei lá.
            // aliás, nem pode ser a mesma... tcho colocar checkHoleK de Kuroneko, e H de Hamtaro. ^^', pq tem o kuroneko.width etc
            // acho que dá pra passar a image tbm, mas sei lá né mano... Vou ver.  Ah,  preguiça né. 
    
    
    
            //console.log("O X do clique no Kuroneko é:",event.clientX);
            //console.log("O Y do clique no Kuroneko é:",event.clientY);
            }

        function checaCliqueHamtaro(event)
        {                                       //todo valor vai ser +50 e +1 no outro. 
            if (holeOut == 0){var buraco0 = {x:margem.x + 52,y:margem.y + 110};checkHoleH(buraco0);}
            if (holeOut == 1){var buraco1 = {x:margem.x + 81,y:margem.y + 354};checkHoleH(buraco1);}
            if (holeOut == 2){var buraco2 = {x:margem.x + 286,y:margem.y + 3};checkHoleH(buraco2);}
            if (holeOut == 3){var buraco3 = {x:margem.x + 251,y:margem.y + 222};checkHoleH(buraco3);}
            if (holeOut == 4){var buraco4 = {x:margem.x + 448,y:margem.y + 185};checkHoleH(buraco4);}
            if (holeOut == 5){var buraco5 = {x:margem.x + 398,y:margem.y + 421};checkHoleH(buraco5);}
            if (holeOut == 6){var buraco6 = {x:margem.x + 640,y:margem.y + 61};checkHoleH(buraco6);}
            if (holeOut == 7){var buraco7 = {x:margem.x + 652,y:margem.y + 383};checkHoleH(buraco7);}
            
            // eu tinha os valores das coordenadas lá em cima, eu podia ter feito cálculos em cima deles, mas fodass.
            //var persoX = [51,80,285,250,447,397,639,651]; // Vetor com as 8 posições
            //var persoY = [109,353,2,221,184,420,60,382]; // X e Y dos possíveis locais de Hamtaro e cia.
            
            // ALA XD CARALHO TU É MTO BURRÃO MARCÃO RSRSRSRS ^^' , EEENFIM FODASSE.
            
            
            //console.log("Já o X do clique no Hamtaro é:",event.clientX);
            //console.log("Já o Y do clique no Hamtaro é:",event.clientY);
            
            function checkHoleH(buraco)
            {
                
               var hole = {x:buraco.x, 
                           y:buraco.y}  
                
                if ((event.clientX >= (hole.x) && event.clientX <= ((hamtaro.width + hole.x) - 1)) 
                    && (event.clientY >= (hole.y) && event.clientY <= ((hamtaro.height + hole.y) -1 ))) 
                {
                    //console.log("Ops, acertei o Hamtaro...");
                    ctx.clearRect(0,0,canvas.width, canvas.height);
                    if(pontuarUmaVez == 1)
                    {score--; pontuarUmaVez--; document.getElementById("oops").play();}
                }
                else 
                { 
                    //console.log("Errei o Hamtaro! Uffa.");
                }
                
                ctx.fillStyle = corscore;
                ctx.font = fontescore;
                ctx.fillText(pontuacao+score, 10, 33);
            }
        }
        
        
        
    },hamtaroAppears*2); // não só Hamtaro aliás, mas okay... rsrsrs. 
    
    
    // meu deus, um parto pra entender que o vetor ali em cima tava sem a sétima posição do persoY, SE FUDER!!! GRR
    
    
});