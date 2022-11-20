// TODO: Fazer uma feature de Highscore... enfim, tava bugadinho, (15:47, 20/11/2022) o F5, tava bugado o alert de game over, arrumei e bó subir.

var canvas = document.getElementById("canvas");
var contexto = canvas.getContext("2d");

// vamo copiar os comentário do video tbm, traduzido:
// carregar as imagens:

var passaro = new Image();
var fundo = new Image();
var chao = new Image();
var canoNorte = new Image();
var canoSul = new Image();

passaro.src = "imagens/passaro.png";
fundo.src = "imagens/fundo.png";
chao.src = "imagens/chao.png";
canoNorte.src = "imagens/canoNorte.png";
canoSul.src = "imagens/canoSul.png";

var gameOver = false;

var passaroX = 10; // auto explicativo... 
var passaroY = 150; // no video tá bX, bY, mas melhor assim

window.addEventListener("load", function () {
    gameOver = false;
    // vamo lá, algumas variáveis, constante que contempla o Gap / altura do Cano Sul, o Gap é onde vai passar o Passarinho ^^"

    var abertura = 85; // o Gap por onde o pássaro vai passar
    var constante = canoNorte.height + abertura; // a Constante...
    // o que isso quer dizer: Altura do cano do norte... em Y
    // mais a abertura, posiciona o cano do sul no local correto.

    // detalhe... Ele só pega o canoNorte.height depois de carregar a página pelo visto, porque puta que me pariu... enfim.

    function resetPassaro() {
        passaroX = 10; // auto explicativo... 
        passaroY = 150; // no video tá bX, bY, mas melhor assim
    }

    var gravidade = 1.5;

    // essa eu criei, não tem no vídeo: Distância entre os canos:

    var distanciaEntreCanos = 75;
    var movimentoPassaro = 25

    // vamo de points

    var pontuacao = 0;
    var corFonte = "#000";
    var fonte = "20px Verdana";


    // tá, agora vamo de áudios! :D 

    var voo = new Audio();
    var ponto = new Audio();

    voo.src = "sons/voo.mp3";
    ponto.src = "sons/ponto.mp3";


    // quando o jogador usar uma tecla. ... Mas também preciso fazer do clique
    // pois o clique é o que o enunciado pede.

    document.addEventListener("keydown", movePraCima);
    document.addEventListener("click", movePraCima); // pronto, clique também. rs

    function movePraCima() {
        passaroY -= movimentoPassaro;
        voo.play();
    }

    // coordenadas dos Canos (obstáculos, depois mudo a temática)

    var cano = [];

    cano[0] =
    {
        x: canvas.width,
        y: 0 // ué, no vídeo ele fecha /\ com ";", e sei lá, estranho..
    }

    // desenhar as imagens, bora lá rerere :D até aqui eu sei tudo.
    // só não sei a função que ele vai usar que é a 
    // requestAnimationFrame ... mas parece que funciona tipo uma
    // setInterval da vida: 
    // http://www.tidbits.com.br/como-usar-requestanimationframe-ao-inves-de-setinterval

    // enfim... vamo lá

    function desenhar() {
        contexto.drawImage(fundo, 0, 0); // desenhando o fundo apartir do 0,0.
        // para tomar toda a tela, obviamente...

        for (var i = 0; i < cano.length; i++)
        // vamo iniciar esses canos aí, rsrsrs
        {
            // tá, o x dele vai ser a coordenada pega no vetor de canos. 
            // o x do Norte é igual do Sul, o Y é a constante, 
            // que soma o de cima, mais o espacinho pro pássaro passar! ^^' 
            contexto.drawImage(canoNorte, cano[i].x, cano[i].y);
            contexto.drawImage(canoSul, cano[i].x, cano[i].y + constante);

            cano[i].x--; // isso aqui é pra mover o cano pra esquerda...
            // afinal, quanto menor o X dele, mais perto do left 0 ele está <<<
            // e aí quando atingir certo ponto, eu tenho que criar outro cano.

            if (cano[i].x == distanciaEntreCanos) // push para criar um outro cano novo no vetor.
            {
                cano.push(
                    {
                        x: canvas.width,
                        y: Math.floor(Math.random() * canoNorte.height) - canoNorte.height // aqui ele dá random nas novas alturas
                        // dos canos, entre 0 e altura do cano norte... 
                        // se o random assumir 0 = Ele cria o cano lá em cimão...
                        // Se o random assumir 1, ele cria o cano no 0...
                        // Afinal Altura do Cano Norte - Altura do cano norte = 0
                    });
            }

            // Tá, agora a parte "difícil", detectar colisões:

            //bool conditions collide
            // Pipe Collide
            var collideX = passaroX + passaro.width >= cano[i].x && passaroX <= cano[i].x + canoNorte.width;
            var collideY = (passaroY <= cano[i].y + canoNorte.height || passaroY + passaro.height >= cano[i].y + constante);
            var collideGround = passaroY + passaro.height >= canvas.height - chao.height;

            if ((collideX && collideY || collideGround) && !gameOver) {
                gameOver = true;
                resetPassaro();
                location.reload(); // hmm, se colidir, dá F5. Recarrega a página.
                alert("GAME OVER! :( \nVocê fez: " + pontuacao + " pontos! :D");
                return
            }

            // tá, vamo colocar a pontuação agora ^^' 

            if (cano[i].x == 5) // 5 pelo visto é onde encosta perto da esquerda <
            {
                pontuacao++;
                ponto.play(); // essa é fácil ein rs.
            }

        }

        contexto.drawImage(chao, 0, canvas.height - chao.height);
        // desenhando o chao, e o y dele vai ser o tamanho do canvas,
        // menos o tamanho dele, obviamente, para ficar na parte de baixo.
        // lembrando que o Y começa a contar a partir de cima.

        contexto.drawImage(passaro, passaroX, passaroY);

        passaroY += gravidade; // o Y do passaro "caindo" com a gravidade.
        // quanto maior o valor de Y, mais baixo ele está do topo...
        // por isso o passaroY vai incrementando com a gravidade.

        // aqui pintamos a pontuação... As variáveis tão lá em cima
        contexto.fillStyle = corFonte;
        contexto.font = fonte;
        contexto.fillText("Score: " + pontuacao, 10, canvas.height - 20);
        // aqui é pra pintar a pontuação lá embaixinho ^^' 

        requestAnimationFrame(desenhar); // parece que é uma função
        // bem mais "melhorada" para esse tipo de coisa, do que a
        // setInterval, ainda vou ler o artigo.

    }

    desenhar();
});
