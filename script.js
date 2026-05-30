document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle Mobile Menu Open/Close
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Toggle Icon state between bars and X
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close Menu when a link is clicked (smoother user experience)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });
});