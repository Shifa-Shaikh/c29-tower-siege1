const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var holder ,ball,ground
var stand1,stand2;
var hexangonal;
var slingShot;
var block1;
var Stand;

function setup(){
engine = Engine.create();
world  = engine.world;

createCanvas(900,400);
ground = new Ground(450,350,900,20);
stand1 = new Ground(380,300,270,10);
stand2 = new Ground(700,200,200,10);
//level one
block1 = new Block(280,275,30,40);
block2 = new Block(310,275,30,40);
block3 = new Block(340,275,30,40);
block4 = new Block(370,275,30,40);
block5 = new Block(400,275,30,40);
block6 = new Block(430,275,30,40);
block7 = new Block(460,275,30,40);
//level two
block8 = new Block(310,23530,40);
block9 = new Block(340,235,30,40);
block10 = new Block(370,235,30,40);
block11 = new Block(400,235,30,40);
block12 = new Block(430,235,30,40);
block13 = new Block(460,235,30,40);
block14 = new Block(490,235,30,40);
//level three
block15 = new Block(340,195,30,40);
block16 = new Block(370,195,30,40);
block17 = new Block(400,195,30,40);
block18 = new Block(430,195,30,40);
//level four
block19 = new Block(370,115,30,40);
block20 = new Block(400,115,30,40);
//level five
block21 = new Block(385,115,30,40);

//set 2
//level one 
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,70);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);
//level two
blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);
//level three 
blocks9 = new Block(700,95,30,40);

//hexangonals with sling
hexangonal = Bodies.circle(50,200,20);
World.add(world,hexangonal);

slingShot = new SlingShot(this.hexangonal,{x:200,y:200});

}

function draw() {
drawSprites();
  background("purple")
Engine.update(engine);

ground.display();
stroke(15)
fill("Brown")


block1.display();
block2.display();
block3.display();  
block4.display();
block5.display();
block6.display();
block7.display();
stroke(15)
fill("orange")

block8.display();
block9.display();
block10.display();  
block11.display();
block12.display();
block13.display();
block14.display();
stroke(15)
fill("black")

block15.display();
block16.display();
block17.display();
block18.display();
stroke(15)
fill("blue")

block19.display();
block20.display();  
stroke(15)
fill("green")


block21.display();
stroke(15)
fill("white")

blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
stroke(15)
fill("yellow")

blocks6.display();
blocks7.display();
blocks8.display();
stroke(15)
fill("red")

blocks9.display();
stroke(15)
fill("brown")

stand1.display();
stroke(15)
fill("green")

stand2.display();
stroke(15);
fill("green")

text("drag the hexagonal ball an release to hit the crazy boxes",200,110);
ellipse(hexangonal.position.x,hexangonal.position.y,20,20);
slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.hexangonal,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}









