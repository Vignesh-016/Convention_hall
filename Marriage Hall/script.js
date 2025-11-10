// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Play button functionality
document.querySelector('.play-button').addEventListener('click', function() {
    // You can add video modal or redirect to video here
    alert('Video player would open here!');
});

// Form submission
document.querySelector('.submit-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get form values
    const fromDate = document.querySelector('input[type="date"]').value;
    const toDate = document.querySelectorAll('input[type="date"]')[1].value;
    const eventType = document.querySelector('select').value;
    const facilities = document.querySelectorAll('select')[1].value;
    
    // Basic validation
    if (!fromDate || !toDate) {
        alert('Please select both from and to dates!');
        return;
    }
    
    if (new Date(fromDate) > new Date(toDate)) {
        alert('From date cannot be after To date!');
        return;
    }
    
    // Simulate form submission
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    this.disabled = true;
    
    setTimeout(() => {
        alert(`Booking request submitted!\n\nFrom: ${fromDate}\nTo: ${toDate}\nEvent: ${eventType}\nFacilities: ${facilities}`);
        this.innerHTML = '<span>Submit</span><i class="fas fa-arrow-right"></i>';
        this.disabled = false;
    }, 2000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .gallery-item, .about-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (for future mobile navigation)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Add mobile menu button for smaller screens
function addMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.onclick = toggleMobileMenu;
    
    // Only add on mobile screens
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            navbar.appendChild(mobileMenuBtn);
        }
    } else {
        const existingBtn = document.querySelector('.mobile-menu-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
    }
}

// Check screen size and add mobile menu
window.addEventListener('resize', addMobileMenu);
window.addEventListener('load', addMobileMenu);

// Add CSS for mobile menu button
const mobileMenuCSS = `
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 10px;
    }
    
    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }
        
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.95);
            flex-direction: column;
            padding: 20px;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-links.mobile-active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-link {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Form validation enhancement
function validateDateInputs() {
    const fromInput = document.querySelector('input[type="date"]');
    const toInput = document.querySelectorAll('input[type="date"]')[1];
    
    fromInput.addEventListener('change', function() {
        const fromDate = new Date(this.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (fromDate < today) {
            alert('Please select a future date!');
            this.value = '';
            return;
        }
        
        // Set minimum date for "to" input
        toInput.min = this.value;
    });
    
    toInput.addEventListener('change', function() {
        const toDate = new Date(this.value);
        const fromDate = new Date(fromInput.value);
        
        if (toDate < fromDate) {
            alert('End date must be after start date!');
            this.value = '';
        }
    });
}

// Initialize date validation
document.addEventListener('DOMContentLoaded', validateDateInputs);

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click-to-call functionality for contact items
document.addEventListener('DOMContentLoaded', function() {
    const phoneItem = document.querySelector('.contact-item:first-child');
    if (phoneItem) {
        phoneItem.style.cursor = 'pointer';
        phoneItem.addEventListener('click', function() {
            window.location.href = 'tel:+919876543210';
        });
    }
    
    const emailItem = document.querySelectorAll('.contact-item')[1];
    if (emailItem) {
        emailItem.style.cursor = 'pointer';
        emailItem.addEventListener('click', function() {
            window.location.href = 'mailto:info@balasaraswathihall.com';
        });
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or mobile menus
        const mobileMenu = document.querySelector('.nav-links.mobile-active');
        if (mobileMenu) {
            mobileMenu.classList.remove('mobile-active');
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
