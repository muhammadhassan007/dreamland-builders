/* ============================================
   Construction Company Website - Main JavaScript
   ============================================ */

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Smooth Scroll Animation =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Remove observer after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apple-style scroll reveal observer
const scrollRevealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Keep observing for re-animation on scroll up
        } else {
            // Optional: remove class on scroll up for re-animation
            // entry.target.classList.remove('revealed');
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    animatedElements.forEach(el => observer.observe(el));
    
    // Observe scroll reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .text-reveal');
    scrollRevealElements.forEach(el => scrollRevealObserver.observe(el));
});

// ===== Contact Form Validation =====
function validateForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Remove previous error classes
        [name, email, phone, message].forEach(field => {
            if (field) {
                field.classList.remove('is-invalid');
            }
        });
        
        // Validate name
        if (name && name.value.trim() === '') {
            name.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate email
        if (email && (email.value.trim() === '' || !isValidEmail(email.value))) {
            email.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate phone
        if (phone && phone.value.trim() === '') {
            phone.classList.add('is-invalid');
            isValid = false;
        }
        
        // Validate message
        if (message && message.value.trim() === '') {
            message.classList.add('is-invalid');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
        } else {
            showMessage('Please fill in all required fields correctly.', 'error');
        }
    });
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function
function showMessage(text, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const message = document.createElement('div');
    message.className = `form-message alert alert-${type === 'success' ? 'success' : 'danger'}`;
    message.textContent = text;
    message.style.marginTop = '1rem';
    
    // Insert message
    const form = document.getElementById('contactForm');
    if (form) {
        form.appendChild(message);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// ===== Initialize on DOM Load =====
document.addEventListener('DOMContentLoaded', function() {
    validateForm();
    
    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu close on link click
    const navLinksMobile = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// ===== Counter Animation =====
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// ===== Initialize counters when visible =====
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => counterObserver.observe(counter));
});

// ===== Parallax Scroll Animation for Background Elements =====
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    const heroHeight = hero.offsetHeight;
    const heroTop = hero.offsetTop;
    const heroBottom = heroTop + heroHeight;
    
    // Only animate if hero section is in view
    if (scrolled < heroBottom && scrolled > heroTop - window.innerHeight) {
        const scrollProgress = (scrolled - heroTop + window.innerHeight) / (heroHeight + window.innerHeight);
        
        // Animate background shapes
        const shapes = document.querySelectorAll('.bg-shape');
        shapes.forEach(shape => {
            const speed = parseFloat(shape.dataset.speed) || 0.5;
            const translateY = scrollProgress * 100 * speed;
            const translateX = Math.sin(scrollProgress * Math.PI * 2) * 30 * speed;
            const rotate = scrollProgress * 360 * speed;
            
            shape.style.transform = `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg)`;
            shape.style.opacity = Math.max(0, 1 - scrollProgress * 1.5);
        });
        
        // Animate particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = parseFloat(particle.dataset.speed) || 0.5;
            const translateY = scrollProgress * 150 * speed;
            const translateX = Math.sin((scrollProgress + index * 0.5) * Math.PI * 2) * 50 * speed;
            const scale = 1 + Math.sin(scrollProgress * Math.PI) * 0.3;
            
            particle.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale})`;
            particle.style.opacity = Math.max(0, 1 - scrollProgress * 1.2);
        });
        
        // Animate hero background
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            const bgTranslateY = scrollProgress * 50;
            heroBackground.style.transform = `translateY(${bgTranslateY}px)`;
        }
        
        // Animate hero pattern
        const heroPattern = document.querySelector('.hero-pattern');
        if (heroPattern) {
            const patternTranslateX = scrollProgress * 100;
            heroPattern.style.transform = `translateX(${patternTranslateX}px)`;
        }
    }
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

// Throttled scroll event listener
window.addEventListener('scroll', requestTick, { passive: true });

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateParallax();
});

