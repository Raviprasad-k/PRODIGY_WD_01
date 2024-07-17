// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to internships section on "Browse Internships" button click
const browseInternshipsBtn = document.querySelector('.hero .btn');

if (browseInternshipsBtn) {
    browseInternshipsBtn.addEventListener('click', function(e) {
        e.preventDefault();

        const internshipsSection = document.querySelector('#internships');
        internshipsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}
