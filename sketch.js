var man,running_man
var ground,groundAnim
var boundary,boundary1
var coin,coinImg
function preload(){
  //pre-load images
  running_man = loadAnimation("Runner-1.png","Runner-2.png")
  groundAnim = loadImage("path.png")
  coinImg = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here

ground = createSprite(200,150,200,200)
ground.addImage(groundAnim)
ground.scale = 0.8
man = createSprite(200,350,20,50);
man.addAnimation("running",running_man)
man.scale = 0.05;
boundary = createSprite(80,200,10,400)
boundary1 = createSprite(320,200,10,400)

}

function draw() {
  background(0);
  drawSprites()
  ground.velocityY = 4;
  if(ground.y  > 200){
    ground.y = ground.y / 2;
  }
  boundary.visible = false;
  boundary1.visible = false;
  man.x = mouseX
  man.collide(boundary)
  man.collide(boundary1)
  
}
