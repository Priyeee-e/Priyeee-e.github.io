document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('#navbar');
    const navLinks = document.querySelectorAll('#navbar li a');
    const body = document.body;

    // Toggle mobile menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click from bubbling up
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navbar.classList.contains('active')) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Prevent clicks inside navbar from closing the menu
    navbar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
