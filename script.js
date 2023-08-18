let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Smooth scrolling for navigation links with custom duration
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const startPosition = window.pageYOffset;
            const targetPosition = targetSection.offsetTop;
            const distance = targetPosition - startPosition;
            const startTime = performance.now();
            const duration = 800; // Adjust the duration

            function step(timestamp) {
                const currentTime = timestamp - startTime;
                const progress = Math.min(currentTime / duration, 1);
                const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2; // Smooth easing function
                const newPosition = startPosition + distance * easeProgress;

                window.scrollTo(0, newPosition);

                if (currentTime < duration) {
                    requestAnimationFrame(step);
                }
            }

            requestAnimationFrame(step);
        }
    });
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function updateActiveNav() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
}
window.addEventListener('scroll', updateActiveNav);


let header = document.querySelector('header');

header.classList.toggle('sticky' , window.scrollY > 100);
