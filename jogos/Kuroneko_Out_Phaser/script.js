// agora essa versão eu vou tirar todos os comentários e coisas que não utilizei durante o Estudo. No mais, forte agradecimentos ao Ivo por todo suporte em momentos de dificuldade!

(function()
 {
    var gameWidth = 800;
    var gameHeight = 600;
    var game = new Phaser.Game(gameWidth,gameHeight,Phaser.AUTO,"jogo",
    {
        preload:preload,
        create:create,
        update:update        
    });
    
    var perso = [{x: 51, y: 109},{x: 80, y: 353},{x: 285, y: 2},{x:250,y:221},
                 {x:447,y:184},{x:397,y:420},{x:639,y:60},{x:651,y:382}];
    
    var music, oops, yeah;    
    var hamtoro;    
    var txtScore,score;
    
    function preload()
    {
        game.load.image("background","images/bg_full.png");
        game.load.image("hamtoro","images/hamtaro_pixelart.png");
        game.load.image("kuroneko","images/kuroneko_pixelart.png");
        
        game.load.audio("oops", "sounds/oops.mp3");
        game.load.audio("yeah", "sounds/yeah.mp3");
        game.load.audio("abertura", "sounds/abertura.wav");        
    }
    
    function create()
    {
        game.time.events.loop(Phaser.Timer.SECOND * 3, createPerson, this);
        
        music = game.add.audio("abertura",1,true); music.play("",1,true);
        oops = game.add.audio("oops"); yeah = game.add.audio("yeah");
        
        score = 0;  
        
        game.add.sprite(0,0,"background");
        
        txtScore = game.add.text(16,16,"Score: 0",{fontSize:"32px",fill:"#FFF"});        
    }
    
    function update() 
    {
        txtScore.text = "Score: " + score;        
    }
    
    function hitHamtoro(hamtoro)
    {
        hamtoro.destroy();
        score--;
        oops.play();
    }
    
    function hitKuroneko(kuroneko)
    {
        kuroneko.destroy(); // tadins vei
        score++; // parei de usar o kill, ivo comentou que "só adormece a sprite" sla
        yeah.play();
    }
        
    function createPerson()
    {
        var random07 = game.rnd.integerInRange(0,7); // Uma das 8 posições do vetor.
        
        if (game.rnd.integerInRange(1,10) < 4) // 30% de chance de invocar hamtaro.
        {
            hamtoro = game.add.sprite(perso[random07].x,perso[random07].y,"hamtoro");
            hamtoro.inputEnabled = true;
            hamtoro.events.onInputDown.add(hitHamtoro);
            
            setTimeout(function(){hamtoro.destroy();},1500);
        }
        
        else
        {
            kuroneko = game.add.sprite(perso[random07].x-50,perso[random07].y-1,"kuroneko");
            kuroneko.inputEnabled = true;
            kuroneko.events.onInputDown.add(hitKuroneko);
            
            setTimeout(function(){kuroneko.destroy();},1500);                
        }
    }    
}());