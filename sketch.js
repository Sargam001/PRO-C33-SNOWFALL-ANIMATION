const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var snow,snow1,engine,world

function preload(){
  snow=loadImage("snow1.jpg")

}

function setup() {
  createCanvas(1000,600);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
    world = engine.world;

 
for(var i=95;i<=1000;i=i+100){
  snow1 = new weather(700,320,100,100);
}

}


function draw() {
  background(snow);  
 
  for(var i=95;i<=1000;i=i+100){
     snow1.display()}
  drawSprites();
}