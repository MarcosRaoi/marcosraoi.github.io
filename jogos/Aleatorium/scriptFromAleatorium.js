window.addEventListener("load", function(){
    
    var resposta = Math.round(Math.random()*99); // Gera uma resposta aleatória de 0 a 99.
    
    /*var res = document.getElementById("resposta"); // Isso aqui apenas tá sendo usado como teste
    res.innerHTML = resposta;                      // Depois será comentado... Basicamente para eu ver a resposta.*/
    
    var visor1 = document.getElementById("visor1"); // Pega a referência do Visor1;
    var visor2 = document.getElementById("visor2"); // Pega a referência do Visor2;
    
    var reset = document.getElementById("resetar"); // Pega a referência do Botão Reset ( 00 ~ 99 );
    reset.addEventListener("click", function(){
        resposta = Math.round(Math.random()*99); // Reseta o valor aleatório de 0 a 99.
        
        /*res.innerHTML = resposta; // Depois vou comentar, só pra mostrar etc.*/
        
        visor1.innerHTML = ""; // Zera o Visor1;
        visor2.innerHTML = ""; // Zera o Visor2;    
    }); // As funções do Botão Resetar; [Entretanto estou pensando em tirar]
    
    var play = document.getElementById("jogar"); // Cria a referência do botão Play / Jogar. ( > );
    var numtentativas = document.getElementById("tentativas"); // Cria a referência do Visor de Tentativas;
          
    var um = document.getElementById("1"); // Bom, aqui é auto explicativo,
    var dois = document.getElementById("2");
    var tres = document.getElementById("3");
    var quatro = document.getElementById("4");
    var cinco = document.getElementById("5");
    var seis = document.getElementById("6");
    var sete = document.getElementById("7");
    var oito = document.getElementById("8");
    var nove = document.getElementById("9");
    var zero = document.getElementById("0"); // Pega a referência de todas as teclas númericas. 0 a 9.
    
    var chute = document.getElementById("chute"); // Chute ae... A área onde o jogador coloca o chute dele. <3
    
    var desligado = false; // O Gameboy do Aleatorium não está desligado. Isso é interação de apagar a tela.
    var visor3 = document.getElementById("tentativas"); // Referência pro visor 3, ao invés de numtentativas.

    botaoNumerico(); // Eu criei essa função pra ficar mais organizado os botões numéricos ^-^"
    function botaoNumerico(){
    
    um.addEventListener("click", function(){
        
        if (chute.value.length >= 2){return}
        chute.value += "1";
        
    });
    dois.addEventListener("click", function(){
        if (chute.value.length >= 2){return}
        chute.value += "2";
        
    });
    tres.addEventListener("click", function(){
        if (chute.value.length >= 2){return}
        chute.value += "3";
        
    });  
    quatro.addEventListener("click", function(){
        if (chute.value.length >= 2){return}
        chute.value += "4";
        
    });
    cinco.addEventListener("click", function(){
        if (chute.value.length >= 2){return}
        chute.value += "5";
        
    });
    seis.addEventListener("click", function(){if (chute.value.length >= 2){return} chute.value += "6";});
    sete.addEventListener("click", function(){if (chute.value.length >= 2){return} chute.value += "7";});
    oito.addEventListener("click", function(){if (chute.value.length >= 2){return} chute.value += "8";});
    nove.addEventListener("click", function(){if (chute.value.length >= 2){return} chute.value += "9";});
    zero.addEventListener("click", function(){if (chute.value.length > 1){return} chute.value += "0";});

   } // Além dela impedir que tenha mais que dois digitos o chute do jogador. 
    
    var acertou = false;
    
    function jogar()
    {
        // Isso daqui é apenas para voltar ao normal, caso a pessoa reinicie o jogo sem responder o Quer Jogar Novamente? //
        
        if (acertou)        // Famoso usuário Vândalo rs.
            {
                visor1.style.fontSize = "200pt";    // Volta o tamanho da fonte pro normal.
                visor1.style.lineHeight = "255px";  // Volta o tamanho da linha pro normal / padrão. 
                visor3.innerHTML = "";              // Pra resetar o número de tentativas... ^^'
                acertou = false;                    // E voltar o acertou a false... Bem simples aliás.
            }
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        if (chute.value == "") {return;} // Primeiro ele checa se está vazio o chute.
        
        var regras = document.getElementById("regras"); // O jogo começa, então as Regras desaparecem ^-^" 
        regras.style.display="none"; // tira a tela de Avisos Iniciais ao jogador. = Espero que ele tenha aprendido rs =
        
        var num = parseInt(chute.value); // Aí beleza, ele recebe o valor do chute. Entretanto...
        if (isNaN(num)) {return;} // Se não é um número, ele também ignora... Não sei se o Return tá usado correto, break...
        
        /*if (tecla == 78) {return;}*/ // Tentando resolver o problema do bug após zerar a primeira vez.
        
        numtentativas.innerHTML++; // Aumenta o Contador de Tentativas do Jogador ^^' Pq foi uma tentativa válida.
        
        if (desligado) // Se a tela tava desligada, após o cara não querer mais jogar, e mesmo assim ele for jogar.
            {
                visor1.style.backgroundColor = "#927801";
                visor2.style.backgroundColor = "#927801";
                visor3.style.backgroundColor = "#927801";
            } // Aí liga o visor novamente xd xd... Danadinho não queria jogar, e agora quer né? safado.
        
        testaNumero(num); // Aí ele testa o valor... o Valor do Chute do jogador.
        function testaNumero(x) // Essa função tem 100 linhas, não dá pra resumir em uma, sorry rs. Test the number.
        {
            
            if (x == resposta) // Se é igual, ou seja, jogador acertou.
                {
                    visor1.innerHTML = "✔"; // coloca o certinho na tela.
                    visor2.innerHTML = "ACERTOU!"; // Tinha um rostinho ":D", mas no Firefox ele quebra pra baixo.
                   
                    acertou = true; // Isso é só um check pra voltar ao normal.
                    resposta = Math.round(Math.random()*99); // Ah, eu já gero aqui um novo número. 
                    
                    setTimeout(function(){jogarNovamente();},2000); // Em 2 segundos ele coloca o Jogar Novamente.
                    return;
                }
            
            function jogarNovamente() // Essa função tinha que tar lá dentro né /\ mas fodasss..... "o certo"...
            {   
                visor1.style.fontSize = "19pt"; // Diminui a fonte para caber o texto abaixo.
                visor1.style.lineHeight = "27px"; // Diminui também o tamanho da linha né e talz.
                
                visor1.innerHTML = "<br>Quer jogar novamente? :)<br><br><br><br><br>(S)im / (N)ão"; 
                visor2.innerHTML = ""; // Pergunta se o jogador quer jogar novamente e zera o visor 2.    
                
                //keycode do S é 83, e o keycode do N é 78 ^-^' // Se o cara não digitar nada, fica lá ;) 
                
                
                document.addEventListener("keydown", pegaTecla); // ele pega a Tecla do usuário, 
                function pegaTecla()
                {
                    let tecla = event.keyCode; /*console.log(tecla);*/ 
                    
                    if (tecla == 83) {reiniciar();} // Se sim, ou melhor 'S', reiniciar. 
                    if (tecla == 78) {parar();} // Se não, ou melhor 'N', parar. São diferentes.
                }
                       
                function reiniciar(){
                /*var contagem=10;                  // Ia contar tipo aqueles Continue antigos...
                setInterval(function(){             // Entretanto deu muito problema, e tirei...
                    visor2.innerHTML = contagem;    // Afinal não é a essência da diversão do jogo. ^-^' 
                    --contagem;   
                }, 1000);*/ // Na boa, tirei a contagem, tá atrapalhando, tá em tempo de execução da máquina da pessoa
                            // o que significa que se o PC não tiver rodando lisinho, ele dá umas bugadas... Tirei.

                setTimeout(function(){location.reload();},1000); // reinicia a página em 1 segundo.
                } // Basicamente então ficou bem simples, só recarrega a página após 1sec.
                
                function parar() // Sério, essa foi treta de desenvolver kkk. Mas tá funcionando, eu espero.
                {
                    desligado = true; // Rererere, a sacadinha. Desliga o gameboy do Aleatorium! :D
                    
                    visor1.innerHTML = ""; // Tira a informação do Visor 1.
                    visor2.innerHTML = ""; // Tira a informação do Visor 2.
                    visor3.innerHTML = ""; // Antes tava numtentativas.innerHTML = "", mas criei a visor3. Nois.
                    resposta = Math.round(Math.random()*99); // Gera um número aleatório novo....
                                                             // vai que o cara quer jogar de novo né rsrsrs......
                    /*res.innerHTML = resposta;*/            // vai que ele muda de ideia rsrsr... Enfim...
                    // Todos esses res.innerHTML serão comentados, pois era pra mostrar a resposta na tela. Enfim.
                    visor1.style.fontSize = "200pt"; // Volta o tamanho da fonte pro normal.
                    visor1.style.lineHeight = "255px"; // Volta o tamanho da linha pro normal / padrão.
                    
                    document.removeEventListener("keydown", pegaTecla); // GRAÇAS A DEUS.... TIRA A PORRA DO EVENTLISTENER
                    // QUE TAVA CRIANDO A MERDA DO BUG DO HACK DO CARA APERTAR S E N, E ELES AINDA FUNCIONAREM GRRR, ENFIM.
                    visor1.style.backgroundColor = "#6a5001";           // na boa, isso demorou demais pra achar na net kkk.
                    visor2.style.backgroundColor = "#6a5001";
                    
                    // Aqui ele escurece os Visores, como se tivesse desligado. Tem um espacinho no código porque...
                    
                    visor3.style.backgroundColor = "#6a5001"; // Eu tive essa ideia depois rsrsrs, nois. :D
                    
                    return;
                }
                
            } // Essa parte foi a mais difícil, quando o cara acerta. Porque a jogabilidade em si ...
                                // ... que está abaixo, foi extremamente simples... Seloco... Demorei demais.
            
            if (x > resposta) // Se o chute do jogador é maior que a resposta.
                {
                    visor1.innerHTML = "<"; // Ele coloca o sinal de menor no visor 1;
                    visor2.innerHTML = "MENOR"; // E no visor 2 ele coloca "MENOR";
                    
                    visor1.style.color = "#927801"; // Ele vira da cor do fundo pra dar um efeito de piscada.
                    visor2.style.color = "#927801"; // Afinal a namorada notou que se continuasse dois resultados
                    setInterval(function(){         // iguais, Tipo, dois "MAIOR" em sequência, o jogador não tinha
                        visor1.style.color = "#426545"; // um bom feedback para entender que aconteceu alguma coisa.
                        visor2.style.color = "#426545"; // Achei a ideia interessante, e coloquei. :D Agradicido <3
                    },500);
                }
            else // Se o chute não é maior que a resposta, ele cai aqui.  
                {
                    visor1.innerHTML = ">";
                    visor2.innerHTML = "MAIOR";
                    
                    visor1.style.color = "#927801";                    
                    visor2.style.color = "#927801";                    
                    setInterval(function(){                  
                        visor1.style.color = "#426545";
                        visor2.style.color = "#426545";
                    },500);  
                } // Mesma coisa que o de cima. Vale ressaltar que: o igual está concebido primeiro.
        }
        
        chute.focus(); // Adicionei também \/, bem depois, 14/04/19, pra focar após a tentativa. 
        
        chute.value = ""; // no final do teste do número, ele limpa o campo de Chute do jogador. 
        
    }; // Nossa, 75 linhas de código, por enquanto, ele faz tudo rs. // 01:23, 01/04/19, tá, 200 linhas de código, de boa.
    
    play.addEventListener("click", jogar);
    
    document.addEventListener("keydown", function(){
    
    let tecla = event.keyCode;
    
    if (tecla == 16) // Se apertado Shift, ele foca no Chute. Não consegui com Tab.
    {
        
        document.getElementById("chute").focus();
        
    }
    
    if (tecla == 13) // Tentando implementar o Enter para enviar normalmente :(
    {
        console.log("Entrei aqui")
        
        jogar(); // Bah, não tá achando a jogar :( Isso é bem triste diga-se de passage. 
    }
}); // Tentei colocar no updatesAleatorium.js mas não deu.
    // Basicamente são funções para escutar o Shift, que simplesmente foca pro bagulhinho. E também o Enter para enviar a tentativa da pessoa... Entretanto, também coloquei pra focar ali, depois que a pessoa tenta o número. Eeenfim. 21:38.
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // Tá, estamos na 207, e acho que foi tudo, acho que o jogo tá terminado! 00:57, 01/04/19. // ATT: estamos na 202.
    // No mais, agora vou comentar as áreas que tá mostrando a resposta... E se pah tá pronto.
    // Falta os áudios para deixar ele mais divertidinho, mas se pah tá funcional... Testei bastante.
    // Alguém me contrata como QA por favor. Someone hire me as a Quality Assurance Tester please.
});

