class Particle{
    constructor(x,y){

        this.body = Bodies.circle(x,y,10,{restitution : 0.4});
        World.add(world,this.body)

    }

    display(){

        this.color=color(random(0, 255), random(0, 255), random(0, 255))
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}