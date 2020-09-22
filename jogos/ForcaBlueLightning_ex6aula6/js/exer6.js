var palavras = ["VITAMINATOR","ALEATORIUM","WHEREISMYCOXINHA","POKEMON","TERRARIA","MINECRAFT","BRAWLSTARS","LOL","BROTHERS","ROGUELEGACY","NEOPETS","RAGNAROK","DONTSTARVE","RUNSACKBOYRUN","CLASHOFCLANS","HAYDAY","CODYCROSS","STARDEWVALLEY"]   
                            // Vetor de palavras

var pos_palavra_sorteada;                            // posição da palavra sorte
var botoes_letras;
var parteForca=0;                                    // quantidade de erros que pode ter na forca. 
var quantLetras;

function init(){   
   botoes_letras = $("button");
   for (var i=0;i<botoes_letras.length;i++){
        botoes_letras[i].addEventListener("click",function(){
           verificaJogada($(this).index());            
        });
    }
    sorteiaPalavra();
}

// A = 0 ; B = 1 ... Z = 25 //

function verificaJogada(pos){
    
    //console.log(pos);
    
    if(parteForca <=6)
        {
            var achou=false;
            var div_letras = $("#letras_palavra div");
            
            for(var i=0; i < palavras[pos_palavra_sorteada].length ; i++)
            {
                if( palavras[pos_palavra_sorteada].charAt(i) == $(botoes_letras[pos]).html() )
                    {
                        $(div_letras[i]).html($(botoes_letras[pos]).html());
                        quantLetras--;
                        achou=true;
                    }
                    
            }
            
            if (achou)
                {
                    $(botoes_letras[pos]).addClass("botao_certo");
                }
            else
                {
                    parteForca++;
                    $("#personagem").attr("src","imagens/krusty"+parteForca+".png");
                    $(botoes_letras[pos]).addClass("botao_errado");
                }
            
            $(botoes_letras[pos]).attr("disabled",true);
            
            if (quantLetras == 0)
                {
                    $("#fim").html("Parabéns!!!!!!! Você ganhou! :D<br> Pressione F5");
                    $("#fim").css("display","block");
                    desabilitarBotoes();
                }
        }
    
    else
        {
            $("#personagem").attr("src","imagens/krusty7.png");  // document.getElementByID("personagem").src , nesse caso. 
            $("#fim").html("GAME OVER!<br>Pressione F5 para recomeçar :)");
            $("#fim").css("display","block");
            desabilitarBotoes();
        }
    
    
    
}



function sorteiaPalavra(){
    pos_palavra_sorteada = Math.round(Math.random()*(palavras.length-1));
    quantLetras = palavras[pos_palavra_sorteada].length;
    
    //console.log(palavras[pos_palavra_sorteada])
    
	for (var i=0;i<quantLetras;i++){
		$("#letras_palavra").append("<div>=</div>");
	}
}

function desabilitarBotoes(){
    for (var i=0;i<botoes_letras.length;i++){
       $(botoes_letras[i]).attr("disabled",true); // attr = atributo. Basicamente coloca como disabled os botões. tro that
    }
}