// Footer Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter form functionality
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('.newsletter input[type="email"]');
    const submitButton = document.querySelector('.newsletter button');
    
    if (newsletterForm && emailInput && submitButton) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                console.log('Newsletter subscription:', email);
                
                // You can add newsletter subscription functionality here
                // Example: Send to backend API
                // subscribeToNewsletter(email);
                
                // Show success message
                showNotification('Thank you for subscribing to our newsletter!', 'success');
                
                // Clear the input
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });

        // Add focus effects to email input
        emailInput.addEventListener('focus', function() {
            this.style.outline = '2px solid #f1c40f';
            this.style.outlineOffset = '2px';
        });

        emailInput.addEventListener('blur', function() {
            this.style.outline = 'none';
        });

        // Add hover effects to submit button
        submitButton.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#d4a017';
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });

        submitButton.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#a67c00';
            this.style.transform = 'scale(1)';
        });
    }

    // Social media links functionality
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.querySelector('i').className;
            let platformName = '';
            
            if (platform.includes('facebook')) platformName = 'Facebook';
            else if (platform.includes('twitter')) platformName = 'Twitter';
            else if (platform.includes('instagram')) platformName = 'Instagram';
            else if (platform.includes('youtube')) platformName = 'YouTube';
            
            console.log(`Social media link clicked: ${platformName}`);
            
            // You can add social media functionality here
            // Example: Open social media pages
            // openSocialMedia(platformName);
            
            // For now, show an alert
            alert(`Opening ${platformName} page...`);
        });

        // Add hover effects to social links
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.2)';
            this.style.transition = 'all 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Footer navigation links functionality
    const footerLinks = document.querySelectorAll('.footer-col ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent;
            console.log(`Footer link clicked: ${linkText}`);
            
            // You can add navigation functionality here
            // Example: Navigate to different sections or pages
            // navigateToSection(linkText);
            
            // For now, show an alert
            alert(`Navigating to: ${linkText}`);
        });

        // Add hover effects to footer links
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'all 0.3s ease';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Contact information click handlers
    const contactInfo = document.querySelectorAll('.footer-col p');
    contactInfo.forEach(info => {
        if (info.textContent.includes('+91') || info.textContent.includes('@')) {
            info.style.cursor = 'pointer';
            
            info.addEventListener('click', function() {
                const text = this.textContent;
                
                if (text.includes('+91')) {
                    // Phone number clicked
                    console.log('Phone number clicked:', text);
                    // You can add phone call functionality here
                    // window.location.href = `tel:${text.replace('Call: ', '')}`;
                    alert(`Calling: ${text}`);
                } else if (text.includes('@')) {
                    // Email clicked
                    console.log('Email clicked:', text);
                    // You can add email functionality here
                    // window.location.href = `mailto:${text.replace('Email: ', '')}`;
                    alert(`Opening email client for: ${text}`);
                }
            });

            info.addEventListener('mouseenter', function() {
                this.style.color = '#f1c40f';
                this.style.transition = 'color 0.3s ease';
            });

            info.addEventListener('mouseleave', function() {
                this.style.color = '#fff';
            });
        }
    });

    // Add scroll animation when footer comes into view
    const footer = document.querySelector('.footer');
    
    if (footer) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate footer columns with staggered delay
                    const columns = entry.target.querySelectorAll('.footer-col');
                    columns.forEach((column, index) => {
                        setTimeout(() => {
                            column.style.opacity = '1';
                            column.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            });
        }, observerOptions);

        // Apply initial styles for animation
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        footer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Set initial column styles
        const columns = footer.querySelectorAll('.footer-col');
        columns.forEach(column => {
            column.style.opacity = '0';
            column.style.transform = 'translateY(20px)';
            column.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Start observing
        observer.observe(footer);
    }

    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transition: all 0.3s ease;
            ${type === 'success' ? 'background: #27ae60;' : 'background: #e74c3c;'}
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add back to top functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #7a0a0a;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Back to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects for back to top button
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#a00';
        this.style.transform = 'scale(1.1)';
    });
    
    backToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#7a0a0a';
        this.style.transform = 'scale(1)';
    });
});





