const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box, box1, box2;
function preload() {}
function setup(){
  
    createCanvas(1200,540);
    background(0);
    engine = Engine.create();
    world = engine.world;

    //box1 = createSprite(25,470,50,50);
    //box1.shapeColor = color("cyan")
 

    //ground1 = new Ground(600, 20, 1150, 10);
    ground2 = new Ground(600, 520, 1150, 10);
    ground3 = new Ground(25, 270, 10, 500)
    ground4 = new Ground(1175, 270, 10, 500)
    
    //squariad1 = new Bluerect(50, 510, 50, 50, 0)
    //squariad2 = new Pinkrect(400, 200, 50, 50, 0)
    //squariad3 = new Purplerect(400, 200, 50, 50, 0)
    
        

    

}

    /*for (var k = 50; k < 500; k = k + 55 ){
    var box = createSprite(60, k, 50, 50)

    var khushi1 = Math.round(random(1, 4));
         switch(khushi1) {
            case 1: box.shapeColor = "cyan"
              break;
            case 2: box.shapeColor = "pink"
              break;
            case 3: box.shapeColor = "purple"
              break;
            case 4: box.shapeColor = "red"
               break;
    } 

    for(var i = 60; i < 1150; i = i + 55 ) {
        var squariad = createSprite(i, k, 50, 50)
         var khushi = Math.round(random(1, 4));
         switch(khushi) {
            case 1: squariad.shapeColor = "cyan"
              break;
            case 2: squariad.shapeColor = "pink"
              break;
            case 3: squariad.shapeColor = "purple"
              break;
            case 4: squariad.shapeColor = "red"
               break;
    } 
         console.log(i)
         }
    }*/
    


function draw(){
   // background(0);
    Engine.update(engine);
    strokeWeight(4);

    //ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    //squariad1.display();
    //squariad2.display();
    //squariad3.display();
    //box.display();
    //box1.display();
    //box2.display();

   // text("Test",random(0,width),random(0,height));
    
    drawSprites();
   
    for (var k = 0; k < 20; k = k + 1 ){
      var khushi2 = Math.round(random(1, 3)) 
          switch(khushi2) {
          case 1: box= new Bluerect(random(1150),random(500),random(0),random(0))
          box.display();
          break;
          case 2: box= new Pinkrect(random(1150),random(500),random(0),random(0))
          box.display();
          break;
          case 3: box= new Purplerect(random(1150),random(500),random(0),random(0))
          box.display();break;
      }
      console.log(khushi2);
  
     // box.display();
      console.log(box);
  }
    
}
