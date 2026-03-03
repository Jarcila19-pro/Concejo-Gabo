// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('nav-overlay');

function toggleMenu(open) {
  burger.classList.toggle('open', open);
  navLinks.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

burger.addEventListener('click', () => toggleMenu(!navLinks.classList.contains('open')));
overlay.addEventListener('click', () => toggleMenu(false));

// Cerrar al hacer click en un link
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => toggleMenu(false));
});