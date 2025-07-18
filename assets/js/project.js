document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', (e) => {
          e.stopPropagation();
          navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
          if (
            navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !hamburger.contains(e.target)
          ) {
            navLinks.classList.remove('active');
          }
        });

        AOS.init({ duration: 800, once: true });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
          });
        });
      });