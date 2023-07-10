let Enemy;
let Player ; 
let Greenball=[5] ; 
let Redball=[5] ; 
let i ;
let po=0;
let pos=0;
let score =0 ; 
let UP=0,DOWN=0,LEFT=0,RIGHT=0;
let pot=0;
let life = 5; 
let j = 0 ; 
let mot=0;
let title=2  ; 







function callagain(other)
{
  if(other.color=='red'){
    score-= 5 ; 
    while (1)
    {
  let ball_x = random (15,885) ; 
  let ball_y = random (15,485) ;
  let new_distance = dist(ball_x,ball_y,Enemy.position.x ,Enemy.position.y) ;

    if (new_distance >= 45.0)
    {
      other.position.x=ball_x;
      other.position.y=ball_y;
      
      break ; 
    }
   }
    //other =  redball (random(15,885),random (15,485),0,0,15) ;
    // other.position.x=random(15,885);
    // other.position.y=random(15,485);
  }
  if(other.color=='green'){
    score+=15 ;
    //other = greenball (random(15,885),random (15,485),0,0,15) ;
    // other.position.x=random(15,885);
    // other.position.y=random(15,485);
    while (1)
    {
  let ball_x = random (15,885) ; 
  let ball_y = random (15,485) ;
  let new_distance = dist(ball_x,ball_y,Enemy.position.x ,Enemy.position.y) ;

    if (new_distance >= 45.0)
    {
      other.position.x=ball_x;
      other.position.y=ball_y;
      
      break ; 
    }
   }
  }
}

function keyPressed ()
{
   if (keyCode== UP_ARROW && pot==0)
   {
      if(UP==0)
      {                             //
        Player.velocity.y = -3 ;    //
        UP=1;                       //
        DOWN=LEFT=RIGHT=0;          //
      }                             //
      if(UP==1)                     //
      {  
       // Player.velocity.x = 0;
        Player.velocity.y-=Player.acceleration.y;//
      }                           //
   }

   if (keyCode== DOWN_ARROW && pot==0)
   {
    if(DOWN==0)
    {                               //
      Player.velocity.y = 3 ;      //
      DOWN=1;                       //
      UP=LEFT=RIGHT=0;              //
    }                               //
    if(DOWN==1)                     //
    {                               //
      Player.velocity.y+=Player.acceleration.y;//
    }                              //
   }

   if (keyCode== LEFT_ARROW && pot==0)
   {
    if(LEFT==0)
    {                               //
      Player.velocity.x = -3 ;      //
      LEFT=1;                       //
      DOWN=UP=RIGHT=0;              //
    }                               //
    if(LEFT==1)                     //
    {                               //
      Player.velocity.x-=Player.acceleration.x;//
    }                              //
   }

   if (keyCode== RIGHT_ARROW && pot==0)
   {
    if(RIGHT==0)
    {                                //
      Player.velocity.x = 3 ;       //
      RIGHT=1;                       //
      DOWN=LEFT=UP=0;                //
    }                                //
    if(RIGHT==1)                     //
    {                                //
      Player.velocity.x+=Player.acceleration.x;//
      //Player.Position.x+=150;
    }                                //
   }

}

function keyReleased ()
{
   if (keyCode== UP_ARROW && pot==0)
   {
      if(UP==0)
      {                             //
        Player.velocity.y = -3 ;    //
        UP=1;                       //
        DOWN=LEFT=RIGHT=0;          //
      }                             //
      if(UP==1)                     //
      {  
       // Player.velocity.x = 0;
        Player.velocity.y-=Player.acceleration.y;//
      }                           //
   }

   if (keyCode== DOWN_ARROW && pot==0)
   {
    if(DOWN==0)
    {                               //
      Player.velocity.y = 3 ;      //
      DOWN=1;                       //
      UP=LEFT=RIGHT=0;              //
    }                               //
    if(DOWN==1)                     //
    {                               //
      Player.velocity.y+=Player.acceleration.y;//
    }                              //
   }

   if (keyCode== LEFT_ARROW && pot==0)
   {
    if(LEFT==0)
    {                               //
      Player.velocity.x = -3 ;      //
      LEFT=1;                       //
      DOWN=UP=RIGHT=0;              //
    }                               //
    if(LEFT==1)                     //
    {                               //
      Player.velocity.x-=Player.acceleration.x;//
    }                              //
   }

   if (keyCode== RIGHT_ARROW && pot==0)
   {
    if(RIGHT==0)
    {                                //
      Player.velocity.x = 3 ;       //
      RIGHT=1;                       //
      DOWN=LEFT=UP=0;                //
    }                                //
    if(RIGHT==1)                     //
    {                                //
      Player.velocity.x+=Player.acceleration.x;//
      //Player.Position.x+=150;
    }                                //
   }
   if (title ==2  && pot == 0  )
   {
    if (key == 'n')
      title  = 1 ; 
   }
   if (title == 1 && pot == 0 )
   {
      if ( key == 'p')
      title  = 0 ; 
   }


}


// function KeyPressed()
// {
//   if (keyCode== UP_ARROW)
//    {
//       Player.velocity.y = -3 ; 
//       if(accel==0)                //
//         accel=1;                  //
//       if(accel==1)                //
//       {                           //
//         Player.velocity.y-=Player.acceleration.y;//
//       }                           //
//    }
//    if (keyCode== DOWN_ARROW)
//    {
//       // Player.velocity.y = 3  ; 
//       //if(accel==0)
//       //{
//         Player.velocity.y = 3  ;               //
//         accel=1;
//       //}                  //
//       //if(accel==1)                //
//       //{                           //
//         //Player.velocity.y+=Player.acceleration.y;//
//       //}                           //
//    }
//    if (keyCode== LEFT_ARROW)
//    {
//       Player.velocity.x = -3 ; 
//       if(accel==0)                //
//         accel=1;                  //
//       if(accel==1)                //
//       {                           //
//         Player.velocity.x=Player.velocity.x-Player.acceleration.x;//
//       }                           //
//    }
//    if (keyCode== RIGHT_ARROW)
//    {
//       Player.velocity.x = 3 ; 
//       if(accel==0)                //
//         accel=1;                  //
//       if(accel==1)                //
//       {                           //
//         this.velocity.add(this.accelerationx);//
//       }                           //
//    }
// }

let bg  ; 
let bg2 ;
let page1;
let  page2 ; 

function setup() {
  
  bg  = loadImage ('grass.jpg');
  bg2 = loadImage ('desert.jpg'); 
  page1= loadImage('bgtitle1.jpg');
  page2 = loadImage('bgtitle2.jpg');

  var cnv = createCanvas(900, 550);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  textSize(45);
  Player = new player (30,250,0,0,30,'white') ;
  Enemy = new enemy (870,250,10,-3,30,'black') ;
  // for ( i =0 ; i<5 ; i++)
  // {
  //   Redball[i] = new redball (random(15,885),random (15,485),0,0,15) ;
  //   Greenball[i] = new greenball (random(15,885),random (15,485),0,0,15) ;

  // }
  for (i = 0 ; i <  5 ; i++)
  {while (1)
    {
  let ball_x = random (15,885) ; 
  let ball_y = random (15,485) ;
  let new_distance = dist(ball_x,ball_y,Enemy.position.x ,Enemy.position.y) ;

    if (new_distance >= 45.0)
    {
      Redball[i] = new redball (ball_x,ball_y,0,0,15,'red') ;
      break ; 
    }

  }
}
  for (i = 0 ; i <  5 ; i++)
  {while (1)
    {
  let ball_x = random (15,885) ; 
  let ball_y = random (15,485) ;
  let new_distance = dist(ball_x,ball_y,Enemy.position.x ,Enemy.position.y) ;

    if (new_distance >= 45.0)
    {
      Greenball[i] = new greenball (ball_x,ball_y,0,0,15,'green') ;
      break ; 
    }

  }
   
  
}
}



function draw() {
  
  
  
  if (life > 0 )
  {
    if(title==2){
      background(page1);
   
     
    }
    if( title==1){
      background(page2)  ;
     
    }
    if (title == 0)
    {
    if (pot ==0)
   background(bg);
   else 
   {
    
    Player.chase(Greenball[j]) ;
    
    
   // Player.chase (Redball[0]);
   background (bg2)  ;
   if(mot>0)
   {
    mot--;
   text ('Shazam!!!',420,250,80);
   }
   }
  fill('teal');
  rect(0,500,900,50);
 
  
  Player.render ();
  Enemy.render();
  for (i =0 ;i<5 ; i++)
  {
    Redball[i].render ();
    Greenball[i].render (); 
  }
  textFont(loadFont('assets/SourceSansPro-Regular.otf'));
  
  textAlign(CENTER);
  fill(255);
  text('SCORE:',140,505,80);
  text  (score,280 ,505,80);
  text ('LIFE:',540,505,80);
  text (life, 620, 505 , 80 );
  
  if(pos>0)
  --pos;
  // if(pos!=0)
  // {
  //   text('SCORE:',340,400,80);
  // }
  if(pos==0){
  Enemy.chase(Player);
  //text('SCORE:',200,400,80);
  }
  Enemy.update();
  Player.update();
  Player.checkEdges();
  Enemy.checkEdges ();
  
   
  Player.checkCollision (Enemy) ;
  if (pot==600)
  {
     Player.modechange(Greenball);
  }

  if(pot>0)
    --pot;
  if(pot==0)
    Player.modechangeback(Greenball);

  for (i = 0 ; i< 5 ; i++)
  {
    Player.checkCollision( Redball[i]);
    Enemy.checkCollision(Redball[i]);
    if(po==1){
      //delete Redball[i];
      callagain(Redball[i]);
      Redball[i].render ();
      po=0;
    }
    Player.checkCollision(Greenball[i]);
    Enemy.checkCollision(Greenball[i]);
    if(po==1){
      //delete Greenball[i];
      callagain(Greenball[i]);
      Greenball[i].render ();
      po=0;
    }
    
  }
}
  }
else 
{
   background('black') ;
   text('GAME OVER', 450,275) ;
   if (score > 0 )
   {
   text ('Congratulations!',450,375) ;
   text ('You scored',425,445);
   text (score, 580, 445);
   
  }
   else {text ('You are a loser :( ',450,375);

        text ('Your dark-self won over you!',430,445) ; 


  }
}



  
}
