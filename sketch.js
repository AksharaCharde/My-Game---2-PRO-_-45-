var player;
var girl_running;
var bg, bgImage;
var ghost, ghostImg, treasureImg;
var ghostGroup, treasureGroup;

var distance = 0;
var score = 0;
function preload() {
    girl_running = loadAnimation("Run (1).png", "Run (2).png", "Run (3).png",
        "Run (4).png", "Run (5).png", "Run (6).png", "Run (7).png", "Run (8).png",
        "Run (9).png", "Run (10).png", "Run (11).png", "Run (12).png", "Run (14).png",
        "Run (15).png", "Run (16).png", "Run (17).png",
        "Run (18).png", "Run (19).png", "Run (20).png");
    bgImage = loadImage("bg.jpeg");
    ghostImage = loadImage("ghost-standing.png");
    treasureImg = loadImage("treasure.png");
}

function setup() {
    createCanvas(1300, 750);
    player = createSprite(100, 588, 10, 10);
    player.addAnimation("girl_running", girl_running);
    player.scale = 0.5;

    ghostGroup = new Group();
    treasureGroup = new Group();
    
}

function draw() {
    background(bgImage);
    player.y = World.mouseY;
    drawSprites();

    spawnGhost();
    spawnTreasure();
}

function spawnGhost() {
    //write code here to spawn the ghost
    if (frameCount % 60 === 0) {
      var ghost = createSprite(1100,Math.round(random(500,700)));
      ghost.addImage(ghostImage);
      ghost.scale = 0.5;
      ghost.velocityX = -(6 + 2 * distance/150);
      
       //assign lifetime to the variable
      ghost.lifetime = 200;
      
      //add each cloud to the group
      ghostGroup.add(ghost);
    }
    
  }

  function spawnTreasure() {
    //write code here to spawn the ghost
    if (frameCount % 60 === 0) {
      var treasure = createSprite(600,420,40,10);
      treasure.y = Math.round(random(500,700));
      treasure.addImage(treasureImg);
      treasure.scale = 0.5;
      treasure.velocityX = -3;
      
       //assign lifetime to the variable
       treasure.lifetime = 200;
      
      //add each cloud to the group
      treasureGroup.add(treasure);
    }
    
  }

