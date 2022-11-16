var drop = [];
let slider;

function setup(){
    //rain
    drop = new Drop();

    for (var i = 0; i < 100; i++) {
        drop[i] = new Drop();

    }

    //slider
    slider = createSlider(10, 50);
    slider.position(10, 10);
    slider.style('width', '80px');
  

}


function draw() {
    background(100);
   
    for (var i = 0; i < 100; i++) {
         drop[i].show();
         drop[i].rain(slider.value());

    }


}
 
function Drop() {
    this.x = random (0, width);
    this.y = random (0, -height);

    this.show = function() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, (this.size = random (2, 4)), (this.size = random (8, 10)));

    }

    this.rain = function(slider) {
        this.slider = slider;
        this.speed = slider;
        this.y = this.y + this.speed;


        if (this.y > height) {
            this.y = random (0, -height);

        }

    }
}