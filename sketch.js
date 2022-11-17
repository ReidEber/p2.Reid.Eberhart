let capture;
var weather;
let table;
let count = 0;
let colorIt = false;

function setup() {
  
  createCanvas(700, 600);
  capture = createCapture(VIDEO);
  capture.size(700, 600);
  capture.hide();
var url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.58522&lon=-101.87141&appid=95f7b09e920f7a05934993ce1ad933b1'
 
loadJSON(url,gotData);

  table = loadTable('Personal Calendar.csv', 'csv','header');
  tableNews = loadTable('News.csv', 'csv', 'header');
  weight = loadTable('WeightChecker.csv', 'csv', 'header');
  
}

function gotData(data)
  {
    weather = data;
  }




function draw() {
  //background(255);
  
  push();
  translate(width, 0);
  scale(-1, 1);
  image(capture, 50, 0, 650, 650);
  pop();
  fill(255,255,255);
  rect(0, 0, 230, 100);
  square(0, 200, 150);
  square(0, 450, 150);
  circle(600, 50, 60);
  
  //square(7, 30, 35);
  //square(57, 30, 35);
  //square(107, 30, 35);
  //square(31, 90, 35);
  //square(83, 90, 35);
  //rect(280, 600, 100, 50);
  fill(0,0,0);
  textSize(20);
  //text('Toggle off\n      info', 286, 620)

  let h = hour();
  let m = minute();
  let s = second();
  textSize(50);
  textFont('Times New Roman');
  if (h == 0) {
    h = 12
    if (m >= 10) {
      text(h + ':' + m + ' AM', 250, 50);
    }
    else {
      text(h + ':0' + m + ' AM', 250, 50);
    }
  }
  else if (h < 12 && h != 0) {
    if (m >= 10) {
      text(h + ':' + m + ' AM', 250, 50);
    }
    else {
      text(h + ':0' + m + ' AM', 250, 50);
    }
  }
  else {
    h = h - 12;
    if (m >= 10) {
      text(h + ':' + m + ' PM', 250, 50);
    }
    else {
      text(h + ':0' + m + ' PM', 250, 50);
    }
  }
if(weather)
  {
    textSize(20);
   text('Temp:' + round((weather.main.temp - 273.15)*(9/5)+32,2) + 'F', 5, 480);
   text('Feels like:' +round((weather.main.feels_like - 273.15)*(9/5)+32,2) + 'F', 5, 510);
   text(weather.weather[0].main, 5, 540);
   text(weather.weather[0].description, 5, 570);
  }
  textSize(10);
  if(table)
{
 for (let x = 0; x < table.getRowCount(); x++)
   {
    for (let y = 0; y < table.getColumnCount(); y++) {
      text(table.getString(x, y), 
            2 + y * 24, 215 + (x * 20));
    }
   }
}
  textSize(20);
  text('Recent News', 2, 16);
  textSize(10);
  if(tableNews)
    {
    for (let r = 0; r < tableNews.getRowCount(); r++)
   {
    for (let m = 0; m < tableNews.getColumnCount(); m++) {
      text(tableNews.getString(r, m), 
            2 + m * 24, 30 + (r * 20));
    }
   }
    }
  
  text('Last week average weight,Today Weigh in', 280, 60);
if(weight)
  {
for (let o = 0; o < weight.getRowCount(); o++)
   {
    for (let p = 0; p < weight.getColumnCount(); p++) {
      text(weight.getString(o, p), 
            310 + p * 80, 80 + (o * 20));
    }
   }
  }
if(count == 0)
    {
     fill(0,0,255);
      circle(600, 50, 60);
     
      //colorIt = false;
    }
   else if(count == 1)
    {
            fill(0,255,0);
      circle(600, 50, 60);

      //colorIt = false;
    }
   else if(count == 2)
    {
            fill(0,200,255);
      circle(600, 50, 60);

      //colorIt = false;
    }
    else if(count == 3)
    {
          fill(10,240,205);
      circle(600, 50, 60);
        
      //colorIt = false;
    }
if(colorIt == true)
   {
   if(count == 0)
    {
     fill(0,0,255);
      circle(600, 50, 60);
      count++;
      colorIt = false;
    }
   else if(count == 1)
    {
            fill(0,255,0);
      circle(600, 50, 60);
      count++;
      colorIt = false;
    }
   else if(count == 2)
    {
            fill(0,200,255);
      circle(600, 50, 60);
      count++;
      colorIt = false;
    }
    else if(count == 3)
    {
          fill(10,240,205);
      circle(600, 50, 60);
      count = 0;   
      colorIt = false;
    }
}
}

//circle(600, 50, 60);
function mouseClicked()
{
  fill(0,0,255);
  let horizontal = mouseX;
  let vertical = mouseY;
  if((horizontal >= 570 && horizontal <= 630) && (vertical >= 20 && vertical <= 80))
    { 
    
  
    //fill(255,255,255);
      colorIt = true;
    }


}
