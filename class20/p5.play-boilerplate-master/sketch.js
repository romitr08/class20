var frect,mrect;
function setup(){
  createCanvas(800,400);
 frect= createSprite(400, 200, 50, 50);
 mrect=createSprite(300,200,40,80)
}

function draw() {
  background(0);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY
  if(mrect.x-frect.x < mrect.width/2+frect.width/2 && frect.x-mrect.x < mrect.width/2+frect.width/2 && 
    mrect.y-frect.y < mrect.height/2+frect.height/2 && frect.y-mrect.y < mrect.height/2+frect.height/2)
  {

    mrect.shapeColor="green"
frect.shapeColor="green"
  }
  else{frect.shapeColor="red"
  mrect.shapeColor="red"
}
  drawSprites();
}