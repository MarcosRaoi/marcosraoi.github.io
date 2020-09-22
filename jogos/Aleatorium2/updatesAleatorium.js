window.addEventListener("load", function(){

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
});
    
});
