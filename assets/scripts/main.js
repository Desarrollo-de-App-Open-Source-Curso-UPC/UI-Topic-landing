document.addEventListener('DOMContentLoaded', () => {

  const logo = document.querySelector('.navbar__logo');
  if (logo) {
    logo.addEventListener('click', () => {
      const inicioSection = document.querySelector('#inicio');
      if (inicioSection) {
        inicioSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const navToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  if (navToggle && navbarMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent event from bubbling up
      navbarMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!navbarMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navbarMenu.classList.remove('open');
      }  
      const navLinks = document.querySelectorAll('.nav-item');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        navLinks.forEach(nav => nav.classList.remove('active'));
  
        link.classList.add('active');
      });
    });

    const menuLinks = navbarMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('open');
        });
      });
    });

 const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  }); 
let currentLang = 'en'
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-i18n]')
  elements.forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.')
    let text = translations[lang]
    keys.forEach(k => {
      text = text[k]
    })
    el.textContent = text
  })
}

// Evento del botón de idioma
const langBtn = document.getElementById('langBtn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    translatePage(currentLang);
    langBtn.textContent = currentLang === 'en' ? 'EN' : 'ES'; // opcional
  });
}

/* // Traducir al cargar
document.addEventListener('DOMContentLoaded', () => {
  translatePage(currentLang);
});
   */
  translatePage(currentLang);
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
}})
