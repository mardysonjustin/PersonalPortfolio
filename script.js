document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header a[href^="#"], .cta-button[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const animatedElements = document.querySelectorAll('section > .container > h2, .project-card, .about-content > *, #contact-form > input, #contact-form > textarea, #contact-form > button, .social-links > a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
            }
        });
    };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        scrollObserver.observe(el);
    });

}); 