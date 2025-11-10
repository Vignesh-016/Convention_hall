// Happiness Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to video thumbnails
    const videoThumbs = document.querySelectorAll('.video-thumb');
    
    videoThumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            // You can add video modal or redirect functionality here
            console.log(`Video ${index + 1} clicked`);
            // Example: Open a video modal or redirect to video page
            // window.open('video-page.html', '_blank');
        });
    });

    // Add click event listener to book button
    const bookBtn = document.querySelector('.book-btn');
    if (bookBtn) {
        bookBtn.addEventListener('click', function() {
            // You can add booking functionality here
            console.log('Book now button clicked');
            // Example: Open booking modal or redirect to booking page
            // window.location.href = 'booking.html';
        });
    }

    // Add hover effects for video thumbnails
    videoThumbs.forEach(thumb => {
        thumb.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        thumb.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
