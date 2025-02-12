const dataLocation = '/Data/news.json'
let currentVisibleId = null;

// Function to fetch and populate titles from the JSON file
function fetchAndPopulateTitles() {
    return new Promise((resolve, reject) => {
        fetch(dataLocation) // Fetch the JSON file
            .then(response => response.json()) // Parse the JSON response
            .then(jsonData => {
                populateTitles(jsonData);
                resolve();  // Resolve the promise once the data has been populated
            })
            .catch(error => {
                console.error('Error loading JSON:', error);
                reject(error);  // Reject the promise in case of error
            });
    });
}

// Function to populate titles and IDs in the content div
function populateTitles(jsonData) {
    const contentDiv = document.getElementById("ourDocuments");
    contentDiv.innerHTML = ""

    // Sorts the json by ID
    jsonData.sort((a, b) => b.id - a.id);

    // Loop through each item in JSON data
    jsonData.forEach(item => {
        const pElement = document.createElement("p");
        pElement.classList.add("sourceChoice");
        pElement.id = item.id;

        // If the item is external, use the external link and logo
        if (item.external) {
            const imgElement = document.createElement("img");
            imgElement.src = item.logo || "pictures/otherLogos/mini-unknown.png"; // Add default if logo is missing
            imgElement.alt = "E";
            pElement.appendChild(imgElement);

            pElement.innerHTML += ` ${item.title}`;
            pElement.setAttribute("onclick", `window.open('${item.link}', '_blank')`);
        } else {
            const imgElement = document.createElement("img");
            imgElement.src = "pictures/mainLogos/swim-360Logo.png";
            imgElement.alt = "S";
            pElement.appendChild(imgElement);

            pElement.innerHTML += ` ${item.title}`;
            pElement.setAttribute("onclick", `toggleDocumentEmbed(${item.id})`);
        }

        // Append the created paragraph to the content div
        contentDiv.appendChild(pElement);
    });
}

// Toggle the embedded document display based on the selected ID
function toggleDocumentEmbed(id) {
    const embedFrame = document.querySelector(".documentEmbed iframe");
    const embedDiv = document.querySelector(".documentEmbed");

    // Check if the clicked ID matches the current visible ID
    if (currentVisibleId === id) {
        // If the IDs match, hide the embed
        embedDiv.style.display = "none";
        currentVisibleId = null; // Reset the visible ID
        return; // Exit early if we want to hide the embed
    }

    // Find the corresponding item by ID
    fetch(dataLocation) // Re-fetch the JSON file to find the correct item
        .then(response => response.json())
        .then(jsonData => {
            const item = jsonData.find(item => item.id === id);

            if (item && !item.external) {
                embedFrame.src = item.link; // Set the iframe source to the selected document link
                embedDiv.style.display = "block"; // Show the embedded document
                currentVisibleId = id; // Update the current visible ID
            }
        })
        .catch(error => {
            console.error('Error fetching JSON for embed:', error);
        });
}

function highlightPaper(idToHighlight) {
    // Highlight the paragraph with id "1"
    const elementToHighlight = document.getElementById(idToHighlight);
    elementToHighlight.classList.add("highlight");

    // Add event listener to remove highlight when hovered over
    elementToHighlight.addEventListener('mouseenter', function () {
        elementToHighlight.classList.remove("highlight");
    });
}

window.onload = async function () {
    try {
        // Wait until fetchAndPopulateTitles is complete
        await fetchAndPopulateTitles();

        // Check if the URL contains the query parameter "openSource"
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.has('openSource')) {
            var urlParam = urlParams.get('openSource');

            switch (urlParam) {
                case '0':
                    toggleDocumentEmbed(); // Call the function if the condition is met
                    break;

                default:
                    try {
                        highlightPaper(urlParam); // Try to call highlightPaper
                    } catch (error) {
                        console.log("Invalid Paper ID Sent.");
                    }
                    break;
            }
        }
    } catch (error) {
        console.error("Error during initialization:", error);
    }
};

