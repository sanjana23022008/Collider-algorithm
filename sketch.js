
var movingRect, fixedRect, box1,box2;

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor ="green";
  movingRect.debug = true;

  fixedRect = createSprite(200,280,40,60);
  fixedRect.shapeColor ="blue";
  fixedRect.debug = true;

  box1 =createSprite(200,200,30,25);
  box1.shapeColor="yellow";

 box2=createSprite(450,550,37,40);
  box2.shapeColor="yellow";

  


}

function draw() {
  background(255,255,255);  
  movingRect.x =mouseX;
  movingRect.y =mouseY;
 // console.log(fixedRect.x-movingRect.x)
 if(isTouching(movingRect,box2)){

  movingRect.shapeColor ="blue";
  box2.shapeColor ="blue";

 }
else{
  movingRect.shapeColor ="green";
  box2.shapeColor ="yellow";
}

  drawSprites();
}

