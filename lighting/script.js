
// Navigation bar scroll behavior
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  const heroSection = document.querySelector('section');
  
  if (heroSection && nav) {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > heroHeight) {
      nav.classList.remove('-translate-y-full');
    } else {
      nav.classList.add('-translate-y-full');
    }
  }
});

// // Mobile menu toggle
// const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

// if (mobileMenuBtn) {
//   mobileMenuBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
//   });
// }

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
    }
  });
});
  
// Gallery data
const galleries = {
  'hadestown': [
    'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1200',
    'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1200',
    'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1200',
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200'
  ],
  'hamilton': [
    'https://images.unsplash.com/photo-1503095396549-807759245b35?w=1200',
    'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200',
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200'
  ],
  'moulin-rouge': [
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200'
  ],
  'wicked': [
    'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=1200',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200',
    'https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?w=1200'
  ]
};

let currentGallery = 'hadestown';
let currentImageIndex = 0;

// Show gallery function
function showGallery(galleryName) {
  // Hide all galleries
  document.querySelectorAll('.gallery-content').forEach(gallery => {
    gallery.classList.add('hidden');
  });
  
  // Show selected gallery with fade effect
  const selectedGallery = document.getElementById(galleryName + '-gallery');
  selectedGallery.classList.remove('hidden');
  
  // Update button states
  document.querySelectorAll('.show-btn').forEach(btn => {
    btn.classList.remove('active', 'border-accent', 'text-accent');
  });
  event.target.classList.add('active', 'border-accent', 'text-accent');
  
  currentGallery = galleryName;
}

// Lightbox functions
function openLightbox(index, gallery) {
  currentImageIndex = index;
  currentGallery = gallery;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = galleries[gallery][index];
  lightbox.classList.remove('hidden');
  lightbox.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  document.body.style.overflow = 'auto';
}

function nextImage() {
  const images = galleries[currentGallery];
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

function previousImage() {
  const images = galleries[currentGallery];
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('hidden')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
  }
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

const lightboxElement = document.getElementById('lightbox');
if (lightboxElement) {
  lightboxElement.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  lightboxElement.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}

function handleSwipe() {
  if (touchEndX < touchStartX - 50) nextImage();
  if (touchEndX > touchStartX + 50) previousImage();
}

// Scroll fade-in animation
function observeElements() {
  const elements = document.querySelectorAll('[data-fade-in]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize hero fade-in on page load
function initializeHeroFadeIn() {
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    // Add visible class immediately for hero content (fade in on page load)
    setTimeout(() => {
      heroContent.classList.add('visible');
    }, 1);
  }
}

// Initialize fade-in animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
  initializeHeroFadeIn();
});