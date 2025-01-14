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

window.onload = function () {
    // Start the animation by adding the class
    document.body.classList.add('animation-finish');

    // Wait for 2 seconds (the duration of the animation)
    setTimeout(function () {
        // Display the main content
        document.querySelector('main').style.display = 'flex';
    }, 3000);s
};