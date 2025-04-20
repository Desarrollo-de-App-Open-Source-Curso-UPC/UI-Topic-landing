document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('btnStart');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        window.scrollTo({
          top: document.querySelector('#nosotros')?.offsetTop || 0,
          behavior: 'smooth'
        });
      });
    }
  
    const navLinks = document.querySelectorAll('.nav-item');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
  
        link.classList.add('active');
      });
    });
  
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        alert('Funcionalidad de cambio de idioma próximamente...');
      });
    }
  
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          const id = section.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  });
  