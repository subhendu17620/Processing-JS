let b=[]

function setup() {
  createCanvas(600, 400);
for  (var i=0;i<4;i++){
  b[i]=new bubble(200,200,20);
}

}

function draw() {
  background(0);
  for  (let i=0;i<4;i++){
    b[i].move();
    b[i].show();
  }
}

class bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    noFill();
    // nostroke();
    // fill(20,20,0,4);
    ellipse(this.x, this.y, this.r);
  }
}
