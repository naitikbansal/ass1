class Box {
  constructor(x, y, width, height) {
   
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    fill("yellow");
    rect(320, 350, this.width, this.height);
    
  }
};
