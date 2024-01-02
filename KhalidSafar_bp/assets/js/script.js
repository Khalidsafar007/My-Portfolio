document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const slider = document.getElementById('slider');

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        slider.classList.toggle('slider-active');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('nav').offsetHeight,
                behavior: 'smooth'
            });

            // Remove "active" class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            // Add "active" class to the clicked link
            this.classList.add('active');
        });
    });
});