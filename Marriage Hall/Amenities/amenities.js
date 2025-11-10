// Amenities Page JavaScript

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle i');
                    otherToggle.classList.remove('fa-minus');
                    otherToggle.classList.add('fa-plus');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const icon = toggle.querySelector('i');
            
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });

    // Booking Form Submission
    const bookingForm = document.querySelector('.booking-form-card');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const fromDate = document.querySelector('input[type="date"]');
            const toDate = document.querySelectorAll('input[type="date"]')[1];
            const event = document.querySelector('select');
            const facilities = document.querySelectorAll('select')[1];
            
            // Basic validation
            if (!fromDate.value || !toDate.value) {
                alert('Please select both From and To dates');
                return;
            }
            
            // You can add form submission logic here
            console.log('Booking Details:', {
                from: fromDate.value,
                to: toDate.value,
                event: event.value,
                facilities: facilities.value
            });
            
            alert('Thank you for your booking request! We will contact you soon.');
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hall-card, .faq-item, .feature-badges');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});