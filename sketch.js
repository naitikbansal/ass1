const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ball=new Ball(200,350,50,50)
    box2 = new Box(340,100,50,50);
    ground = new Ground(190,height,450,50)
}

function draw(){
    background("red");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ball.display();
    box2.display();
    ground.display();
}