var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 speed = random(50,90)
 weight = random(400,1500)
 car = createSprite(50, 200, 50, 50);
 car.velocityX = speed;
 wall = createSprite(1500,200,60,height/2)
 wall.shapecolor(80,80,80)




}

function draw() {
  background(255,255,255);  
  drawSprites();



   isTouching();


}

function isTouching() {
car.collide = wall;
car.x = 50;
car.y = 200;
}