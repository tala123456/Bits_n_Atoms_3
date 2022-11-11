console.log('Loading data...');

let table;

// const canvasWidth = window.innerWidth;
// const canvasHeight = 6000; // ⚠️ size limit if too long

// for clouds
let cloudx = 100;
let cloudy = 100;

// for font 
let myFont;


// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
  myFont = loadFont('assets/PlayfairDisplay/PlayfairDisplay-Black.ttf'); 
}

// map()

function setup() {
  createCanvas(1000, 1000);
  background('#D4B8B1');

  const barMargin = 10;
  const barHeight = 30;

  // count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

  for (let i = 0; i < table.getColumn('current_city').length; i++) {
    const city = table.get(i, 'current_city');
    console.log(city);
    const wettestMonth = table.get(i, 'Precipitation_of_Wettest_Month');
    const futurewettestMonth = table.get(i, 'future_Precipitation_of_Wettest_Month');

    // const change = table.get(i, )

    console.log("WETTEST MONTH: ", wettestMonth);
    console.log("FUTURE WETTEST MONTH", futurewettestMonth);

    
    // console.log(change);

      
       

    var circleSize = map(wettestMonth, 
                         56, // lowest from all
                         178, // highest from all
                         20, // smallest circle
                         130); // largest circle

   // fill ('#2EDFF2'); 
   // noStroke()
   // ellipse(120, 100 + 100 * i, circleSize);
    
    
    // var change =  futurewettestMonth / wettestMonth

    // const change = table.get(i, "rel_change_Precipitation_of_Wettest_Month");

    var circleSize2 = map(futurewettestMonth, 
      56, // lowest from all
      178, // highest from all
      20, // smallest circle
      130); // largest circle

    

    // console.log(wettestMonth * change)
    fill ('#D4B8B1');
    noStroke();
  //  ellipse(220, 100 + 100 * i, circleSize2);
    //ellipse(240, 120 + 100 * i, circleSize2 * 1.75);
   // ellipse(230, 90 + 100 * i, circleSize2 * 1.5);
   

 
   // cloud function
   fill(205, 140, 140, 150);
   makeCloud(120, 100 + 100 * i, circleSize);
   
    fill(83, 51, 31, 150);
    makeCloud(220, 100 + 100 * i, circleSize2);
    
    noStroke();




    push();
    textFont(myFont);
    textSize(18);
    fill ('black');
      text(city, 
           135,
           90 + 100 * i, 
           80, 
           30);
           pop(); 
   
  }

}

function draw() {
  // const meanTemps = table.getColumn('Annual_Mean_Temperature');
  // const annualTemp = table.getColumn('future_Annual_Precipitation');


  



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