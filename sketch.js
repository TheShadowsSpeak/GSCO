var speed, weight;
var car, wall;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 70,50);
  speed = random(10,90);
	weight=random(400,1500)
  deformation = 0.5 * weight * speed * speed/22500;
  car.velocityX = speed;
 
  wall=createSprite(1500,200, 60, height/2)
  wall.shapeColor=color(80,80,80)

}

function draw() {
  background(102, 0, 102);  
  
if(wall.x-car.x<(car.width+wall.width)/2){
if(deformation>180){
  car.shapeColor = color(255,0,0);
}
if(deformation>80 && deformation<100){
  car.shapeColor = color(230,230,0);
}
if(deformation<100){
  car.shapeColor = color(255,0,0);
}
}
drawSprites();
}
