const boxes = document.querySelectorAll('.box');
const circles = document.querySelectorAll('.circle');
let currentIndex = 0;
let totalBoxes = boxes.length;
let changeBoxInterval;

// Initialize the first box to be visible
boxes[currentIndex].style.display = 'flex'; // Show the first box
circles[currentIndex].classList.add('active'); // Mark the first circle as active

// Hide all other boxes except the active one
function hideInactiveBoxes() {
    boxes.forEach((box, index) => {
        if (index !== currentIndex) {
            box.style.display = 'none'; // Hide inactive boxes
        }
    });
}

// Change box function (handles smooth transition)
function changeBox() {
    // Hide the current box
    boxes[currentIndex].style.display = 'none';

    // Update the active circle
    circles[currentIndex].classList.remove('active');

    // Move to the next box
    currentIndex = (currentIndex + 1) % totalBoxes;
    console.log("Current index: " + currentIndex);

    // Show the new box
    boxes[currentIndex].style.display = 'flex';

    // Add the active class to the new circle
    circles[currentIndex].classList.add('active');
}

// Function to jump to a specific box based on the circle clicked
function goToBox(index) {
    console.log("Box: " + index + " chosen.");

    // If the clicked circle is already active, do nothing
    if (index === currentIndex) return;

    // Hide the current box
    boxes[currentIndex].style.display = 'none';
    circles[currentIndex].classList.remove('active');

    // Update the index
    currentIndex = index;

    // Show the new box
    boxes[currentIndex].style.display = 'flex';

    // Update the circle
    circles[currentIndex].classList.add('active');

    // Reset the interval to restart the automatic change
    resetInterval();
}

// Add event listeners for each circle
circles.forEach((circle, index) => {
    circle.addEventListener('click', () => goToBox(index));
});

// Initially hide all boxes except for the current one
hideInactiveBoxes();

// Change boxes every 6 seconds
function resetInterval() {
    clearInterval(changeBoxInterval);
    changeBoxInterval = setInterval(changeBox, 6000);
}

resetInterval();

// Function to add more fish clones continuously
const fishContainer = document.getElementById('fish-container');
const fishElements = document.querySelectorAll('.fish');
let interval = 0.3

function cloneFish() {
    fishElements.forEach(fish => {
        // Clone each fish
        const clone = fish.cloneNode(true);
        fishContainer.appendChild(clone);

        // Set a new unique index for the cloned fish
        const fishIndex = fishContainer.children.length;
        clone.style.setProperty('--fish-index', fishIndex);

        // Randomize the start position (from 0% to 75%)
        const randomTop = Math.random() * 75; // Random value between 0 and 75
        clone.style.setProperty('top', `${randomTop}%`);

        // Randomize the animation delay (from 0s to 0.3s)
        const randomDelay = (Math.random() * 0.3) + interval; // Random value between 0 and 0.3 + the interval
        interval += 0.3
        clone.style.setProperty('animation-delay', `${randomDelay}s`);

        // Restart the animation by triggering a reflow
        clone.offsetHeight; // This forces a reflow, restarting the animation
    });
}
