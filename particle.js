class Particle {
constructor(y){
var options={
isStatic:false,
density:0.5,
restitution:0.8,
friction:0.5,
}
this.body=Bodies.circle(random(0,1770),y,10,options);
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);



}
display(){
var pos =this.body.position;
push();
translate(pos.x,pos.y);
fill(this.color)
ellipseMode(RADIUS);
ellipse(0,0,10);
pop();
}



}