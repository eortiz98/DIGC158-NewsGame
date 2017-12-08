var hit=false;
var img;
starsX=[];
starsY=[];
var count=70;
var time1=20;
var second=int(millis/1000);

function setup() {
  createCanvas(1000,1000)
    imageMode(CENTER);
    img=loadImage("recyclingtruck.png");
     for(var i=0;i<70;i++){
    starsX[i]=int(random(width));
    starsY[i]=int(random(width));
     }
  
}

function draw() {
  var currentTime=int(millis()/1000);
  if(currentTime>time1){
    background(255,0,0);
    textSize(50);
    text("GAMEOVER",350,500)
    textStyle(BOLD);
    textSize(25);
    text(" No matter how fast you try to pick up the garbage that is on the planet, \n there will always be more added to the pile.",15,700);
    textStyle(BOLD);
  }else{
  background(0);
  fill(0);
  //Creates a hit box so that the circles arent picked up at edge of picture 
  rect(mouseX-20,mouseY-20,50,40);
  //fill(69,0,0);
  //rect(0,height-100,width,100);
  image(img,mouseX,mouseY);
  for(var i=0;i<starsX.length;i++){
    starsX[i]=starsX[i]+int(random(-2,2));
    starsY[i]=starsY[i]+int(random(-2,2));
    fill(255);
    ellipse(starsX[i],starsY[i],15,15);
  }
    for (var a=0;a<starsX.length;a++){
  hit = collideRectCircle(mouseX-20,mouseY-20,50,40,starsX[a],starsY[a],15);
    if (hit){
      starsX[a]=-5;
      starsY[a]=-5;
      count--;
    }
    
  }
  if(count<10){
    recreateStars();
  }
  text(currentTime,20,20);
}
}
function recreateStars(){
       for(var i=0;i<70;i++){
    starsX[i]=int(random(width));
    starsY[i]=int(random(width));
     }
     count=70;
}