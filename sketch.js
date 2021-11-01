const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, shovel, ball1,ball2,ball3;
var chair1, chair2, umbrella1, umbrella2,basket, backgroundImg;

function preload(){
    backgroundImg = loadImage("sprites/beach.jpg")
}

function setup(){
    canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(400,320);
    ball2 = new Ball(950,120);
    ball3 = new Ball(1550,120);

    ground = new Ground(900,590,2000,20);

    shovel = new Shovel(650,50)
 
    chair1 = new Chair(1100,500)
    chair2 = new Chair(1400,500)

    umbrella1 = new Umbrella(1250,500)
    umbrella2 = new Umbrella(150,350)

    basket = new Basket(550,200)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ball1.display();
    ball2.display();
    ball3.display();

    ground.display();

    shovel.display();

    chair1.display();
    chair2.display();

    umbrella1.display();
    umbrella2.display();

    basket.display();
}

