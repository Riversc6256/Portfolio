

// Fade-In on Scroll
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 50) {
            section.classList.add('active');
        }
    });
});

// Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    alert('Thank you for reaching out! I will get back to you soon.');
    event.preventDefault();
});
