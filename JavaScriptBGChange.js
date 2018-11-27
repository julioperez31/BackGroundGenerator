var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button1=document.getElementById("g1");
css.textContent="LINEAR-GRADIENT(TO RIGHT, RGB(255, 0, 0), RGB(255, 255, 0));";

css.textContent.onstart = body.style.background+";"
function colors(){
body.style.background="linear-gradient(to right, " +color1.value+", "+color2.value+")";
css.textContent = body.style.background+";"
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function Randomcolors(){
body.style.background="linear-gradient(to right, " +getRandomColor()+", "+getRandomColor()+")";
css.textContent = body.style.background+";"}

color1.addEventListener("input", colors);
color2.addEventListener("input", colors);
button1.addEventListener("click", Randomcolors); 
 