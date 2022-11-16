console.log('Loading data...');

let table;


// for clouds
let cloudx = 100;
let cloudy = 100;

// for font 
let myFont;

// for rain & slider
var drop = [];
let slider;


// load table
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
  myFont = loadFont('assets/Courier_Prime/CourierPrime-Bold.ttf'); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#373737');

  const barMargin = 10;
  const barHeight = 30;

   //rain
   drop = new Drop();

   for (var i = 0; i < 100; i++) {
       drop[i] = new Drop();

   }

   //slider
   slider = createSlider(6, 13, 6); // last number is for starting position
   slider.position(20, 40);
   slider.style('width', '80px');
   slider.style('background', '#5500cc')
 



  // count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

}

function draw() {
  
  // for drawing rain
  background(100);
    for (var i = 0; i < 100; i++) {
         drop[i].show();
         drop[i].rain(slider.value());

    }


    // for acess data table
    for (let i = 0; i < table.getColumn('current_city').length; i++) {
      const city = table.get(i, 'current_city');
      console.log(city);
      const wettestMonth = table.get(i, 'Precipitation_of_Wettest_Month');
      const futurewettestMonth = table.get(i, 'future_Precipitation_of_Wettest_Month');
  
      // const change = table.get(i, )
  
      console.log("WETTEST MONTH: ", wettestMonth);
      console.log("FUTURE WETTEST MONTH", futurewettestMonth);
  
      
      // console.log(change);
  
        
      // map actual precipitation 
      var circleSize = map(wettestMonth, 
                           56, // lowest from all
                           178, // highest from all
                           20, // smallest circle
                           130); // largest circle
  
     
      // map future precipitation 
      var circleSize2 = map(futurewettestMonth, 
        56, // lowest from all
        178, // highest from all
        20, // smallest circle
        130); // largest circle
  
      
  
      // console.log(wettestMonth * change)
      fill ('#D4B8B1');
      noStroke();
  
    
     fill(252, 230, 148, 150);
     makeCloud(width/2-50, 100 + 100 * i, circleSize);
     
      fill(193, 219, 227, 150);
      makeCloud(width/2+50, 100 + 100 * i, circleSize2);
      
      noStroke(); 
  
      textFont(myFont);
      textSize(18);
      textAlign(CENTER);
      fill ('white');
        text(city, 
             width/2-40,
             90 + 100 * i, 
             80, 
             30);
     
    }
    // title
    textSize (25);
    text ('actual and future Precipitation'.toUpperCase(), windowWidth/2, 40)
  
    textAlign(LEFT);
    textSize (12);
    text ('rain speed', 24, 30)
  

}

// function to make clouds out of ellipse
function makeCloud(cloudx, cloudy, size) {
  //fill(63, 59, 108);
  noStroke();
  ellipse(cloudx, cloudy, size, size);
  ellipse(cloudx + 10, cloudy + 0.2, size, size);
  ellipse(cloudx - 20, cloudy + 10, size, size);
  ellipse(cloudx - 10, cloudy -15, size, size);
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
      this.gravity = 1.05;
      this.y = this.y + this.speed*this.gravity;


      if (this.y > height) {
          this.y = random (0, -height);

      }

  }
}