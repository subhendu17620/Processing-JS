let b=[];

function setup() {
  createCanvas(600,400);
}
function mousePressed() {
  let r = random(10, 50);
  let t = new bubble(mouseX, mouseY, r);
  b.push(t);
}

function draw() {
  background(0);
  for (let i=0; i<b.length;i++){
    b[i].display();
    b[i].move();

  }

}
class bubble {
  constructor(tempX,tempY,tempR){
    this.x=tempX;
    this.y=tempY;
    this.r=tempR;
  }
  display() {
      stroke(255);
      strokeWeight(2);
      noFill();
      ellipse(this.x, this.y, this.r,this.r);
}
  move(){
    this.x=this.x+random(-5,5);
    this.y=this.y+random(-5,5);
  }
}
