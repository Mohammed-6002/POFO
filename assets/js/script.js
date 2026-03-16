document.addEventListener('DOMContentLoaded', () => {
  // Reveal animations
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Project filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      projectItems.forEach(item => {
        const category = item.dataset.category;
        const shouldShow = filter === 'all' || category === filter;
        item.classList.toggle('hidden-project', !shouldShow);
      });
    });
  });

  // Contact form demo
  const contactButton = document.getElementById('contactButton');
  const formFeedback = document.getElementById('formFeedback');
  if (contactButton && formFeedback) {
    contactButton.addEventListener('click', () => {
      formFeedback.textContent = 'Demo portfolio: koppel dit later aan Formspree, EmailJS of PHP mail voor echte verzending.';
    });
  }

  // Navbar active on scroll (SPA)
  const sections = document.querySelectorAll('header[id], main[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentActive = 0;

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}` || (id === 'home' && link.getAttribute('href') === '#')) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '-20% 0px -40% 0px' // Offset for fixed navbar
  });

  sections.forEach(section => navObserver.observe(section));

  // Smooth scroll for nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // JavaScript voor klikbare skills
  const skillItems = document.querySelectorAll('.skill-item');
  const skillDescription = document.getElementById('skillDescription');

  skillItems.forEach(item => {
    item.addEventListener('click', () => {
      const desc = item.getAttribute('data-description');
      skillDescription.textContent = desc;
    });
  });
    });
  });
});

