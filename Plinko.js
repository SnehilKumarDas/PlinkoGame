class Plinko{
    constructor(x,y){

            var options = { restitution: 1, 
                friction: 0, 
                isStatic:true }

        

    this.body = Bodies.circle(x,y,15,options)
    this.w = 15
    this.h = 15
    World.add(world,this.body)

    }

    display(){


        push();
        fill("white")
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipse(0,0,this.w,this.h);
        pop();
    }
}