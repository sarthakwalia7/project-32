const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png" ;
var hour;
function preload() {
    // create getBackgroundImg( ) here
   
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

    if(backgroundImg){
        background(backgroundImg);
    }
Engine.update(engine);
fill("black");
 textSize(30);
  if(hour>=12){ text("Time : "+ hour%12 + " PM", 50,100);
 }else if(hour==0){ text("Time : 12 AM",100,100);
 }else{ text("Time : "+ hour%12 + " AM", 50,100);
 }

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
var responsejson=await response.json();
var daytime=responsejson.datetime;
 hour=daytime.slice(11,13);


if(hour>=00 && hour<=18){
    bg="sunrise1.png";
}
else {
    bg="sunset7.png";
}

backgroundImg=loadImage(bg);
}
