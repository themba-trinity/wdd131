const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector("#menuButton");
    const navMenu = document.querySelector("nav ul");

    hamburgerBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburgerBtn.classList.toggle("active");
    });
});




const hotspots = [
    { id: 1, name: "V&A waterfront", category: "play", image: "image/", description: "Shopping and harbor view for everyone." },
    { id: 2, name: "Bo-kaap", category: "solo", image: "image/", description: "Colorful houses and Cape Malay culture." },
    { id: 3, name: "Two Oceans Aquarium", category: "Family", image: "image/", description: "Rainy day indoor activity for kids." },
    { id: 4, name: "Kloof street Coffee", category: "Solo/group", image: "image/", description: "Best Coffee Shops." },
    { id: 5, name: "Boulders beach Penguins", category: "Family", image: "image/", description: "See African Penguins." }
];

function renderHotspots(category = "all") {
    const container = document.getElementById("hotspotsContainer");
    if (!container) return;

    const filtered = category === "all"
        ? hotspots
        : hotspots.filter(h => h.category === category);

    container.innerHTML = "";

    filtered.forEach(hotspots => {
        const card =
            <div class="card">
                <img src="${hotspots.image}" alt="${hotspots.name}" loading="lazy"></img>
                <div class="card-container">
                    <h3>${hotspots.name}</h3>
                    <p>${hotspots.description}</p>
                    <button onClick="saveFavorites">save</button>

                </div>
            </div>
        container.innerHTML += card;
    });
}

function handleStorage(type, data) {
    if (type === "favorites") {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.includes(data)) {
            favorites.push(data);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("saved to Favorites");
        } else {
            alert("Already saved in Favorites.")
        }
    }
    if (type === "newsLetter") {
        let Subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
        if (!subscribers.includes(data)) {
            subscribers.push(data);
            localStorage.setItem("subscribers", JSON.stringify(subscribers));
            return true;
        } else {
            return false;
        }
    }
}
function saveFavorite(id) {
    handleStorage("favorites", data);
}

document.getElementById("filterButtons")?.addEventListener("click", (e) => {
    if (e.target.tagName === "Button") {
        document.querySelectorAll("#filterButton button").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderHotspots(e.target.dataset.filter);
    }
});

document.getElementById("newsLetter")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsLetterEmail");
    const messageEl = document.getElementById("subscriberMessage");
    const email = emailInput.ariaValueMax.trim();
    const success = handleStorage("newsLetter", email);

    if (success) {
        messageEl.textContent = "Thanks! You are subscribed for weekly events.";
        messageEl.style.color = "green";
        e.target.reset();
    } else {
        messageEl.textContent = "This email is already subscribed."
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderHotspots("all");
});