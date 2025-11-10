// Testimonials Section JavaScript with Custom Carousel (Arrows Removed)
class TestimonialCarousel {
    constructor() {
        this.currentIndex = 0;
        this.isAnimating = false;
        this.testimonials = [
            {
                name: "Veronica Gleason",
                title: "CEO of Advetri",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus."
            },
            {
                name: "Sarah Johnson",
                title: "Marketing Director",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                text: "Amazing experience! The team captured every precious moment beautifully. Professional, creative, and truly understood our vision. Highly recommended for anyone looking for exceptional photography services."
            },
            {
                name: "Michael Chen",
                title: "Event Coordinator",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                text: "Outstanding work! They transformed our corporate event into a visual masterpiece. Every detail was captured with precision and artistic flair. The final gallery exceeded all our expectations."
            },
            {
                name: "Emily Rodriguez",
                title: "Creative Director",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                text: "Incredible attention to detail and artistic vision. They made our special day absolutely perfect. Every photo tells a story and captures the emotion of the moment."
            },
            {
                name: "David Thompson",
                title: "Wedding Planner",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
                text: "Professional, creative, and absolutely reliable. They work seamlessly with our team and always deliver beyond expectations. The quality of their work is simply outstanding."
            }
        ];
        
        this.totalTestimonials = this.testimonials.length;
        this.track = document.getElementById('carouselTrack');
        // Remove arrow button references
        // this.prevBtn = document.getElementById('prevBtn');
        // this.nextBtn = document.getElementById('nextBtn');
        this.slides = [];
        
        this.init();
    }
    
    init() {
        this.createSlides();
        this.setupEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
    }
    
    createSlides() {
        this.testimonials.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.dataset.index = index;
            slide.style.display = 'none'; // Initially hidden
            
            slide.innerHTML = `
                <div class="testimonial-card">
                    <div class="testimonial-left">
                        <p class="tag">Testimonial</p>
                        <h4>WHAT THEY SAY ABOUT US?</h4>
                        <i class="fas fa-quote-left quote-icon"></i>
                        <h3>${testimonial.name}</h3>
                        <p class="role">${testimonial.title}</p>
                    </div>
                    
                    <div class="testimonial-center">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                        <div class="play-btn"><i class="fas fa-play"></i></div>
                    </div>
                    
                    <div class="testimonial-right">
                        <i class="fas fa-quote-right quote-bg"></i>
                        <p>${testimonial.text}</p>
                        <div class="stars">★★★★★</div>
                    </div>
                </div>
            `;
            
            this.track.appendChild(slide);
            this.slides.push(slide);
        });
    }
    
    setupEventListeners() {
        // Remove arrow button event listeners
        // if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.previousSlide());
        // if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.previousSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Touch/swipe support
        this.addTouchSupport();
        
        // Play button handlers
        this.track.addEventListener('click', (e) => {
            if (e.target.closest('.play-btn')) {
                e.preventDefault();
                e.stopPropagation();
                const card = e.target.closest('.testimonial-card');
                const name = card.querySelector('h3').textContent;
                console.log(`Playing testimonial video for ${name}`);
                alert(`Playing testimonial video for ${name}`);
            }
        });
        
        // Pause auto-play on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    nextSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex = (this.currentIndex + 1) % this.totalTestimonials;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    previousSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex = (this.currentIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    goToSlide(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.isAnimating = true;
        
        this.currentIndex = index;
        this.updateCarousel();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 600);
    }
    
    updateCarousel() {
        // Remove all classes
        this.slides.forEach(slide => {
            slide.classList.remove('active', 'prev', 'next');
            slide.style.display = 'none';
        });
        
        // Calculate indices for the three visible slides
        const prevIndex = (this.currentIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
        const nextIndex = (this.currentIndex + 1) % this.totalTestimonials;
        
        // Show only 3 slides and add appropriate classes
        this.slides[this.currentIndex].classList.add('active');
        this.slides[this.currentIndex].style.display = 'block';
        
        this.slides[prevIndex].classList.add('prev');
        this.slides[prevIndex].style.display = 'block';
        
        this.slides[nextIndex].classList.add('next');
        this.slides[nextIndex].style.display = 'block';
        
        // Remove navigation button state updates
        // if (this.prevBtn) this.prevBtn.disabled = false;
        // if (this.nextBtn) this.nextBtn.disabled = false;
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        let isDragging = false;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        this.track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            endX = e.changedTouches[0].clientX;
            this.handleSwipe(startX, endX);
            isDragging = false;
        });
    }
    
    handleSwipe(startX, endX) {
        if (this.isAnimating) return;
        
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.previousSlide();
            }
        }
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize the carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousel = new TestimonialCarousel();
    
    // Remove arrow buttons from DOM if present
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.parentNode.removeChild(prevBtn);
    if (nextBtn) nextBtn.parentNode.removeChild(nextBtn);

    // Add smooth animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe testimonial cards for scroll animations
    document.querySelectorAll('.testimonial-card').forEach(card => {
        observer.observe(card);
    });
});

// Export for potential use in other scripts
window.TestimonialCarousel = TestimonialCarousel;
