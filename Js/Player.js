class Player{

    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }


    update(){
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
    
        });
      }
      
        // updateCount(count){
        //   database.ref('/').update({
        //     playerCount: cousnt
        //   });
        // }

    static getPlayerInfo(){
          var playerInfoRef = database.ref('players');
          playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }     

}



