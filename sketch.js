var car, wall;
var speed,weight;


function setup() {
  createCanvas(1000,400);
  car = createSprite(200,200,50,50);
  wall = createSprite(800,200,60,100);

  speed=random(55,90);
  car.velocityX = 80;

  weight=random(600,1500);
}

function draw() {
  background("black");
  
  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      car.shapeColor = "yellow";
      wall.shapeColor = "white";
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor = "green";
      wall.shapeColor = "white";
    }
    if(deformation<180)
    {
      car.shapeColor = "red";
      wall.shapeColor = "white";
    }
  }
  drawSprites();
}