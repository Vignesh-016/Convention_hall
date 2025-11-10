// About Us Component JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize about section animations
    initAboutAnimations();
    
    // Initialize legacy button functionality
    initLegacyButton();
    
    // Initialize image hover effects
    initImageEffects();
});

function initAboutAnimations() {
    // Animate experience cards on scroll
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        observer.observe(card);
    });
    
    // Observe about heading
    const aboutHeading = document.querySelector('.about-heading');
    if (aboutHeading) {
        observer.observe(aboutHeading);
    }
}

function initLegacyButton() {
    const legacyButton = document.querySelector('.legacy-button');
    if (legacyButton) {
        legacyButton.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Scroll to contact section or show more info
            console.log('Legacy button clicked - navigate to more info');
        });
    }
}

function initImageEffects() {
    const imageItems = document.querySelectorAll('.image-item');
    
    imageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    .experience-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .experience-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .about-heading {
        opacity: 0;
        transform: translateX(-30px);
        transition: all 0.8s ease;
    }
    
    .about-heading.animate-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .image-item {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);
