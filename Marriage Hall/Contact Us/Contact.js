// Contact Header Component
class ContactHeader {
  constructor() {
      this.header = document.getElementById('contactHeader');
      this.navLinks = document.getElementById('contactNavLinks');
      this.init();
  }

  init() {
      this.setupScrollEffect();
      this.setupSmoothScrolling();
      this.setupMobileMenu();
  }

  // Hide header after scrolling 100px
  setupScrollEffect() {
      let ticking = false;

      const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          if (scrollTop > 100) {
              this.header.style.transform = 'translateY(-100%)';
          } else {
              this.header.style.transform = 'translateY(0)';
          }
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

  // Smooth scrolling for in-page anchor links
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

  // Add/remove mobile menu button depending on screen size
  setupMobileMenu() {
      this.addMobileMenuButton();

      window.addEventListener('resize', () => {
          this.addMobileMenuButton();
      });
  }

  addMobileMenuButton() {
      const navbar = document.querySelector('.contact-navbar');
      const existingBtn = document.querySelector('.contact-mobile-btn');

      if (window.innerWidth <= 768) {
          if (!existingBtn) {
              const mobileMenuBtn = document.createElement('button');
              mobileMenuBtn.className = 'contact-mobile-btn';
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
      this.navLinks.classList.toggle('active');
  }
}

// Init Contact Header on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ContactHeader();
});


  
// Enhance date inputs: show label-like placeholders (FROM/TO) until focused
document.addEventListener('DOMContentLoaded', () => {
  const dateInputs = document.querySelectorAll('.date-row input');
  dateInputs.forEach((input) => {
    // Only adjust if input is of type date
    if (input.type === 'date') {
      // Switch to text initially so placeholder shows
      input.dataset.originalType = 'date';
      if (!input.value) input.type = 'text';

      input.addEventListener('focus', () => {
        input.type = input.dataset.originalType || 'date';
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          input.type = 'text';
        }
      });
    }
  });
});


// Handle form submission
// document.getElementById("bookingForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Your details have been submitted successfully!");
// });


// bookingCarousel.js
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".booking-slide");
    const dots = document.querySelectorAll(".booking-dot");
    let currentIndex = 0;
    const slideInterval = 4000; // 4 seconds per slide
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, slideInterval);
  });
  