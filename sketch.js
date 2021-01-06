var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  
  speed = Math.round(random(55,90));
  weight = random(400,1500);

  car = createSprite(50,200, 30, 30);
  car.velocityX = speed;
  car.shapeColor = "grey";
  //car.debug = "true";

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  //wall.debug = "true";

  
}

function draw() {
  background = ("black");  
  
  speed = Math.round(random(55,90));
  weight = random(400,1500);
  
  car.velocityX = speed;

if(wall.x-car.x<wall.width/2+car.width/2) {
  car.velocityX=0;

  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation>=180) {
  car.shapeColor = "red";
  
  }

  var deformation = 0.5*weight*speed*speed/22500;


  if(deformation<180 && deformation>=100) {
    car.shapeColor = "yellow";
    
  }

  var deformation = 0.5*weight*speed*speed/22500;

  if(deformation<100) {
    car.shapeColor = "green";
 
}
 

}


drawSprites();
}