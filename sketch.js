const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage, bg;
var ground;
var hero;

function preload() {
bgImage = loadImage('images/GamingBackground.png');

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground = new Ground(600,height,1200,20);
  hero = new Hero(200,100,50);

}

function draw() {
  
  background(bgImage);
  ground.display();
  hero.display();

}

function mouseDragged(){
  Matter.body.setPosition(hero.body,{x: mouseX, y:mouseY});

}

