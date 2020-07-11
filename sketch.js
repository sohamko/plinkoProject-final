var engine,world
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=150;
var divide
var ground;




function setup() {
 engine=Engine.create();
 world=engine.world
  createCanvas(1770,870);
  
  //making ground
  ground=new Ground(885,840,1770,20);

  //making divisions
  for (var j=0;j<=width;j=j+80){
    divisions.push(new Divisions(j,765,10,divisionHeight))
    
  }
//making static plinkos
  for(var i=0;i<=width;i=i+38){
    plinkos.push(new Plinko(i,200))

  }
  for(var i=17.5;i<=width;i=i+38){
    plinkos.push(new Plinko(i,270))

  }
  for(var i=5;i<=width;i=i+39){
    plinkos.push(new Plinko(i,340))

  }
  for(var i=10.5;i<=width;i=i+38){
    plinkos.push(new Plinko(i,410))

  }
  for(var i=0;i<=width;i=i+39){
    plinkos.push(new Plinko(i,480))

  }
  for(var i=14.5;i<=width;i=i+41){
    plinkos.push(new Plinko(i,550))
    

  }
   Matter.Body.setVelocity(plinkos.get(i),{x:3,y:0});
 



 //divide=new Divisions(200,400,10,300);
 

  Engine.run(engine)
}

function draw() {
  background(55,255,25);  
  //console.log(divisions)
  Engine.update(engine);
  
    
   for(var j=0; j<divisions.length; j++){
     divisions[j].display();
   }

   for(var i=0;i<plinkos.length;i++){
     plinkos[i].display();
   //  Matter.Body.setVelocity(plinkos[i],{x:3,y:0});
   }   

   for(var k=0 ; k<particles.length;k++){
     particles[k].display();
   }
  ground.display();
   //making falling particles
  
   if(frameCount%10===0){
    particles.push(new Particle(-100))
    
    }
    
  
  //divide.display();
  //divisions.display();
  

  drawSprites();
}