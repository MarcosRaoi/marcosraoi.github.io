const buttonTag = "button";
const clickFunction = "click";
const wordSortedDivID = "#letras_palavra";
const buttonClassRight = "botao_certo";
const buttonClassWrong = "botao_errado";
const krustyImgID = "#personagem";
const srcAttributeHTML = "src";
const krustyPathPrefix = "imagens/krusty";
const pngFormat = ".png";
const disabledButtonAttribute = "disabled";
const resultDivID = "#fim";
const messageWin = "Parabéns!!!!!!! Você ganhou! :D<br> Pressione F5";
const messageLoose = "GAME OVER!<br>Pressione F5 para recomeçar :)";
const displayPropertyCSS = "display";
const displayBlockCSS = "block";
const krustyDeadPath = "imagens/krusty7.png";
const blankSpace = " ";
const nonBreakingSpace = "&nbsp";
const nonBreakingSpaceDiv = `<div>${nonBreakingSpace}</div>`;
const mysteriousChar = "=";
const mysteriousCharDiv = `<div>${mysteriousChar}</div>`;

let palavras = [
    "VITAMINATOR", "ALEATORIUM", "WHERE IS MY COXINHA",
    "POKEMON", "TERRARIA", "MINECRAFT", "BRAWL STARS",
    "LEAGUE OF LEGENDS", "BROTHERS A TALE OF TWO SONS",
    "ROGUE LEGACY", "NEOPETS", "RAGNAROK", "DONT STARVE",
    "RUN SACKBOY RUN", "CLASH OF CLANS", "HAY DAY",
    "CODYCROSS", "STARDEW VALLEY", "HERO FACTORY",
    "YOUR CREATURE RANCHER", "ROMA BINGO"
];
// Vetor de palavras

let pos_palavra_sorteada;   // posição da palavra sorte
let botoes_letras;
let parteForca = 0;         // quantidade de erros que pode ter na forca. 
let quantLetras;

function init() {
    botoes_letras = $(buttonTag);
    for (let i = 0; i < botoes_letras.length; i++) {
        botoes_letras[i].addEventListener(clickFunction, function () {
            verificaJogada($(this).index());
        });
    }
    sorteiaPalavra();
}

// A = 0 ; B = 1 ... Z = 25 //
function verificaJogada(pos) {
    //console.log(pos);

    if (parteForca <= 6) {
        let achou = false;
        let div_letras = $(`${wordSortedDivID} div`);

        for (let i = 0; i < palavras[pos_palavra_sorteada].length; i++) {
            if (palavras[pos_palavra_sorteada].charAt(i) == $(botoes_letras[pos]).html()) {
                $(div_letras[i]).html($(botoes_letras[pos]).html());
                quantLetras--;
                achou = true;
            }
        }

        if (achou) {
            $(botoes_letras[pos]).addClass(buttonClassRight);
        }
        else {
            parteForca++;
            $(krustyImgID).attr(srcAttributeHTML, krustyPathPrefix + parteForca + pngFormat);
            $(botoes_letras[pos]).addClass(buttonClassWrong);
        }

        $(botoes_letras[pos]).attr(disabledButtonAttribute, true);

        if (quantLetras == 0) {
            $(resultDivID).html(messageWin);
            $(resultDivID).css(displayPropertyCSS, displayBlockCSS);
            desabilitarBotoes();
        }
    }

    else {
        $(krustyImgID).attr(srcAttributeHTML, krustyDeadPath);  // document.getElementByID("personagem").src , nesse caso. 
        $(resultDivID).html(messageLoose);
        $(resultDivID).css(displayPropertyCSS, displayBlockCSS);
        desabilitarBotoes();
    }
}



function sorteiaPalavra() {
    pos_palavra_sorteada = Math.round(Math.random() * (palavras.length - 1));
    quantLetras = palavras[pos_palavra_sorteada].length;

    let palavraSorteada = palavras[pos_palavra_sorteada];
    console.log(palavraSorteada);
    let contador = 0;

    for (let i = 0; i < quantLetras; i++) {
        if (palavraSorteada[i] != blankSpace) {
            $(wordSortedDivID).append(mysteriousCharDiv);
        } else {
            $(wordSortedDivID).append(nonBreakingSpaceDiv);
            //quantLetras--;
            //console.log("quantidade de letras", quantLetras);
            contador++;
        }
    }
    
    quantLetras -= contador; //console.log("quantidade", quantLetras);
}

function desabilitarBotoes() {
    for (let i = 0; i < botoes_letras.length; i++) {
        $(botoes_letras[i]).attr(disabledButtonAttribute, true); // attr = atributo. Basicamente coloca como disabled os botões. tro that
    }
}