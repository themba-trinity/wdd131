const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector("#menuButton");
    const navMenu = document.querySelector("#navigation");
    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburgerBtn.classList.toggle("active");

        if (navMenu.classList.contains("show")) {
            hamburgerBtn.textContent = "x";
        } else {
            hamburgerBtn.textContent = "";
        }
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Durban South Africa Temple",
        location: "Durban South Africa",
        dedicated: "2020, February, 16",
        area: "14.49-acres",
        imageUrl: "https://www.churchofjesuschrist.org/imgs/8b3f1b895a7c92ee66c2d0c7e78606f75f0d0cc8/full/640%2C/0/default"
    },
    {
        templeName: "johannesburg South Africa Temple",
        location: "Johannesburg South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://www.bing.com/th/id/OLC.B6bt6T9UvzfIzw480x360?w=222&h=200&c=8&rs=1&qlt=90&cdv=1&dpr=1.5&pid=Local"
    },
    {
        templeName: "Christian Church in Cape Town",
        location: "Cape Town South Africa",
        dedicated: "1850",
        area: 12000,
        imageUrl: "https://dyn.mktgcdn.com/p/-FMcYSkNmWf--u2NVtubjG04gd_kY3s9g-06yPDYXXg/width=1920,height=1130"
    }
];

createTempleCard();
function displayTemples() {
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p")
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} temple`);
        img.setAttribute("loading", "lazy")

        card.appendChild(name);
        card.append(location);
        card.append(dedication);
        card.append(area);
        card.append(img);

        document.querySelector(".temple-grid").appendChild(card);
    });
}

function filterOld() {
    displayTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));
    document.querySelector("#pageTitle").textContent = "Old Temples";
}
function filterNew() {
    displayTemples(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000
    }));
    document.querySelector("#pageTitle").textContent = "New Temples";

}
function filterLarge() {
    displayTemples(temples.filter(temple => temple.area > 90000));
    document.querySelector("#pageTitle").textContent = "Large Temples";
}
function filterSmall() {
    displayTemples(temples.filter(temple => temple.area < 10000));
    document.querySelector("#pageTitle").textContent = "Small Temples";
}
function showAll() {
    displayTemples(temples);
    document.querySelector("#pageTitle").textContent = "Home";
}
document.querySelector("#home").addEventListener("click", e => { e.preventDefault(); showAll(); });
document.querySelector("#old".addEventListener("click"), (e) => { e.preventDefault(); filterOld(); })
document.querySelector("#new".addEventListener("click"), (e) => { e.preventDefault(); filterNew(); })
document.querySelector("#large".addEventListener("click"), (e) => { e.preventDefault(); filterLarge(); })
document.querySelector("#small".addEventListener("click"), (e) => { e.preventDefault(); filterSmall(); })

showAll();