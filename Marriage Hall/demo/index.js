const sections = document.querySelectorAll('.scroll-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the section is visible
});

sections.forEach(section => {
  observer.observe(section);
});