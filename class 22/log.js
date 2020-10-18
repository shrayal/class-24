class Log{
    constructor( x,y,height,angle){
        var opt={
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
          }
         this.body=Bodies.rectangle( x,y,20,height,opt);
         this.width=20
         this.height=height
         Matter.Body.setAngle(this.body,angle)
          World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        strokeWeight(4)
        stroke("green")
        fill("blue")
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }
}