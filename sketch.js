const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	ground = new Ground();
	
	hammer=new Hammer(500,400,100,40)
	stone=new Stone(200,400,40,40)
	iron=new Iron(300,400,60,30)
	rubber=new Rubber(400,400,50,50)
}

function draw() {
	background(255);
 
	Engine.update(engine);
 
  hammer.display();
 ground.display()
 stone.display()
 rubber.display()
 iron.display()
}
function mouseDragged(){
    Matter.Body.setPosition(hammer.body, {x: mouseX, y: mouseY});
    
}
