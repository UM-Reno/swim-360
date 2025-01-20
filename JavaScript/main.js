window.addEventListener('scroll', function () {
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
});
