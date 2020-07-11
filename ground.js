class Ground {
    constructor(x,y,width,height){
    var options={
    density:250,
    restitution:0.5,
    friction:0.5,
    isStatic:true,
    
    
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    }
    
    display(){
        var pos=this.body.position;
        var angle=this.body.angle
    push();
    fill("white");
    rotate(angle);
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop();
    
    }
    
    
    }