
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground1;
var dustbin1;
var dustbin2;
var dustbin3;

function preload()
{}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper1 = new paper(this.x,this.y,this.r);
   ground1 = new ground(200,height,400,20);
   dustbin1 = new dustbin(200,300,100,90);
   dustbin2 = new dustbin(90,300,100,90);
   dustbin3 = new dustbin(250,300,100,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}



