const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine, world;
var box1;

function setup(){
    createCanvas(1360,630);

    engine = Engine.create()
    world = engine.world

    ground = new Ground(680,580,1460,20);
    box1 = new Box(850,200,70,70);
    ball = new Ball(550,200,70,70);
    rope = new Rope(ball.body,{x:500,y:200})
}

function draw(){
    Engine.update(engine)
    background("azure")

    ground.display()
    box1.display()
    ball.display()
    rope.display()
}