console.log('Loading data...');

let table;

// const canvasWidth = window.innerWidth;
// const canvasHeight = 6000; // ⚠️ size limit if too long

// for clouds
let cloudx = 100;
let cloudy = 100;
let _scale = 1;


// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
  
}

// map()

function setup() {
  createCanvas(1000, 1000);

  const barMargin = 10;
  const barHeight = 30;

  // count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

  for (let i = 0; i < 4; i++) {
    const city = table.get(i, 'current_city');
    const wettestMonth = table.get(i, 'Precipitation_of_Wettest_Month');
    const futurewettestMonth = table.get(i, 'future_Precipitation_of_Wettest_Month');

    // const change = table.get(i, )

    console.log("WETTEST MONTH: ", wettestMonth);
    console.log("FUTURE WETTEST MONTH", futurewettestMonth);

    
    // console.log(change);

    text(city, 
         20,
         100 + 100 * i, 
         80, 
         30);

    var circleSize = map(wettestMonth, 
                         56, // lowest from all
                         178, // highest from all
                         20, // smallest circle
                         130); // largest circle


    ellipse(120, 100 + 100 * i, circleSize);
    // var change =  futurewettestMonth / wettestMonth

    // const change = table.get(i, "rel_change_Precipitation_of_Wettest_Month");

    var circleSize2 = map(futurewettestMonth, 
      56, // lowest from all
      178, // highest from all
      20, // smallest circle
      130); // largest circle
    // console.log(wettestMonth * change)
    ellipse(220, 100 + 100 * i, circleSize2);
    ellipse(240, 120 + 100 * i, circleSize2 * 1.75);
    ellipse(230, 90 + 100 * i, circleSize2 * 1.5);

    // makeCloud(120, 100 + 100 * i, circleSize);
    // fill(159, 115, 171);
    // makeCloud(220, 100 + 100 * i, circleSize2)
    // fill(63, 59, 108);
    // noStroke();
    
  }

}

function draw() {
  // const meanTemps = table.getColumn('Annual_Mean_Temperature');
  // const annualTemp = table.getColumn('future_Annual_Precipitation');


  



}

// function to make clouds out of ellipse
function makeCloud(cloudx, cloudy, _scale) {
  //fill(63, 59, 108);
  noStroke();
  ellipse(cloudx, cloudy, _scale*70, _scale);
  ellipse(cloudx + 10, cloudy + 10, _scale, _scale);
  ellipse(cloudx - 20, cloudy + 10, _scale, _scale);
}