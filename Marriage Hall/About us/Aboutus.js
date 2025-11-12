// Header Component JavaScript
// class HeaderComponent {
//     constructor() {
//         this.header = document.getElementById('header');
//         this.navLinks = document.getElementById('navLinks');
//         this.profileIcon = document.getElementById('profileIcon');
//         this.init();
//     }

//     init() {
//         this.setupScrollEffect();
//         this.setupSmoothScrolling();
//         this.setupMobileMenu();
//         this.setupProfileIcon();
//     }

//     setupScrollEffect() {
        // No scroll effects - header stays static
    // }

    // setupSmoothScrolling() {
    //     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //         anchor.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const target = document.querySelector(anchor.getAttribute('href'));
    //             if (target) {
    //                 const headerHeight = this.header.offsetHeight;
    //                 const targetPosition = target.offsetTop - headerHeight;
                    
    //                 window.scrollTo({
    //                     top: targetPosition,
    //                     behavior: 'smooth'
    //                 });
    //             }
    //         });
    //     });
    // }

    // setupMobileMenu() {
        // Add mobile menu button for smaller screens
        // this.addMobileMenuButton();
        
        // Handle window resize
    //     window.addEventListener('resize', () => {
    //         this.addMobileMenuButton();
    //     });
    // }

//     addMobileMenuButton() {
//         const navbar = document.querySelector('.navbar');
//         const existingBtn = document.querySelector('.mobile-menu-btn');
        
//         if (window.innerWidth <= 768) {
//             if (!existingBtn) {
//                 const mobileMenuBtn = document.createElement('button');
//                 mobileMenuBtn.className = 'mobile-menu-btn';
//                 mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
//                 mobileMenuBtn.onclick = () => this.toggleMobileMenu();
//                 navbar.appendChild(mobileMenuBtn);
//             }
//         } else {
//             if (existingBtn) {
//                 existingBtn.remove();
//             }
//         }
//     }

//     toggleMobileMenu() {
//         this.navLinks.classList.toggle('mobile-active');
//     }

//     setupProfileIcon() {
//         if (this.profileIcon) {
//             this.profileIcon.addEventListener('click', () => {
//                 // You can add profile functionality here
//                 console.log('Profile icon clicked');
//             });
//         }
//     }

//     debounce(func, wait) {
//         let timeout;
//         return function executedFunction(...args) {
//             const later = () => {
//                 clearTimeout(timeout);
//                 func(...args);
//             };
//             clearTimeout(timeout);
//             timeout = setTimeout(later, wait);
//         };
//     }
// }


    // Statistics Section Animation
    const statItems = document.querySelectorAll('.stat-item');
    
    // Intersection Observer for statistics animation
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate numbers
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    animateNumber(statNumber);
                }
            }
        });
    }, {
        threshold: 0.3
    });
    
    // Initialize stat items
    statItems.forEach(function(item, index) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        statsObserver.observe(item);
    });
    
    // Number animation function
    function animateNumber(element) {
        const text = element.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/\d/g, '');
        
        if (isNaN(number)) return;
        
        let current = 0;
        const increment = number / 50;
        const timer = setInterval(function() {
            current += increment;
            if (current >= number) {
                current = number;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }
    
    // Add enhanced hover effects for stat items
    statItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // FAQ Section JavaScript
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
        const button = faq.querySelector(".faq-question");
        button.addEventListener("click", () => {
            const isActive = faq.classList.contains("active");

            // Close all faqs
            faqs.forEach((item) => item.classList.remove("active"));

            // If it was not active, open it
            if (!isActive) {
                faq.classList.add("active");
            }
        });
    });

    

    class TestimonialCarousel {
      constructor() {
        this.currentIndex = 0;
        this.isAnimating = false;
    
        // ✅ Add video path for each testimonial here
        this.testimonials = [
          {
            name: "Veronica Gleason",
            title: "CEO of Advetri",
            image: "./assets/testimonials/veronica.jpg",
            video: "./assets/testimonials/veronica.mp4",
            text: "Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus."
          },
          {
            name: "Sarah Johnson",
            title: "Marketing Director",
            image: "./assets/testimonials/sarah.jpg",
            video: "./assets/testimonials/sarah.mp4",
            text: "Amazing experience! The team captured every precious moment beautifully. Professional, creative, and truly understood our vision. Highly recommended for anyone looking for exceptional photography services."
          },
          {
            name: "Michael Chen",
            title: "Event Coordinator",
            image: "./assets/testimonials/michael.jpg",
            video: "./assets/testimonials/michael.mp4",
            text: "Outstanding work! They transformed our corporate event into a visual masterpiece. Every detail was captured with precision and artistic flair. The final gallery exceeded all our expectations."
          },
          {
            name: "Emily Rodriguez",
            title: "Creative Director",
            image: "./assets/testimonials/emily.jpg",
            video: "./assets/testimonials/emily.mp4",
            text: "Incredible attention to detail and artistic vision. They made our special day absolutely perfect. Every photo tells a story and captures the emotion of the moment."
          },
          {
            name: "David Thompson",
            title: "Wedding Planner",
            image: "./assets/testimonials/david.jpg",
            video: "./assets/testimonials/david.mp4",
            text: "Professional, creative, and absolutely reliable. They work seamlessly with our team and always deliver beyond expectations. The quality of their work is simply outstanding."
          }
        ];
    
        this.totalTestimonials = this.testimonials.length;
        this.track = document.getElementById("carouselTrack");
        this.slides = [];
    
        // Create navigation arrows
        this.addNavigationButtons();
    
        // Create video modal
        this.createVideoModal();
    
        this.init();
      }
    
      init() {
        this.createSlides();
        this.setupEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
      }
    
      createSlides() {
        this.testimonials.forEach((t, index) => {
          const slide = document.createElement("div");
          slide.className = "carousel-slide";
          slide.dataset.index = index;
          slide.style.display = "none";
    
          slide.innerHTML = `
            <div class="testimonial-card">
              <div class="testimonial-left">
                <h4 style="font-family: 'Mea Culpa', cursive;">Testimonial</h4>
                <h2>WHAT THEY SAY ABOUT US?</h2>
                <div class="quote-mark-left">"</div>
                <div class="author-info">
                  <p>${t.name}</p>
                  <small>${t.title}</small>
                </div>
              </div>
    
              <div class="testimonial-center">
                <div class="image-container">
                  <img src="${t.image}" alt="${t.name}">
                  <div class="play-button" data-video="${t.video}">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
              </div>
    
              <div class="testimonial-right">
                <div class="quote-mark-right">"</div>
                <p>${t.text}</p>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
              </div>
            </div>
          `;
    
          this.track.appendChild(slide);
          this.slides.push(slide);
        });
      }
    
      addNavigationButtons() {
        const container = document.querySelector(".carousel-container");
        const prevBtn = document.createElement("button");
        const nextBtn = document.createElement("button");
    
        prevBtn.id = "prevBtn";
        nextBtn.id = "nextBtn";
        prevBtn.className = "nav-arrow prev-arrow";
        nextBtn.className = "nav-arrow next-arrow";
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
        container.appendChild(prevBtn);
        container.appendChild(nextBtn);
    
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
      }
    
      createVideoModal() {
        const modal = document.createElement("div");
        modal.id = "videoModal";
        modal.className = "video-modal";
        modal.innerHTML = `
          <div class="video-overlay" data-close="true"></div>
          <div class="video-box">
            <video id="modalVideo" controls playsinline></video>
            <button class="close-modal" id="videoCloseBtn">&times;</button>
          </div>
        `;
        document.body.appendChild(modal);
        this.modal = modal;
        this.modalVideo = modal.querySelector("#modalVideo");
        this.modalClose = modal.querySelector("#videoCloseBtn");
      }
    
      setupEventListeners() {
        this.prevBtn.addEventListener("click", () => this.previousSlide());
        this.nextBtn.addEventListener("click", () => this.nextSlide());
    
        // Play button event (open video)
        this.track.addEventListener("click", (e) => {
          const btn = e.target.closest(".play-button");
          if (btn) {
            const src = btn.getAttribute("data-video");
            this.openVideo(src);
          }
        });
    
        // Close modal events
        this.modal.addEventListener("click", (e) => {
          if (e.target.dataset.close === "true" || e.target === this.modalClose) {
            this.closeVideo();
          }
        });
    
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") this.closeVideo();
          if (e.key === "ArrowLeft") this.previousSlide();
          if (e.key === "ArrowRight") this.nextSlide();
        });
    
        this.addTouchSupport();
    
        // Pause auto-play on hover
        this.track.addEventListener("mouseenter", () => this.stopAutoPlay());
        this.track.addEventListener("mouseleave", () => this.startAutoPlay());
        
        // Update carousel on window resize
        window.addEventListener("resize", () => {
          this.updateCarousel();
        });
      }
    
      nextSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % this.totalTestimonials;
        this.updateCarousel();
        setTimeout(() => (this.isAnimating = false), 600);
      }
    
      previousSlide() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.currentIndex =
          (this.currentIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
        this.updateCarousel();
        setTimeout(() => (this.isAnimating = false), 600);
      }
    
      updateCarousel() {
        // Always show 3-card animation (prev, active, next) on all screen sizes
        this.slides.forEach((slide) => {
          slide.classList.remove("active", "prev", "next");
          slide.style.display = "none";
        });
    
        const prevIndex =
          (this.currentIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
        const nextIndex = (this.currentIndex + 1) % this.totalTestimonials;
    
        this.slides[this.currentIndex].classList.add("active");
        this.slides[this.currentIndex].style.display = "block";
    
        this.slides[prevIndex].classList.add("prev");
        this.slides[prevIndex].style.display = "block";
    
        this.slides[nextIndex].classList.add("next");
        this.slides[nextIndex].style.display = "block";
      }
    
      addTouchSupport() {
        let startX = 0;
        let endX = 0;
        let isDragging = false;
    
        this.track.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
          isDragging = true;
        });
    
        this.track.addEventListener("touchmove", (e) => {
          if (!isDragging) return;
          e.preventDefault();
        });
    
        this.track.addEventListener("touchend", (e) => {
          if (!isDragging) return;
          endX = e.changedTouches[0].clientX;
          const diff = startX - endX;
          if (Math.abs(diff) > 50) diff > 0 ? this.nextSlide() : this.previousSlide();
          isDragging = false;
        });
      }
    
      startAutoPlay() {
        this.stopAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
      }
    
      stopAutoPlay() {
        if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
      }
    
      openVideo(src) {
        if (!src) return;
        this.modal.classList.add("open");
        this.modalVideo.src = src;
        this.modalVideo.play().catch(() => {});
      }
    
      closeVideo() {
        this.modal.classList.remove("open");
        this.modalVideo.pause();
        this.modalVideo.removeAttribute("src");
        this.modalVideo.load();
      }
    }
    
    // Initialize carousel
    document.addEventListener("DOMContentLoaded", () => {
      new TestimonialCarousel();
    });
    
      // Founder Carousel Implementation
      class FounderCarousel {
        constructor() {
          this.currentIndex = 0;
          this.isAnimating = false;
          this.founders = [
            {
              name: "JANANI BALAKRISHNAN.B",
              title: "Our Founder",
              image: "../assets/Founder Image.png",
              description: "Celebrations are about togetherness, and at Bala Saraswathi Conventional Hall, we create a welcoming space where families come together to share joy, love, and tradition. With 25+ years of excellence, we go beyond being just a hall—we are curators of memories. Every detail, from the seamless blend of luxury and tradition to our personalized service, is carefully designed to make your big day extraordinary. Here, every occasion becomes more than an event—it transforms into a cherished moment that unites families, strengthens bonds, and lasts forever."
            },
            {
              name: "RAJESH KUMAR.M",
              title: "Co-Founder",
              image: "../assets/Founder Image.png",
              description: "With a passion for creating unforgettable experiences, I believe that every celebration deserves meticulous attention to detail. Our team works tirelessly to ensure that your special moments are captured perfectly, blending traditional values with modern elegance. At Bala Saraswathi, we don't just host events—we craft memories that last a lifetime, bringing families closer and creating bonds that span generations."
            },
            {
              name: "PRIYA SHARMA.S",
              title: "Managing Director",
              image: "../assets/Founder Image.png",
              description: "Excellence in hospitality is not just our goal—it's our promise. For over two decades, we have been privileged to be part of countless celebrations, each one unique and special. Our commitment to quality, personalized service, and creating the perfect ambiance has made us a trusted name in the industry. We take pride in transforming your vision into reality, ensuring every event is a masterpiece."
            }
          ];
          
          this.totalFounders = this.founders.length;
          this.container = document.getElementById('founderCarouselContainer');
          this.prevBtn = document.getElementById('founderPrevBtn');
          this.nextBtn = document.getElementById('founderNextBtn');
          
          this.init();
        }
        
        init() {
          this.renderFounder();
          this.setupEventListeners();
          this.startAutoPlay();
        }
        
        renderFounder() {
          const founder = this.founders[this.currentIndex];
          
          this.container.innerHTML = `
            <!-- Image -->
            <div class="founder-img" data-aos="zoom-in" data-aos-delay="260" data-aos-duration="1000">
              <img src="${founder.image}" alt="${founder.name}">
            </div>

            <!-- Content -->
            <div class="founder-content" data-aos="fade-left" data-aos-delay="320" data-aos-duration="1000">
              <p class="founder-title"><em>${founder.title}</em> <span class="dot"></span></p>
              <h2 style="letter-spacing: 0.07em; font-weight: 500; color: #780000"><span class="highlight">${founder.name}</span></h2>
              <hr class="divider" style="margin-bottom: 28px;">
              <p class="description" style="letter-spacing: 0.05rem;">${founder.description}</p>
            </div>
          `;
          
          // Trigger AOS animation refresh
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        }
        
        setupEventListeners() {
          this.prevBtn.addEventListener('click', () => this.previousSlide());
          this.nextBtn.addEventListener('click', () => this.nextSlide());
          
          // Keyboard navigation
          document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
              this.previousSlide();
            } else if (e.key === 'ArrowRight') {
              this.nextSlide();
            }
          });
          
          // Pause auto-play on hover
          this.container.addEventListener('mouseenter', () => this.stopAutoPlay());
          this.container.addEventListener('mouseleave', () => this.startAutoPlay());
        }
        
        nextSlide() {
          if (this.isAnimating) return;
          this.isAnimating = true;
          
          // Fade out effect
          this.container.style.opacity = '0';
          this.container.style.transform = 'translateX(20px)';
          
          setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.totalFounders;
            this.renderFounder();
            
            // Fade in effect
            setTimeout(() => {
              this.container.style.opacity = '1';
              this.container.style.transform = 'translateX(0)';
              this.isAnimating = false;
            }, 50);
          }, 300);
        }
        
        previousSlide() {
          if (this.isAnimating) return;
          this.isAnimating = true;
          
          // Fade out effect
          this.container.style.opacity = '0';
          this.container.style.transform = 'translateX(-20px)';
          
          setTimeout(() => {
            this.currentIndex = (this.currentIndex - 1 + this.totalFounders) % this.totalFounders;
            this.renderFounder();
            
            // Fade in effect
            setTimeout(() => {
              this.container.style.opacity = '1';
              this.container.style.transform = 'translateX(0)';
              this.isAnimating = false;
            }, 50);
          }, 300);
        }
        
        startAutoPlay() {
          this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
          }, 6000); // Change slide every 6 seconds
        }
        
        stopAutoPlay() {
          if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
          }
        }
      }
      
      // Initialize the founder carousel when DOM is loaded
      document.addEventListener('DOMContentLoaded', () => {
        const founderCarousel = new FounderCarousel();
        
        // Export for potential use in other scripts
        window.FounderCarousel = FounderCarousel;
      });