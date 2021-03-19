const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,polygon1
var score=0
var backgroundImg
function preload(){

    getBackgroundImg()
backg=loadImage("back2.jpg")
}
function setup(){

    createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground1=new ground(400,680,800,10)
    ground2=new ground(300,250,200,10)
    ground3=new ground(600,450,200,10)

box1=new box(300,200,20,30)
box2=new box(280,200,20,30)
box3=new box(320,200,20,30)
box4=new box(260,200,20,30)
box5=new box(340,200,20,30)
box6=new box(360,200,20,30)
box7=new box(240,200,20,30)
box8=new box(220,200,20,30)
box17=new box(380,200,20,30)


box9=new box(600,400,20,30)
box10=new box(580,400,20,30)
box11=new box(620,400,20,30)
box12=new box(560,400,20,30)
box13=new box(640,400,20,30)
box14=new box(660,400,20,30)
box15=new box(540,400,20,30)
box16=new box(520,400,20,30)
box18=new box(680,400,20,30)

box19=new box(300,100,20,30)
box20=new box(280,100,20,30)
box21=new box(320,100,20,30)
box22=new box(260,100,20,30)
box23=new box(340,100,20,30)
box24=new box(360,100,20,30)
box25=new box(240,100,20,30)

box26=new box(300,50,20,30)
box27=new box(280,50,20,30)
box28=new box(320,50,20,30)
box29=new box(260,50,20,30)
box30=new box(340,50,20,30)

box31=new box(300,20,20,30)
box32=new box(280,20,20,30)
box33=new box(320,20,20,30)

box34=new box(300,10,20,30)


box35=new box(600,300,20,30)
box36=new box(580,300,20,30)
box37=new box(620,300,20,30)
box38=new box(560,300,20,30)
box39=new box(640,300,20,30)
box40=new box(540,300,20,30)
box41=new box(660,300,20,30)

box42=new box(580,200,20,30)
box43=new box(620,200,20,30)
box44=new box(560,200,20,30)
box45=new box(640,200,20,30)
box46=new box(600,200,20,30)

box47=new box(580,100,20,30)
box48=new box(600,100,20,30)
box49=new box(620,100,20,30)

box50=new box(600,50,20,30)

Polygon=new polygon(100,100,50,50)

    Engine.run(engine);
    Rope=new rope(Polygon.body,{x:100,y:600})

}
function draw(){

    rectMode(CENTER);
    if(backgroundImg){

        background(backgroundImg);
    }
    else{
        background(backg);  
    }
    
    textSize(25)
text ("score:"+score,600,100)
    ground1.display()
    ground2.display()
    ground3.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display() 
    box6.display()
    box7.display() 
    box8.display()
    box17.display()

    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display() 
    box14.display()
    box15.display() 
    box16.display()
    box18.display()

    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display() 
    box24.display()
    box25.display() 

    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display() 

    box31.display()
    box32.display()
    box33.display() 

    box34.display()


    box35.display()
    box36.display()
    box37.display()
    box38.display()
    box39.display() 
    box40.display()
    box41.display() 
   
    box42.display()
    box43.display()
    box44.display()
    box45.display()
    box46.display() 

    box47.display()
    box48.display()
    box49.display() 

    box50.display()
Polygon.display()
Rope.display()
//getBackgroundImg()
}
function mouseDragged(){

	Matter.Body.setPosition(Polygon.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){

	Matter.Body.setPosition(Polygon.body, {x:mouseX,y:mouseY})
}
function mouseReleased(){

    Rope.fly()
  }

  function keyPressed(){
    if (keyCode===32){

        Matter.Body.setPosition(Polygon.body, {x:100,y:600})
        Rope.attach(Polygon.body)
      
      }


  }
  async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "back2.jpg";
    }
    else{
        bg = "back1.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}