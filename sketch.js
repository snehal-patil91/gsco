var car, wall ;
var speed , weight;
function setup() {
  createCanvas(1600, 400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocity=speed;
  car.shapecolour=colour(80,80,80);

  wall=createSprite(150,200,50,height/2);
  wall.shapecolourcolour(80,80,80)
}

function draw() {
  background(220);
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocity=0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180 )
    {
      car.shapecolour=colour(255,0,0);
    }
    if(deformation>180  &&  deformation>100)
    {
      car.shapecolour=colour(230,230,0);
    }
    if (deformation>100)
    {
      car.shapecolour=colour(0,255,0);
    }
}
drawSprite();
}