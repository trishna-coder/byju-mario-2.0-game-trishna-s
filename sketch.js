var BG,bgImage
var mario,marioImage
var cloud,cloudImage
var cloudsGroup,cloudImage
function preload(){
bgImage = loadImage("mario 2.0/ground.jpeg")
marioImage = loadImage("mario 2.0/mario runner.gif")
cloudImage = loadImage("mario 2.0/cloud.png");
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 BG = createSprite(width/2,height/2,width,height)
 BG.addImage(bgImage)
 BG.scale = 3
mario = createSprite(250,height-150)
mario.addImage(marioImage)
mario.scale = 1
cloudsGroup = new Group()
}

function draw() {
 background("red")
 spawnClouds()
 drawSprites()
 
}
function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var cloud = createSprite(width,100,40,10);
      cloud.y = Math.round(random(80,200));
      cloud.addImage(cloudImage);
      cloud.scale = random(0,2);
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = width;
      
      //adjust the depth
      
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}