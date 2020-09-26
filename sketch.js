var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,30);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);  

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    wall.shapeColor = "red";
    bullet.width = bullet.width/2;
  }

  drawSprites();
}