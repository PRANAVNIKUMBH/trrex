//Global variables
var trexani,groundimg,trex,ground 

//intendation - giving tab spaces

//load animation, images and sound
function preload(){
  trexani=loadAnimation('trex1.png','trex3.png','trex4.png')

  groundimg=loadImage('ground2.png')

  cloudimg=loadImage('cloud.png')
}

function setup() {
  createCanvas(600,200);

  trex=createSprite(50,170,20,35)
  trex.addAnimation('walking',trexani)
  trex.scale=0.5

  ground=createSprite(300,180,600,20)
  ground.addImage(groundimg)

  ground2=createSprite(300,190,600,20)
  ground2.visible=false
  
  
}

function draw() {
  

  background('gray');

  trex.collide(ground2)

  if(keyDown('space')&&trex.y>152){
    trex.velocityY=-8
  }

  trex.velocityY=trex.velocityY+0.5

  ground.velocityX=-5
  if(ground.x < 0){
    ground.x = 600  
  }
  clouds()
  
  drawSprites()
}

function clouds (){
  if(frameCount%60===0){
    var cloud = createSprite(600,random(30,70),40,60)
    cloud.addImage(cloudimg)
    cloud.velocityX=-4
    cloud.scale=0.8
   
    trex.depth=cloud.depth+1
  }
  
}






