let requestedData;

let dataArray = [];
let dataMin;
let dataMax;

// Called once when the program starts just before setup().
// Use this to load external data, i.e. make your API calls here.
// See https://p5js.org/reference/#/p5/preload
function preload() {
  // Call RKI Covid-19 API
  requestedData = loadJSON('https://api.corona-zahlen.org/germany/history/cases/9');
}

// Called once when the program starts.
// See https://p5js.org/reference/#/p5/setup
function setup() {
  createCanvas(800, 800);

  // Log fetched data
  print("API data: ");
  print(JSON.stringify(requestedData, undefined, 2));

  // Extract JSON data into Array
  dataArray = new Array(requestedData.data.length);
  for(let i=0; i < requestedData.data.length; i++){
    dataArray[i] = requestedData.data[i].cases;
  }
  print(dataArray);

  // Analyse min and max in data
  dataMin = min(dataArray);
  dataMax = max(dataArray);
}




// Called over and over to refresh your visualisation.
// See https://p5js.org/reference/#/p5/draw
function draw() {
  // Visualize amount of cases as circles with normalized diameters
  background(0);
  for(let i=0; i < dataArray.length; i++){
    const diameter = map(dataArray[i], dataMin, dataMax, 20, 200);
    const x = 100*i;
    fill(255);
    if (dist(mouseX, mouseY, x, 400) <= diameter/2) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    circle(x, 400, diameter);
  }
}
