/* ═══════════════════════════════════════════════
   SONAPANI — Main Script
═══════════════════════════════════════════════ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Mobile menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('show');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('show');
}

/* ── Intersection Observer — reveal on scroll ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach(el => revealObserver.observe(el));

/* ── Stats counter animation ── */
const statNums = document.querySelectorAll('.stat-num');

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

const statsSection = document.querySelector('.hero-stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !statsAnimated) {
      statsAnimated = true;
      statNums.forEach(el => animateCounter(el));
    }
  },
  { threshold: 0.5 }
);
if (statsSection) statsObserver.observe(statsSection);

/* ── Contact form submit ── */
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.style.display = 'none';
  success.classList.add('show');
}

/* ── Smooth active nav link highlight ── */
const sections = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--primary)' : '';
  });
}
window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ── Coverage bars animate when in view ── */
const zoneFills = document.querySelectorAll('.zone-fill');
const coverageObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      zoneFills.forEach(fill => {
        fill.style.animation = 'none';
        fill.offsetHeight; // reflow
        fill.style.animation = 'barGrow 1.5s ease-out both';
      });
      coverageObserver.disconnect();
    }
  },
  { threshold: 0.3 }
);
const mapCard = document.querySelector('.bihar-map-card');
if (mapCard) coverageObserver.observe(mapCard);
