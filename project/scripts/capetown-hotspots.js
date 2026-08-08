
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
const starRating = document.getElementById("starRating");
const starRatingValue = document.getElementById("starRatingValue");
let selectedRating = 0;
starRating.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) {
        selectedRating = e.target.dataset.value;
        starRatingValue.textContent = selectedRating;
        highlightStars(selectedRating);
    }
});

function highlightStars(value) {
    document.querySelectorAll(".star-rating .star").forEach((star, index) => {
        star.classList.toggle("active", index < value);
    });
}

const reviewForm = document.getElementById("reviewForm");
const reviewResponse = document.getElementById("reviewResponse");

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const reviewText = document.getElementById("reviewMessage").value;

    if (selectedRating === 0) {
        reviewResponse.textContent = "Please select a star rating before submitting.";
        reviewResponse.style.color = "red";
        return;
    }

    reviewResponse.textContent = `✅ Thank you! You rated ${selectedRating}/5 and wrote: "${reviewText}"`;
    reviewResponse.style.color = "green";

    reviewForm.reset();
    document.querySelectorAll(".star-rating .star").forEach(s => s.classList.remove("active"));
    selectedRating = 0;
    starRatingValue.textContent = 0;
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll("#filterButtons button");
    const cards = document.querySelectorAll(".grid-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            cards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
const hotspots = [
    { id: 1, name: "V&A Waterfront", category: "Play", image: "images/waterfront.jpg", description: "Shopping and harbor views for everyone." },
    { id: 2, name: "Bo-Kaap", category: "Solo", image: "images/bo-kaap.jpg", description: "Colorful houses and Cape Malay culture." },
    { id: 3, name: "Two Oceans Aquarium", category: "Family", image: "images/aquarium.jpg", description: "Indoor activity for kids on rainy days." },
    { id: 4, name: "Kloof Street Coffee", category: "Eat", image: "images/kloof-coffee.jpg", description: "Best coffee shops in Cape Town." },
    { id: 5, name: "Boulders Beach Penguins", category: "Family", image: "images/boulders-beach.jpg", description: "See African Penguins in their natural habitat." }
];
function renderHotspots(category = "all") {
    const container = document.getElementById("hotspotsContainer");
    if (!container) return;

    const filtered = category === "all"
        ? hotspots
        : hotspots.filter(h => h.category.toLowerCase() === category.toLowerCase());

    container.innerHTML = "";

    filtered.forEach(h => {
        const card = `
      <div class="grid-card" data-category="${h.category}">
        <img src="${h.image}" alt="${h.name}" loading="lazy">
        <div class="card-container">
          <h3>${h.name}</h3>
          <p>${h.description}</p>
          <button onclick="saveFavorite('${h.name}')">Save</button>
        </div>
      </div>
    `;
        container.innerHTML += card;
    });
}
function handleStorage(type, data) {
    if (type === "favorites") {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.includes(data)) {
            favorites.push(data);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert("Saved to Favorites!");
        } else {
            alert("Already in Favorites.");
        }
    }

    if (type === "newsletter") {
        let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];
        if (!subscribers.includes(data)) {
            subscribers.push(data);
            localStorage.setItem("subscribers", JSON.stringify(subscribers));
            return true;
        } else {
            return false;
        }
    }
}
function saveFavorite(name) {
    handleStorage("favorites", name);
}
document.getElementById("filterButtons")?.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        document.querySelectorAll("#filterButtons button").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderHotspots(e.target.dataset.filter);
    }
});
document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsLetterEmail");
    const messageEl = document.getElementById("subscribeMessage");
    const email = emailInput.value.trim();

    const success = handleStorage("newsletter", email);

    if (success) {
        messageEl.textContent = "Thanks! You are subscribed for weekly events.";
        messageEl.style.color = "green";
        e.target.reset();
    } else {
        messageEl.textContent = "This email is already subscribed.";
        messageEl.style.color = "red";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    renderHotspots("all");
});
