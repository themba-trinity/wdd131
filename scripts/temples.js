const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;

const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("navMenu");

hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show")
});

if (navMenu.classList.contains("show")) {
    hamburgerBtn.textContent = "x";
}