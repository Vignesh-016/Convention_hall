// Gallery Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to gallery images
    const galleryImages = document.querySelectorAll('.gallery-track img');
    
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            console.log(`Gallery image ${index + 1} clicked`);
            
            // You can add lightbox/modal functionality here
            // Example: Open image in a lightbox modal
            // openLightbox(this.src, this.alt);
            
            // For now, show an alert
            alert(`Viewing gallery image: ${this.alt}`);
        });

        // Add hover effects
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            this.style.cursor = 'pointer';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        });
    });

    // Pause animation on hover
    const galleryRows = document.querySelectorAll('.gallery-row');
    galleryRows.forEach(row => {
        const track = row.querySelector('.gallery-track');
        
        row.addEventListener('mouseenter', function() {
            track.style.animationPlayState = 'paused';
        });

        row.addEventListener('mouseleave', function() {
            track.style.animationPlayState = 'running';
        });
    });

    // Add scroll animation when gallery section comes into view
    const gallerySection = document.querySelector('.gallery-section');
    
    if (gallerySection) {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Start animations with a slight delay
                    const tracks = entry.target.querySelectorAll('.gallery-track');
                    tracks.forEach((track, index) => {
                        setTimeout(() => {
                            track.style.animationPlayState = 'running';
                        }, index * 200);
                    });
                }
            });
        }, observerOptions);

        // Apply initial styles for animation
        gallerySection.style.opacity = '0';
        gallerySection.style.transform = 'translateY(30px)';
        gallerySection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Pause animations initially
        const tracks = gallerySection.querySelectorAll('.gallery-track');
        tracks.forEach(track => {
            track.style.animationPlayState = 'paused';
        });
        
        // Start observing
        observer.observe(gallerySection);
    }

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open lightbox/modal
            console.log('Escape key pressed - closing gallery modal');
        }
    });

    // Add touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    galleryImages.forEach(img => {
        img.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        img.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                console.log('Swipe left detected');
                // Navigate to next image
            } else {
                console.log('Swipe right detected');
                // Navigate to previous image
            }
        }
    }
});





