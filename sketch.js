var bullet,wall;
var speed,weight,thickness;
var damage;
var greenCarImage,yellowCarImage,redCarImage;

function preload() {
    greenCarImage=loadImage("green.jpg");
    yellowCarImage=loadImage("yellow.png");
    redCarImage=loadImage("red.jpg");
}

function setup() {
  createCanvas(1600,400);
  
  
  weight=random(30,52);
  thickness=random(22,83);
  
  damage=(0.5*weight*weight*weight)/(thickness*thickness*thickness);
  
  speed=random(223,321);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor="white";
  bullet.velocityX=speed/30;
  /*
  if (deformation<100) {
    bullet.addImage("greenCar",greenCarImage);

  } else if ((deformation>=100) && (deformation<=180)) {
    bullet.addImage("yellowCar",yellowCarImage);
  } else if (deformation>180) {
    bullet.addImage("redCar",redCarImage);
  }
  */
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");

  textSize(20);
  text("Speed = "+Math.round(speed),150,50);
  text("Weight = "+Math.round(weight),350,50);
  text("Thickness = "+Math.round(thickness),550,50);
  
  //console.log("wall.x-car.x - "+(Math.round(wall.x-car.x)));
  //console.log("wall.width/2+car.width/2 - "+(wall.width/2+car.width/2));
  
      
  if (hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    if (damage > 10) {
      wall.shapeColor="red";
    } else {
      wall.shapeColor="green";
    } 
    text("Damage = "+Math.round(damage),750,50);
  
  }
  drawSprites();
}

function hasCollided(aBullet,aWall) {
  if ((Math.round(aWall.x-aBullet.x)) <= (aWall.width/2+aBullet.width/2))  {
    return true;
  } else {
    return false;
  }
}