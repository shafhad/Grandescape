class Redrect {
    constructor(x,y,width,height,angle){
      var options = {
        //'restitution':0.8,
        'friction':0.8,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
    Matter.Body.setAngle(this.body, angle);
    }
    display(){
      var angle = this.body.angle;
      push();
      stroke("white");
      strokeWeight(5);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("red")
      //stroke("red");
      //strokeWeight(5)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }