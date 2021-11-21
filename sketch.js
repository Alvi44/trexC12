var ground, groundImage;
var trex ,trex_running;
var invisibleGround
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundImage = loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,100,10,10);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.5

  ground = createSprite(300,180,600,10)
  ground.addImage(groundImage)
  ground.x = ground.width /2
  ground.velocityX = -4

  invisibleGround = createSprite(300,190,600,10)
  invisibleGround.visible = false


}

function draw(){
  background(220)
 
  if (keyDown("space") && trex.y > 140){
    trex.velocityY = -12

  }

  if(ground.x < 0 ){
    ground.x = ground.width /2
  }

  //adding gravity to trex
  trex.velocityY = trex.velocityY + 0.8

  trex.collide(invisibleGround)

  drawSprites();
}



