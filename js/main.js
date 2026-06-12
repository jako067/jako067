/* NAV — active link highlight on scroll */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => sectionObserver.observe(s));

/* NAV — hide on scroll down, show on scroll up */
let lastScrollY = 0;
const nav = document.querySelector('nav');
nav.style.transition = 'transform .3s ease';

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  nav.style.transform = (currentY > lastScrollY && currentY > 80)
    ? 'translateY(-100%)'
    : 'translateY(0)';
  lastScrollY = currentY;
}, { passive: true });
