let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('assets/future_cities_data.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/mammals.csv",
  //                  "csv", "header");
}

function setup() {
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('future_city_2_source')); // gewünschte Daten werden Displayed in console.log

  

}

function draw (){
  drawTemperaturePoints();
  

  //   for (let c = 0; c < table.getColumn('future_Annual_Precipitation'); r++) 
  //   for (let c = 0; c < table.getColumn('current_city');  r++)
  //     print(table.getString(r));
  
  
  
  // let m = map(table.getColumn('Annual_Mean_Temperature'), 0, 100, 0, width);
  // ellipse(m, 50, 10, 10);

}

function drawTemperaturePoints() {
  const meanTemps = table.getColumn('Annual_Mean_Temperature');
  const annualTemp = table.getColumn('future_Annual_Precipitation');
  console.log(meanTemps)
  

  // annual Mean Teamperature
  for (let r = 0; r < meanTemps.length; r++) {
    const temp = meanTemps[r];
    const pixels = convertDegreesToPixels(temp);
    console.log(temp, pixels);

    circle(10, pixels, 10);
  }
  // future annual precepitation
  for (let c = 0; c < annualTemp.length; c++) {
    const futuretemp = annualTemp[c];
    
    console.log (futuretemp, pixels);
  }

}

function convertDegreesToPixels(temp) {
  const pixels = map(temp, 0, 50, 200, 30);
  return pixels;
}
function convertDegreesToPixels(futuretemp) {
  const pixels = map(temp, 0, 50, 200, 30);
  return pixels;
}