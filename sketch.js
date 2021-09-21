const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel, ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,basket, backgroundImg;



function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    Engine.update(engine);
    


}

