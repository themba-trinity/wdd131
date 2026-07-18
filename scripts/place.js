const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const temp = 13;
const windSpeed = 3;

function calculateWindChill(t, s) {
    return (windChill);
}
const windChillElement = document.getElementById("windchill");
if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = "${calculateWindChill(temp, windSpeed)}celsius";
} else {
    windChillElement.textContent = "N/A";
}