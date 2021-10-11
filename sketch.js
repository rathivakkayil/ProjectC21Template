const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={

	// Include ball_options variable to include isStatic, restitution, friction and density parameters
		

	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	//Write the command to display the ground objects created in ground.js 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

// Draw the ball ball using ellipse function 
  

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
