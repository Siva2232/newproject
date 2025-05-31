const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
const cards = document.querySelectorAll('.service-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.style.transform = 'scale(0.97)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150);
  });
});

// Custom Desktop Cursor
const customCursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  if (window.matchMedia('(hover: hover)').matches) {
    customCursor.style.top = `${e.clientY}px`;
    customCursor.style.left = `${e.clientX}px`;
  }
});

// Touch Ripple for Mobile
document.addEventListener('touchstart', function(e) {
  const touch = e.touches[0];
  const ripple = document.createElement('div');
  ripple.classList.add('touch-ripple');
  ripple.style.top = `${touch.clientY}px`;
  ripple.style.left = `${touch.clientX}px`;
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
