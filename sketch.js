const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine,myWorld,ground,ball;



function setup() {
  createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=Bodies.rectangle(200,370,400,10,{isStatic:true});
  World.add(myWorld,ground);

  var balloptions={
    restitution:1
  }

  ball=Bodies.circle(200,100,25,balloptions);
  World.add(myWorld,ball);
}





function draw() {
  background("black");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,25);
  drawSprites();
  
}





















