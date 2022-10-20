let data = [100, 200, 100, 300, 250]

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
  }
  
  function draw() {
    background(28, 27, 40);
    noStroke();
    fill(140, 140, 244);
 
    for (let i = 0; i < data.length; i++) {
      rect(i * 80+40, height/2, 55, data[i]); // pos x, posy, breite, höhe

  }
}
  

