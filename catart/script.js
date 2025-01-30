// Hamburger Menu Toggle (Mobile View)
const hamburger = document.getElementById('hamburger-icon');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-open'); // Toggle the navbar visibility
});

// Close navbar when a link is clicked (optional)
const navbarLinks = document.querySelectorAll('.navbar-links a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('navbar-open'); // Close the navbar on link click
    });
});
