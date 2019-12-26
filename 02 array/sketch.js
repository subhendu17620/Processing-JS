var array=['this','are','array','elements'];
var index=0;

function setup(){
  createCanvas(500,500);
}
function draw() {
  background(31);

  // rect(20,20,20,20);
  fill(255,200,0);
  text(array[index],40,40);
}

function mousePressed() {
  if (mouseIsPressed){
    index++;
  }

  if (index == array.length){
    index=0;
  }
}
