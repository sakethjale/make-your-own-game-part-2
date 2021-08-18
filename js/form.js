class Form {

    constructor() {
      this.input = createInput("").attribute("placeholder","enter name");
      this.button = createButton('fight');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset=createButton("reload")
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("super fighting game");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
     this.reset.position(displayWidth-100,20)
   
             
       this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
         if(player.index===1&&hero1!==undefined)
         {
           player.xpos=hero1.x
           player.ypos=hero1.y
         }
         if(player.index===2&&hero2!==undefined)
         {
          player.xpos=hero2.x
          player.ypos=hero2.y

         }

        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

       })
    
  
      
       this.reset.mousePressed(()=>{
        game.update(0)
        player.updateCount(0)
        window.location.reload()
        database.ref('/').update({
          players:null,
          
        })
       });
  
    }
  }
  