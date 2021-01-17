
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const constraint = Matter.Constraint

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  for(var j = 40; j<=width; j=j+50){

    plinkos.push(new Plinko(j,75));

  }

  for(var j = 50; j<=width-10; j=j+50){

    plinkos.push(new Plinko(j,175));
}

for(var j = 40; j<=width; j=j+50){

  plinkos.push(new Plinko(j,275));

}

for(var j = 50; j<=width-10; j=j+50){

  plinkos.push(new Plinko(j,375));
}

for (var k = 0; k <=width; k = k + 80) 
{ divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
}


}


function draw() {
  background(0);
  
  Engine.update(engine);

  if(frameCount%60 === 0){

    particles.push(new Particle(random(10,800),10))
  }

 

  ground.display();

  for(var i = 0; i<plinkos.length; i++){

    plinkos[i].display();
  }

  for(var i = 0; i<divisions.length; i++){

    divisions[i].display();
  }

  for(var i = 0; i<particles.length; i++){

    particles[i].display();
  }
  
}