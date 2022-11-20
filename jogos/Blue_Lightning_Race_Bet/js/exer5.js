var carroCorrida = [];
var game;

function personagem(nome, imagem, velocidade) {
    this.nome = nome;
    this.imagem = imagem;
    this.velocidade = velocidade;
}

function setPersonagem() {
    for (var i = 0; i < 4; i++) {
        carroCorrida[i] = new personagem("carro" + (i + 1), "carro" + (i + 1), randomize(10, 20));
    }
}

function randomize(min, max) {
    return min + Math.round(Math.random() * (max - min));
}

function mudarImagem() {
    for (var i = 0; i < 4; i++) {
        document.getElementById(carroCorrida[i].nome).src = "images/" + carroCorrida[i].imagem + ".gif";
        document.getElementById(carroCorrida[i].nome).style.left = "0px";
    }
}

var aposta = document.getElementsByName("aposta");


window.addEventListener("load", function () {



    setPersonagem();
    var button = document.getElementById("iniciarBotao");

    button.addEventListener("click", function () {

        mudarImagem();
        game = setInterval(moveImagem, 100);


    });


});

function moveImagem() {
    for (var i = 0; i < 4; i++) {
        var carro = document.getElementById(carroCorrida[i].nome);
        carro.style.left = parseInt(carro.style.left.substr(0, carro.style.left.indexOf("px"))) + carroCorrida[i].velocidade + "px";

        if (parseInt(carro.style.left.substr(0, carro.style.left.indexOf("px"))) >= 660) {
            fim(i);
        }

    }
}

function checarAposta(aposta) {
    for (i = 0; i < 4; i++) {
        if (aposta[i].checked) {
            console.log("Você apostou no", i + 1);
            return i;
        }
    }
}

function fim(vencedor) {
    clearInterval(game);
    for (i = 0; i < 4; i++) {
        //mudar imagem
        if (i == vencedor) {
            document.getElementById("vencedor" + (i + 1)).innerHTML = "<div class='vencedor'><img src='images/trofeu.png'></div>";
        }
    }

    console.log("O vencedor foi o", vencedor + 1);

    var apostador = document.getElementById("apostador");

    if (checarAposta(aposta) == vencedor) {
        //alert("Você acertou a aposta.");
        apostador.innerHTML = "VOCÊ ACERTOU!";
    }
    else {
        apostador.innerHTML = "VOCÊ ERROU! :(";
    }

}