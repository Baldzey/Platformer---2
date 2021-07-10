class Form {

    constructor(){
        this.input = createInput("Your Name");
        this.button = createButton("Enter");
        this.reset = createButton("Reset");

    }
    
    hide(){
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h1')
        title.html("LeaderBoard Parkour");
        title.position(displayWidth/2- 150, 0);
      
        this.input.style('width','200px');
        this.input.style('height', '25px');
        this.input.style('background', 'lightgrey');
        this.input.style('border-radius: 20px');
        this.input.position(displayWidth/2- 100, displayHeight/2- 80);
        this.button.style('border-radius: 20px')
        this.button.style('width', '150px');
        this.input.style('height;', '50px');
        this.button.position(displayWidth/2- 72, displayHeight/2);
        this.reset.style('border-radius: 20px');
        this.reset.style('width', '75px');
        this.reset.style('background', 'lightgreen');
        this.reset.position(displayWidth - 85, displayHeight - 875);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            
            // playerCount +=1;
            // player.index = playerCount;
            player.update();
            // player.updateCount(playerCount);
          });
    
        this.reset.mousePressed(()=>{
            game.update(0);
            database.ref("playernull").remove();


        });

    }

      

}