class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.6, 
            friction: 0.5,
            density: 2.0
          }
        
          this.body = Bodies.rectangle(x,y,width,height, options);
          this.width = width;
          this.height = height;
          World.add(myWorld, this.body); 
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        angleMode(RADIANS);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}