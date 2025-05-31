document.addEventListener('DOMContentLoaded', () => {
  // Header Toggle Menu
  (function headerToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    } else {
      console.warn('Header toggle elements not found.');
    }
  })();

  // Hero Slider
  (function heroSlider() {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('dots');
    let heroIndex = 0;
    let heroIntervalId;

    if (!slider || !slides.length || !dotsContainer) {
      console.warn('Hero slider elements not found.');
      return;
    }

    // Create navigation dots
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        clearInterval(heroIntervalId);
        goToSlide(index);
        startSlider();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Go to specific slide
    function goToSlide(index) {
      slider.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      heroIndex = index;
    }

    // Auto slide function
    function startSlider() {
      heroIntervalId = setInterval(() => {
        heroIndex = (heroIndex + 1) % slides.length;
        goToSlide(heroIndex);
      }, 4000);
    }

    // Pause on hover
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.addEventListener('mouseenter', () => {
        clearInterval(heroIntervalId);
      });
      heroSection.addEventListener('mouseleave', startSlider);
    }

    // Start the slider
    startSlider();
  })();

  // Services Carousel
  (function servicesCarousel() {
    const carousel = document.querySelector('.services-carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const cards = document.querySelectorAll('.carousel-inner .service-card');
    let carouselIndex = 0;

    if (!carousel || !carouselInner || !prevArrow || !nextArrow || !cards.length) {
      console.warn('Services carousel elements not found.');
      return;
    }

    function updateCarousel() {
      // Calculate translateX based on card width (85%) and margin (15px)
      const cardWidth = 85; // Percentage
      const margin = 15; // Pixels, converted to percentage relative to container
      const containerWidth = carousel.offsetWidth;
      const marginPercent = (margin / containerWidth) * 100;
      const totalOffset = (cardWidth + marginPercent) * carouselIndex;
      carouselInner.style.transform = `translateX(-${totalOffset}%)`;
    }

    nextArrow.addEventListener('click', () => {
      carouselIndex = (carouselIndex + 1) % cards.length;
      updateCarousel();
    });

    prevArrow.addEventListener('click', () => {
      carouselIndex = (carouselIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        // Swipe left
        carouselIndex = (carouselIndex + 1) % cards.length;
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        carouselIndex = (carouselIndex - 1 + cards.length) % cards.length;
      }
      updateCarousel();
    });

    // Update carousel on window resize to adjust for dynamic container width
    window.addEventListener('resize', updateCarousel);

    // Initial update
    updateCarousel();
  })();
});