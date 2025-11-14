// ============================
// FACILITY SLIDER SCRIPT
// ============================
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.facility-track');
    if (track) {
        let currentFacilitySlide = 0;
        const dots = document.querySelectorAll('.facility-dots .dot');
        const totalSlides = dots.length;

        function updateFacilitySlider() {
            track.style.transform = `translateX(-${currentFacilitySlide * (100 / totalSlides)}%)`;
            dots.forEach((dot, index) => dot.classList.toggle('active', index === currentFacilitySlide));
        }

        setInterval(() => {
            currentFacilitySlide = (currentFacilitySlide + 1) % totalSlides;
            updateFacilitySlider();
        }, 4000);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentFacilitySlide = index;
                updateFacilitySlider();
            });
        });
    }
});

// ============================
// FAQ SECTION SCRIPT
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq-item");
    faqs.forEach((faq) => {
        const button = faq.querySelector(".faq-question");
        button.addEventListener("click", () => {
            const isActive = faq.classList.contains("active");
            faqs.forEach((item) => item.classList.remove("active"));
            if (!isActive) faq.classList.add("active");
        });
    });
});


// ================================================
// ===== NEW ANIMATED HALLS SLIDER SCRIPT =========
// ================================================
document.addEventListener('DOMContentLoaded', () => {
    const hallSlider = document.querySelector('.slider-wrapper');
    if (hallSlider) {
        const slides = hallSlider.querySelectorAll('.slide');
        let currentSlide = 0;
        let isAnimating = false;
        const animationDuration = 800; // Corresponds to the CSS transition duration

        function goToSlide(slideIndex) {
            slides.forEach(slide => slide.classList.remove('active', 'exit'));
            slides[currentSlide].classList.add('exit');
            currentSlide = (slideIndex + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // --- MOUSE SCROLL CONTROL ---
        hallSlider.addEventListener('wheel', (event) => {
            // Prevent the page from scrolling up/down
            event.preventDefault();

            if (isAnimating) {
                return; // Exit if an animation is already in progress
            }

            isAnimating = true;

            if (event.deltaY > 0) {
                // Scrolling down: go to the next slide
                goToSlide(currentSlide + 1);
            } else {
                // Scrolling up: go to the previous slide
                goToSlide(currentSlide - 1);
            }

            // Reset the animation flag after the transition ends
            setTimeout(() => {
                isAnimating = false;
            }, animationDuration);
        }, { passive: false }); // passive: false is needed for preventDefault()

        // --- INTERACTIVE ICON LOGIC ---
        const interactiveIcon = document.getElementById('interactive-icon');
        const overlay = document.getElementById('interactive-overlay');
        const loader = document.getElementById('interactive-icon-loader');
        const closeLoaderBtn = document.getElementById('close-loader');

        if (interactiveIcon) {
            interactiveIcon.addEventListener('click', () => {
                const rect = interactiveIcon.getBoundingClientRect();
                loader.style.top = `${rect.top}px`;
                loader.style.left = `${rect.left}px`;
                loader.style.width = `${rect.width}px`;
                loader.style.height = `${rect.height}px`;
                loader.classList.remove('final-state');
                overlay.classList.add('visible');
                loader.classList.add('visible');
                setTimeout(() => {
                    loader.style.top = '50%';
                    loader.style.left = '50%';
                    loader.style.width = '200px';
                    loader.style.height = '200px';
                    loader.style.transform = 'translate(-50%, -50%)';
                    loader.classList.add('final-state');
                }, 50);
            });
        }
        
        function closeLoader() {
            if (interactiveIcon) {
                const rect = interactiveIcon.getBoundingClientRect();
                loader.classList.remove('final-state');
                overlay.classList.remove('visible');
                loader.style.top = `${rect.top}px`;
                loader.style.left = `${rect.left}px`;
                loader.style.width = `${rect.width}px`;
                loader.style.height = `${rect.height}px`;
                loader.style.transform = 'translate(0, 0)';
                setTimeout(() => {
                    if (!loader.classList.contains('final-state')) {
                        loader.classList.remove('visible');
                    }
                }, 600);
            }
        }

        closeLoaderBtn.addEventListener('click', closeLoader);
        overlay.addEventListener('click', closeLoader);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".cards-stack .content-card");
    if (cards.length === 0) return;

    // The timeline is now much simpler.
    const timeline = gsap.timeline();

    // We create a single, continuous animation for each card sliding up.
    // GSAP will animate from the CSS starting position (translateY(100vh))
    // to the final position (translateY(0)).
    cards.slice(1).forEach((card, index) => {
        timeline.to(card, {
            y: 0, // Animate to its final resting position
            ease: "none"
        }, index * 0.5); // Stagger the start time slightly so they don't all move at once
    });

    // Create the ScrollTrigger that controls the pinning and the timeline
    ScrollTrigger.create({
        trigger: ".pinning-container",
        start: "top+=300 center",
        end: "+=300%",
        
        // THE CRITICAL FIX:
        // Replaced the 'snap' object with 'scrub: true'.
        // This links the animation directly to the scrollbar position.
        scrub: true,
        
        pin: ".animation-wrapper", // Pin the wrapper that contains everything
        animation: timeline,
        anticipatePin: 1
    });
});


document.querySelectorAll('.feature-icon img').forEach(img => {
    const defaultSrc = img.getAttribute('data-default');
    const hoverSrc = img.getAttribute('data-hover');
    const item = img.closest('.feature-item');
  
    item.addEventListener('mouseenter', () => {
      img.src = hoverSrc;
    });
  
    item.addEventListener('mouseleave', () => {
      img.src = defaultSrc;
    });
  });

