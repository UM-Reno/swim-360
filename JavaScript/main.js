window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');

    if (window.scrollY > 10) {
      navbar.style.top = '0vh';  // When scrolling down, set top to 0
      navbar.style.height = '10vh';
    }
    
    else {
      navbar.style.top = '1vh';  // When at the top of the page, set top back to 1vh
      navbar.style.height = '12vh';
    }
  });
  