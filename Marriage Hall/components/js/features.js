// Features Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            const featureText = this.querySelector('p').textContent;
            console.log(`Feature card ${index + 1} clicked: ${featureText}`);
            
            // You can add detailed feature information here
            // Example: Open a modal with more details about the feature
            // openFeatureModal(featureText);
            
            // For now, show an alert
            alert(`Feature: ${featureText}`);
        });

        // Enhanced hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.boxShadow = '0 12px 25px rgba(241, 196, 15, 0.3)';
            
            // Animate the icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            
            // Reset the icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Add functionality to navigation arrows
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const featuresRow = document.querySelector('.features-row');
    
    if (leftArrow && rightArrow && featuresRow) {
        let currentIndex = 0;
        const cards = Array.from(featureCards);
        const cardsPerView = getCardsPerView();
        
        function getCardsPerView() {
            if (window.innerWidth <= 768) return 1;
            if (window.innerWidth <= 1024) return 2;
            return 4;
        }
        
        function updateCardVisibility() {
            cards.forEach((card, index) => {
                if (index >= currentIndex && index < currentIndex + cardsPerView) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                }
            });
        }
        
        leftArrow.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex = Math.max(0, currentIndex - cardsPerView);
                updateCardVisibility();
            }
        });
        
        rightArrow.addEventListener('click', function() {
            const maxIndex = Math.max(0, cards.length - cardsPerView);
            if (currentIndex < maxIndex) {
                currentIndex = Math.min(maxIndex, currentIndex + cardsPerView);
                updateCardVisibility();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardsPerView = getCardsPerView();
            if (newCardsPerView !== cardsPerView) {
                currentIndex = 0;
                updateCardVisibility();
            }
        });
        
        // Initialize visibility
        updateCardVisibility();
    }

    // Add scroll animation when features section comes into view
    const featuresSection = document.querySelector('.features-section');
    
    if (featuresSection) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate feature cards with staggered delay
                    const cards = entry.target.querySelectorAll('.feature-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        }, observerOptions);

        // Apply initial styles for animation
        featuresSection.style.opacity = '0';
        featuresSection.style.transform = 'translateY(30px)';
        featuresSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Set initial card styles
        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Start observing
        observer.observe(featuresSection);
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (leftArrow && rightArrow) {
            if (e.key === 'ArrowLeft') {
                leftArrow.click();
            } else if (e.key === 'ArrowRight') {
                rightArrow.click();
            }
        }
    });

    // Add touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    if (featuresRow) {
        featuresRow.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        featuresRow.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && rightArrow) {
                rightArrow.click();
            } else if (diff < 0 && leftArrow) {
                leftArrow.click();
            }
        }
    }
});
