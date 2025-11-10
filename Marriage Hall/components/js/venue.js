// Venue Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to play icon
    const playIcon = document.querySelector('.play-icon');
    if (playIcon) {
        playIcon.addEventListener('click', function() {
            const testimonialCard = this.closest('.testimonial-card');
            const clientName = testimonialCard.querySelector('.name').textContent;
            const clientRole = testimonialCard.querySelector('.role').textContent;
            
            console.log(`Play button clicked for: ${clientName} - ${clientRole}`);
            
            // You can add video modal functionality here
            // Example: Open video modal with testimonial video
            // openVideoModal(clientName, clientRole);
            
            // For now, show an alert
            alert(`Playing testimonial video for: ${clientName}`);
        });

        // Add hover effects to play icon
        playIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1.1)';
            this.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
            this.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            this.style.boxShadow = '0 4px 15px rgba(160, 0, 0, 0.3)';
        });

        playIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(-50%, -50%) scale(1)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            this.style.boxShadow = 'none';
        });
    }

    // Add click event listeners to navigation arrows
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', function() {
            console.log('Left arrow clicked');
            // You can add testimonial navigation functionality here
            // For now, show an alert
            alert('Previous testimonial');
        });

        rightArrow.addEventListener('click', function() {
            console.log('Right arrow clicked');
            // You can add testimonial navigation functionality here
            // For now, show an alert
            alert('Next testimonial');
        });

        // Add hover effects to arrows
        [leftArrow, rightArrow].forEach(arrow => {
            arrow.addEventListener('mouseenter', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                this.style.transform = 'translateY(-50%) scale(1.1)';
                this.style.transition = 'all 0.3s ease';
                this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            });

            arrow.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                this.style.transform = 'translateY(-50%) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Add hover effects for testimonial card
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
        testimonialCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
            this.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
        });

        testimonialCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
    }

    // Add click event listener to testimonial card for more details
    if (testimonialCard) {
        testimonialCard.addEventListener('click', function(e) {
            // Don't trigger if clicking on play icon or arrows
            if (e.target.closest('.play-icon') || e.target.closest('.arrow')) {
                return;
            }
            
            const clientName = this.querySelector('.name').textContent;
            const testimonialText = this.querySelector('.testimonial-right p').textContent;
            
            console.log(`Testimonial card clicked: ${clientName}`);
            
            // You can add detailed testimonial modal here
            // openTestimonialModal(clientName, testimonialText);
            
            // For now, show an alert
            alert(`Testimonial from ${clientName}:\n\n"${testimonialText}"`);
        });
    }

    // Add scroll animation when venue section comes into view
    const venueSection = document.querySelector('.testimonial-section');
    
    if (venueSection) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate testimonial card with delay
                    const card = entry.target.querySelector('.testimonial-card');
                    if (card) {
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 200);
                    }
                }
            });
        }, observerOptions);

        // Apply initial styles for animation
        venueSection.style.opacity = '0';
        venueSection.style.transform = 'translateY(30px)';
        venueSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Set initial card styles
        if (testimonialCard) {
            testimonialCard.style.opacity = '0';
            testimonialCard.style.transform = 'translateY(30px)';
            testimonialCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        
        // Start observing
        observer.observe(venueSection);
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

    if (testimonialCard) {
        testimonialCard.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        testimonialCard.addEventListener('touchend', function(e) {
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

    // Add star rating animation
    const starRating = document.querySelector('.stars');
    if (starRating) {
        starRating.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });

        starRating.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Add hover effects to testimonial sections
    const testimonialLeft = document.querySelector('.testimonial-left');
    const testimonialRight = document.querySelector('.testimonial-right');
    
    if (testimonialLeft) {
        testimonialLeft.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#8a1a1a';
            this.style.transition = 'background-color 0.3s ease';
        });

        testimonialLeft.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#7a0a0a';
        });
    }

    if (testimonialRight) {
        testimonialRight.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f8f8';
            this.style.transition = 'background-color 0.3s ease';
        });

        testimonialRight.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
        });
    }
});
