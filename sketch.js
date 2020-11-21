
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1, paperObject,groundObject	,dustbin2,dustbin3
var world;

function preload(){
	dustbinimage=loadImage("dustbin.png")


}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	dustbin1=new dustbin(1100,650,150,15);
	dustbin2=new dustbin(1185,575,15,170);
	dustbin3=new dustbin(1015,575,15,170);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill(0)
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  image(dustbinimage,1020,500,200,200)
  paperObject.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





