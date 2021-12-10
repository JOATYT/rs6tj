
var bg, backgroundImg;
var player,playerImg,edges;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  playerImg = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  edges = createEdgeSprites()
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.scale = 1.5

  player = createSprite(600,400,40,40)
  player.addImage(playerImg)
  player.scale = 0.2
}

function draw() {

  bg.velocityY = -6;

  if(bg.y < 10){
    bg.y = bg.height/2;
  }
  
  if(keyDown("up")){
    player.y = player.y-3
  }
  if(keyDown("down")){
    player.y = player.y+3
  }
  if(keyDown("left")){
    player.x = player.x-3;
  }
  if(keyDown("right")){
    player.x = player.x+3
  }

  player.bounceOff(edges[3])
  player.bounceOff(edges[2])
  player.bounceOff(edges[1])
  player.bounceOff(edges[0])
    
    drawSprites();
   
}

