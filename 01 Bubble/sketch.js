
let b1; // declaring class object
let b2;

function setup(){
createCanvas(400,600);

b1=new bubble(200,200,25); //creating new class object
b2=new bubble(300,300,40);
}

function draw(){
background(8,0,0); // black background

b1.create();
b1.move();
b2.create();
b2.move();
}

class bubble {
  constructor(tempX,tempY,tempR){
    this.x=tempX;
    this.y=tempY;
    this.r=tempR;
  }
  create(){
    noFill();
    stroke(255,255,255);
    strokeWeight(2);
    ellipse(this.x,this.y,this.r,this.r);
  }
  move(){

    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);

  }
}
