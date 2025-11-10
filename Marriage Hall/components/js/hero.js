// Hero Component JavaScript
class HeroComponent {
    constructor() {
        this.playButton = document.getElementById('playButton');
        this.heroBackground = document.querySelector('.hero-background');
        this.init();
    }

    init() {
        this.setupPlayButton();
        this.setupParallaxEffect();
    }

    setupPlayButton() {
        this.playButton.addEventListener('click', () => {
            this.handlePlayButtonClick();
        });
    }

    handlePlayButtonClick() {
        // You can add video modal or redirect to video here
        // For now, showing an alert
        alert('Video player would open here!');
        
        // Alternative: Open a video modal
        // this.openVideoModal();
    }

    openVideoModal() {
        // Create video modal
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <video controls autoplay>
                    <source src="path-to-your-video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close on outside click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }

    setupParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (this.heroBackground) {
                this.heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
}

// Initialize hero component when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroComponent();
});
