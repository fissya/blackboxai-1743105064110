// Countdown Timer for November 20, 2025
function updateCountdown() {
    const eventDate = new Date('November 20, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('countdown-days').innerText = days;
    document.getElementById('countdown-hours').innerText = hours;
    document.getElementById('countdown-minutes').innerText = minutes;
    document.getElementById('countdown-seconds').innerText = seconds;
}

// Initialize countdown and update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Owl Eye Animation Control
const owlEyes = document.querySelectorAll('.owl-eye');
if (owlEyes.length > 0) {
    owlEyes.forEach(eye => {
        eye.addEventListener('mouseover', () => {
            eye.style.animationPlayState = 'paused';
        });
        eye.addEventListener('mouseout', () => {
            eye.style.animationPlayState = 'running';
        });
    });
}