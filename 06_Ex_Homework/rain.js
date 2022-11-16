var drop = [];

function setup(){
    createCanvas(windowWidth, windowHeight);
    drop = new Drop();

    for (var i = 0; i < 100; i++) {
        drop[i] = new Drop();

    }

}


function draw() {
    background(100);
   
    for (var i = 0; i < 100; i++) {
         drop[i].show();
         drop[i].update();

    }
}
 
function Drop() {
    this.x = random (0, width);
    this.y = 30;

    this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 2, 10);

    }

    this.update = function() {
        this.y = this.y + 8;

        if (this.y > height) {
            this.y = 0;

        }

    }
}