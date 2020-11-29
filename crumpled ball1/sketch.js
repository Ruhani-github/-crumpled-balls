var paperBody,ground,boxb,boxl,boxr;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2,390, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(200 , 375 , 10 , {restitution:2, isStatic:false,friction:0.5});
	World.add(world, paperBody);
	

	//Create a Ground
	boxb = Bodies.rectangle (950,375,200,20,{isStatic:true});
World.add(world,boxb);
	ground = Bodies.rectangle(width/2, 390, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 boxl = Bodies.rectangle (840,335,20,100,{isStatic:true});
	 World.add(world,boxl);

boxr = Bodies.rectangle (1040,335,20,100,{isStatic:true});
World.add(world,boxr);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
  fill("red");
 rect(boxl.position.x,boxl.position.y,20,100);
 rect (boxb.position.x,boxb.position.y,200,20);
 rect(boxr.position.x,boxr.position.y,20,100);
 fill("turquoise");
 ellipse (paperBody.position.x,paperBody.position.y,10,10)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.setStatic(paperBody,false);
    
  }
}



