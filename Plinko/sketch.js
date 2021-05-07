const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions =[];
var divisionHeight =300;




function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   
     ground=new Ground(400,790,800,20)
     for (var k=0;k<=width ; k=k+80){
      divisions.push( new Division (k,height-divisionHeight/2,10,divisionHeight))
    }
    for (var j=75;j<=width ; j=j+50){
      plinkos.push( new Plinko (j,75))
    }
    for (var j=15;j<=width-10 ; j=j+50){
      plinkos.push( new Plinko (j,175))
    }
    for (var j=75;j<=width ; j=j+50){
      plinkos.push( new Plinko (j,275))
    }
    for (var j=50;j<=width-10 ; j=j+50){
      plinkos.push( new Plinko (j,375))
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    for (var a=0;a<plinkos.length ; a++){
      console.log ("working")
      plinkos[a].display();
    }
    if (frameCount%90===0){
      particles.push( new particles (random(width/2-30,width/2+30),10,10))
    }
    for (var k=0;k<divisions.length ; k++){
      divisions[k].display();
    }
    for(var j =0;j<particles.length;j++){
      particles[j].display();
    }
 for( var k=0, k < divisions.length;k++){
   divisions[k].display();
 }
    
    
    ground.display();
   
    

   
}