// Event Venue Website - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Book Now Button Functionality
    const bookButtons = document.querySelectorAll('.event-book-btn');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the event type from the card
            const eventCard = this.closest('.event-card');
            const eventType = eventCard.querySelector('h3').textContent;
            
            // Show loading state
            const originalText = this.innerHTML;
            this.innerHTML = 'Processing...';
            this.disabled = true;
            
            // Simulate booking process
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                showBookingModal(eventType);
            }, 1500);
        });
    });

    // Booking Modal Function
    function showBookingModal(eventType) {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Book ${eventType}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="booking-form">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="date">Event Date</label>
                            <input type="date" id="date" name="date" required>
                        </div>
                        <div class="form-group">
                            <label for="guests">Number of Guests</label>
                            <input type="number" id="guests" name="guests" min="1" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Special Requirements</label>
                            <textarea id="message" name="message" rows="4" placeholder="Any special requirements or requests..."></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Submit Booking Request</button>
                    </form>
                </div>
            </div>
        `;

        // Add modal styles
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 20px;
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideIn 0.3s ease;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem 2rem 1rem 2rem;
                border-bottom: 1px solid #eee;
            }
            
            .modal-header h3 {
                font-family: 'Playfair Display', serif;
                color: #7a0000;
                margin: 0;
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: 2rem;
                cursor: pointer;
                color: #999;
                transition: color 0.3s ease;
            }
            
            .modal-close:hover {
                color: #7a0000;
            }
            
            .modal-body {
                padding: 2rem;
            }
            
            .booking-form {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .form-group {
                display: flex;
                flex-direction: column;
            }
            
            .form-group label {
                font-weight: 600;
                margin-bottom: 0.5rem;
                color: #333;
            }
            
            .form-group input,
            .form-group textarea {
                padding: 0.8rem;
                border: 2px solid #eee;
                border-radius: 10px;
                font-size: 1rem;
                transition: border-color 0.3s ease;
            }
            
            .form-group input:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: #d4a017;
            }
            
            .submit-btn {
                background: #d4a017;
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .submit-btn:hover {
                background: #b8941f;
                transform: translateY(-2px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
        `;

        document.head.appendChild(modalStyles);
        document.body.appendChild(modalOverlay);

        // Close modal functionality
        const closeModal = () => {
            modalOverlay.remove();
            modalStyles.remove();
        };

        modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });

        // Form submission
        const form = modalOverlay.querySelector('.booking-form');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = 'Submitting...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Booking Request Submitted!';
                submitBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    closeModal();
                    alert('Booking request submitted successfully! We will contact you soon.');
                }, 1500);
            }, 2000);
        });
    }

    // Card hover effects enhancement
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('wedding-featured') 
                ? 'scale(1.05) translateY(-5px)' 
                : 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('wedding-featured') 
                ? 'scale(1.05)' 
                : 'translateY(0)';
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal-overlay');
            if (modal) {
                modal.remove();
            }
        }
    });

    console.log('Event Venue Website loaded successfully! 🎉');
  });
  