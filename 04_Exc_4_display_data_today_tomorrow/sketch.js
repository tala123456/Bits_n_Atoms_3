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
  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');

  print(table.getColumn('future_city_2_source')); // gewünschte Daten werden Displayed in console.log
  //["Goat", "Leopard", "Zebra"]
  /*
  //cycle through the table
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      print(table.getString(r, c));
    }
    */

 /* describe(`randomly generated text from a file,
    for example "i smell like butter"`);*/
    print(table.getString(2, 2)); // for loading a specific cell :)
  }