class Game {
    constructor(){
  
    }
  
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
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
    }
  
    play(){

     

      form.hide()
      background(bgimg)
      // if(player.index===1)
      // {
      //   player.xpos=hero1.x
      //   player.ypos=hero1.y
      //   player.update();
      // }
      // if(player.index===2)
      // {
      //  player.xpos=hero2.x
      //  player.ypos=hero2.y
      //   player.update()
      // }
      Player.getPlayerInfo()

if(allPlayers!==undefined)
{

  //  for(var plr in allPlayers)
  //  {
        player.getposition();

          if(player.index===1)
          {
            hero2.x=allPlayers["player2"].x;
            hero2.y=allPlayers["player2"].y;
            hero1.x=player.xpos;
            hero1.y=player.ypos; 

           
            if(keyCode===UP_ARROW){
              //hero1.y=hero1.y-4
     //         console("up")
              player.changePosition(0,-4)  
            }
            if(keyCode===DOWN_ARROW){
              //hero1.y=hero1.y+4
              player.changePosition(0,4)
            }
            if(keyCode===LEFT_ARROW){
              //hero1.x=hero1.x-4
              player.changePosition(-4,0)
            }
            if(keyCode===RIGHT_ARROW){
              //hero1.x=hero1.x-4
              player.changePosition(4,0)
            }
            if(keyCode===113){
  hero1.changeAnimation("hero punch",punch)
              
            }
            if(keyCode===101){
  hero1.changeAnimation("hero kick",kick)
              
            }
            if(hero1.isTouching(hero2)){
  hero2.changeAnimation("hero2 recover",lrecover)
              
            }
   //          hero1.x=hero1.x-0.5
          }
          
          if(player.index===2)
          {
         //   console.log(plr)
         hero2.x=player.xpos;
         hero2.y=player.ypos;        
        
            hero1.x=allPlayers["player1"].x;
            hero1.y=allPlayers["player1"].y;
           
            if(keyCode===UP_ARROW){
              //hero2.y=hero2.y-4
              player.changePosition(0,-4)  
            }
            if(keyCode===DOWN_ARROW){
              //hero2.y=hero2.y+4
              player.changePosition(0,4)  
            }
            if(keyCode===LEFT_ARROW){
              //hero2.y=hero2.x-4
              player.changePosition(-4,0)  
            }
            if(keyCode===RIGHT_ARROW){
              //hero1.x=hero1.x-4
              player.changePosition(4,0)
            }
            if(keyCode===113){
  hero2.changeAnimation("hero2 punch",lpunch)

            }
            if(keyCode===101){
              hero2.changeAnimation("hero2 kick",lkick)
                          
            }
     //        hero2.x=hero2.x-0.5
    //      }
      }
      hero1.collide(invisibl)
      hero2.collide(invisibl)
    
  }
       }
    
      
    end(){
      
    }
  }
  