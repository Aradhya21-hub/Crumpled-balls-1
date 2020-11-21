class Dustbin{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
                      
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        
       
       
        rectMode(CENTER);
        fill("green")
        rect(0,0,this.width,this.height);
        
        
    }
};