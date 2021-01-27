const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies; 
  var myEngine,myWorld,myBody; 
  var box1,box2;
  var ground;
   function setup() {
      createCanvas(400,400);
       myEngine=Engine.create();
        myWorld=myEngine.world;
         box1=new Box(100,100,50,50); 
         box2=new Box(200,100,50,150);
         ground=new Ground(200,370,400,20);

         } 
         function draw() {
            background("black");
             Engine.update(myEngine);
              box1.display(); 
              box2.display();
              ground.display();
             }