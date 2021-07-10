class Game{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

    async start(){
        if(gameState === 0){
          background(bgImg);
          player = new Player();
         
        }
          form = new Form()
          form.display(); 
    }


    play(){
    form.hide(); 
     
      dog = createSprite(displayWidth/2 - 400, displayHeight/2 - 500)
        dog.addImage("dog", dogImg);

      if(player !== undefined){
        background(bgImg);



      }

    }
}