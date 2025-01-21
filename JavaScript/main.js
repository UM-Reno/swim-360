// Function to check if the device is a phone
function isPhone() {
    return window.innerWidth <= 768;
}

// Function to handle scroll behavior
function handleScroll() {
    const navbar = document.querySelector('nav');
    const logo = document.querySelector('.logo');

    if (window.scrollY > 10) {
        navbar.style.top = '0vh';  // When scrolling down, set top to 0
        navbar.style.height = '10vh';
        navbar.style.borderTopWidth = '0';
        logo.style.height = '10vh';
    }
    else {
        navbar.style.top = '1vh';  // When at the top of the page, set top back to 1vh
        navbar.style.height = '12vh';
        navbar.style.borderTopWidth = '5px';
        logo.style.height = '12vh';
    }
}

// Function to add or remove the scroll event listener based on screen size
function adjustScrollListener() {
    if (isPhone()) {
        window.removeEventListener('scroll', handleScroll);  // Remove scroll listener for phones
    } else {
        window.addEventListener('scroll', handleScroll);  // Add scroll listener for larger screens
    }
}

// Sets up the page with systems such as anti-image copy
function setupWebpage() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('contextmenu', function (e) {
            e.preventDefault(); // Disable right-click
        });
    });
}

// Initial setup
adjustScrollListener();
setupWebpage();

// Re-adjust listener on window resize
window.addEventListener('resize', adjustScrollListener);

