class Plinko {
    constructor(x,y){
    var options={
        isStatic:true,
        density:10,
    
    }
    this.body=Bodies.circle(x,y,10,options)
    this.radius=10;
    this.color=color(255,20,255)
   // Body.setVelocity(this)
    World.add(world,this.body);

    }
    display(){
      var pos=this.body.position;
     // push();
     //   translate(pos.x,pos.y)
      ellipseMode(CENTER);
      ellipse(pos.x,pos.y,15);
      fill(this.color);
     // pop();
    }
}