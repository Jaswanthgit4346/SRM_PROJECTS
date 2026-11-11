
/* =====================================
   SRM SMART CAMPUS NAVIGATOR
   Main JavaScript
===================================== */

// Get HTML elements

const searchInput = document.getElementById("search");
const placeCards = document.querySelectorAll(".place-card");
const noResults = document.getElementById("noResults");


// =====================================
// 1. Search Campus Locations
// =====================================

function searchPlaces() {

    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    let visibleCount = 0;

    placeCards.forEach(card => {

        const placeName = card.getAttribute("data-name");

        if (placeName.includes(searchValue)) {

            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });

    // Display message if no locations match

    noResults.style.display =
        visibleCount === 0 ? "block" : "none";

}


// Search whenever the user types

searchInput.addEventListener("input", searchPlaces);


// =====================================
// 2. Google Maps Navigation
// =====================================

function navigate(place) {

    const url =
        "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(place);

    window.open(url, "_blank", "noopener,noreferrer");

}


// Add navigation events to all buttons

const directionButtons = document.querySelectorAll(
    ".place-card button"
);

directionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const place = button.getAttribute("data-place");

        navigate(place);

    });

});


// =====================================
// 3. Website Initialization
// =====================================

console.log("SRM Smart Campus Navigator loaded successfully!");
console.log("Campus locations available:", placeCards.length);
