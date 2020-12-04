const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var myEngine, myWorld;
var box1, ground;

function preload(){

}

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(200, 390, 400, 20);
  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);


  var render = Render.create({
    element: document.body, 
    engine: myEngine, 
    options: { width: 400, height: 400, showAngleIndicator: true }
    }); 
    Render.run(render);
  
}

function draw() {
  background('green');  
  Engine.update(myEngine);
  fill('black');
  box1.display();
  box2.display();
  ground.display();
}