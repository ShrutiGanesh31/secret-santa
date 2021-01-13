var ground,groundimage;
var redballoon,greenballoon,pinkballoon,blueballon;
var redImage,greenImage,pinkImage,blueImage;

var bow,bowImage;

var arrow,arrowImage;

var score=0;

var redbgroup,greenbgroup,bluebgroup,pinkbgroup;
var arrowgroup;

function preload(){
 //load your images here
  groundimage=loadImage("background0-1.png");
  
  redImage = loadImage("red_balloon0.png");
 greenImage = loadImage("green_balloon0.png");
  blueImage = loadImage("blue_balloon0.png");
  pinkImage = loadImage("pink_balloon0.png");
  
  bowImage = loadImage("bow0.png");
  
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  ground=createSprite(300,300,600,600);
  ground.addImage ("ground",groundimage);
  //ground.scale=2.5;
  ground.velocityX=-2;
  
  bow=createSprite(580,10,20,30);
  bow.addImage("bow",bowImage);
  bow.scale=1.2;
  
  arrowgroup=new Group();
  redbgroup=new Group();
  greenbgroup=new Group();
  bluebgroup=new Group();
  pinkbgroup=new Group();
  
  
}
function draw() {
  background("white");
  
  if(ground.x<100){
    ground.x=ground.width/2;
  }
  
  if(arrowgroup.isTouching(greenbgroup)){
    
    greenbgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+1;
  }
   if(arrowgroup.isTouching(bluebgroup)){
    
    bluebgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+1;
  }
   if(arrowgroup.isTouching(pinkbgroup)){
    
    pinkbgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+1;
  }
   if(arrowgroup.isTouching(redbgroup)){
    
    redbgroup.destroyEach();
    arrowgroup.destroyEach();
    score=score+1;
  }

  //console.log(mouseX,mouseY);
  bow.y=mouseY;
  
  if(frameCount%80==0){
    var choose=Math.round(random(1,4));
    if(choose==1){
      redB();
    }
    if(choose==2){
      greenb();
    }
    if(choose==3){
      blueb();
    }
    if(choose==4){
      pinkB();
      
      
    }
  }
  
  spawnArrow();
  drawSprites();
  
  textSize(20);
  text("Score: "+score ,470,30);

  //add code here
  
}
function spawnArrow(){
    if(keyDown("space")){
      
    arrow=createSprite(590,30,20,20);
    arrow.addImage("arrow",arrowImage);
    arrow.y=bow.y;
    
    arrow.scale=0.5;
      arrow.velocityX=-6;
      arrow.lifetime=100;
      arrowgroup.add(arrow);
    }
    
  }
   function redB(){
   redballoon=createSprite(0,random(10,390),10,10);
     redballoon.velocityX=3;
   redballoon.addImage("redballoon",redImage);
   redballoon.scale=0.1;
     redballoon.lifetime=200;
     redbgroup.add(redballoon);
 } 

   function greenb(){
   greenballoon=createSprite(0,random(10,390),10,10);
     greenballoon.velocityX=3
   greenballoon.addImage("greenballoon",greenImage);
   greenballoon.scale=0.1;
     greenballoon.lifetime=200;
     greenbgroup.add(greenballoon);
   }
  function blueb(){
   blueballoon=createSprite(0,random(10,390),10,10);
    blueballoon.velocityX=3
   blueballoon.addImage("blueballoon",blueImage);
   blueballoon.scale=0.12;
    blueballoon.lifetime=200;
    bluebgroup.add(blueballoon);
   }
   function pinkB(){
   pinkballoon=createSprite(0,random(10,390),10,10);
     pinkballoon.velocityX=3;
   pinkballoon.addImage("pinkballoon",pinkImage);
   pinkballoon.scale=1.4;
     pinkballoon.lifetime=200;
     pinkbgroup.add(pinkballoon);
   }

