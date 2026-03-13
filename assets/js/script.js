document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if ((page === 'home' && href === 'index.html') ||
        (page === 'profile' && href === 'profile.html') ||
        (page === 'projecten' && href === 'projecten.html') ||
        (page === 'skills' && href === 'skills.html') ||
        (page === 'contacten' && href === 'contacten.html')) {
      link.classList.add('active');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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

  const contactButton = document.getElementById('contactButton');
  const formFeedback = document.getElementById('formFeedback');
  if (contactButton && formFeedback) {
    contactButton.addEventListener('click', () => {
      formFeedback.textContent = 'Demo portfolio: koppel dit later aan Formspree, EmailJS of PHP mail voor echte verzending.';
    });
  }
});
