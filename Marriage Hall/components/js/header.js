// Header Component JavaScript
class HeaderComponent {
    constructor() {
        this.header = document.getElementById('header');
        this.navLinks = document.getElementById('navLinks');
        this.profileIcon = document.getElementById('profileIcon');
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
        this.setupProfileIcon();
    }

    setupScrollEffect() {
        let lastScrollTop = 0;
        let ticking = false;
        
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                // Hide header on both scroll up and down (after 100px)
                this.header.style.transform = 'translateY(-100%)';
            } else {
                // Show header only when at the top
                this.header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick, { passive: true });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerHeight = this.header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupMobileMenu() {
        // Add mobile menu button for smaller screens
        this.addMobileMenuButton();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.addMobileMenuButton();
        });
    }

    addMobileMenuButton() {
        const navbar = document.querySelector('.navbar');
        const existingBtn = document.querySelector('.mobile-menu-btn');
        
        if (window.innerWidth <= 768) {
            if (!existingBtn) {
                const mobileMenuBtn = document.createElement('button');
                mobileMenuBtn.className = 'mobile-menu-btn';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                mobileMenuBtn.onclick = () => this.toggleMobileMenu();
                navbar.appendChild(mobileMenuBtn);
            }
        } else {
            if (existingBtn) {
                existingBtn.remove();
            }
        }
    }

    toggleMobileMenu() {
        this.navLinks.classList.toggle('mobile-active');
    }

    setupProfileIcon() {
        this.profileIcon.addEventListener('click', () => {
            // You can add profile functionality here
            console.log('Profile icon clicked');
        });
    }

    debounce(func, wait) {
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
}

// Initialize header component when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeaderComponent();
});
