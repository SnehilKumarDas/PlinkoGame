class Ground{
    constructor(){

        this.body = Bodies.rectangle(400,800,800,40,{isStatic : true})
        this.w = 800
        this.h = 30
        World.add(world,this.body)
    }

    display(){

        fill("brown")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}