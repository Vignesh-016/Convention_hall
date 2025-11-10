// CTA Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the entire CTA section
    const ctaSection = document.querySelector('.cta-section');
    const ctaBox = document.querySelector('.cta-box');
    
    if (ctaSection && ctaBox) {
        // Add click functionality to the CTA box
        ctaBox.addEventListener('click', function() {
            console.log('CTA section clicked - redirecting to contact/booking');
            
            // You can add contact/booking functionality here
            // Example: Open contact modal or redirect to contact page
            // window.location.href = 'contact.html';
            // or
            // openContactModal();
            
            // For now, show an alert
            alert('Contact us to book your dream venue!');
        });

        // Add hover effects
        ctaBox.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            this.style.boxShadow = '0 8px 30px rgba(212, 160, 23, 0.3)';
            
            // Enhance the overlay on hover
            const overlay = this.querySelector('.cta-overlay');
            if (overlay) {
                overlay.style.background = 'rgba(0, 0, 0, 0.5)';
                overlay.style.transition = 'background 0.3s ease';
            }
        });

        ctaBox.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            
            // Reset the overlay
            const overlay = this.querySelector('.cta-overlay');
            if (overlay) {
                overlay.style.background = 'rgba(0, 0, 0, 0.4)';
            }
        });

        // Add cursor pointer to indicate clickability
        ctaBox.style.cursor = 'pointer';
    }

    // Add scroll animation when CTA section comes into view
    const observerOptions = {
        threshold: 0.3,
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

    // Apply initial styles for animation
    if (ctaSection) {
        ctaSection.style.opacity = '0';
        ctaSection.style.transform = 'translateY(30px)';
        ctaSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Start observing
        observer.observe(ctaSection);
    }
});
