// Info for each region
const regionDetails = {
    "The North": {
        title: "The North",
        description:
            "The largest region of Westeros, ruled by House Stark from Winterfell. Cold, vast, honorable, and fiercely loyal."
    },
    "Winterfell": {
        title: "Winterfell",
        description:
            "The ancient stronghold of House Stark. One of the most iconic castles in Westeros and central to many events in the story."
    },
    "The Riverlands": {
        title: "The Riverlands",
        description:
            "A fertile and heavily contested area ruled by House Tully. Known for battles, betrayals, and political tension."
    },
    "King's Landing": {
        title: "King's Landing",
        description:
            "Capital of the Seven Kingdoms and home of the Iron Throne. Known for the Red Keep, the Great Sept, and endless political intrigue."
    },
    "Dorne": {
        title: "Dorne",
        description:
            "The southernmost region, ruled by House Martell from Sunspear. Hot climate, unique customs, and fierce independence."
    }
};

// Get UI elements
const titleElement = document.getElementById("region-title");
const descriptionElement = document.getElementById("region-description");

// Add click behavior to each region label
document.querySelectorAll(".region").forEach(region => {
    region.addEventListener("click", () => {
        const name = region.getAttribute("data-name");
        const details = regionDetails[name];

        if (details) {
            titleElement.textContent = details.title;
            descriptionElement.textContent = details.description;
        }
    });
});
