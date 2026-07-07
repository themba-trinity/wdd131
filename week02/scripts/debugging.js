const radiusOutPut = document.getElementById("radius");
const areaOutPut = document.querySelector("area");

let area = 0;
const PI = 3.14139;
let radius = 10;
area = PI * radius * radius;
radiusOutPut.textContent = radius;
areaOutPut.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutPut.innerHTML = radius;
areaOutPut.innerHTML = area;