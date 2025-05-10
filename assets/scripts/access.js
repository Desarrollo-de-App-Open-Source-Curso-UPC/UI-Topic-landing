/* To access each view from the index */

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  const container = document.querySelector(".container");

  if (hash === "#signup") {
    container.classList.add("sign-up-mode");
  } else if (hash === "#signin") {
    container.classList.remove("sign-up-mode");
  }
});

/* To access each view from the same access file */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  function updateModeFromHash() {
    const hash = window.location.hash;

    container.classList.remove("sign-up-mode", "recover-password-mode");

    if (hash === "#signup") {
      container.classList.add("sign-up-mode");
    } else if (hash === "#recover") {
      container.classList.add("recover-password-mode");
    } else {
      container.classList.remove("sign-up-mode", "recover-password-mode");
    }
  }

  updateModeFromHash();

  window.addEventListener("hashchange", updateModeFromHash);
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado");

  // Switch between views
  const container = document.querySelector(".container");
  const toggleSignUp = document.querySelector("#toggle-sign-up");
  const toggleSignIn = document.querySelector("#toggle-sign-in");
  const toggleRecoverPassword = document.querySelector("#toggle-recover-password");

  toggleSignUp.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  toggleSignIn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });

  toggleRecoverPassword.addEventListener("click", () => {
    container.classList.add("recover-password-mode");
  });

  // Registry handler
  const signUpForm = document.querySelector("#sign-up-form");
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Evento de registro activado");

    const username = document.querySelector("#register-username").value.trim();
    const email = document.querySelector("#register-email").value.trim();
    const password = document.querySelector("#register-password").value();

    if (username && email && password) {
      if (localStorage.getItem(username)) {
        alert(`Este usuario ya está registrado. Por favor, inicia sesión.`);
      }
      else {
        localStorage.setItem(username, JSON.stringify({ email, password }));
        alert(`Registro exitoso. Ahora puedes iniciar sesión.`);
        signUpForm.reset();
      }
    }
    else {
      alert(`Por favor, completa todos los campos.`);
    }
  });

  // Login Handler
  const signInForm = document.querySelector("#sign-in-form");
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    const storedUser = localStorage.getItem(username);

    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password == password) {
        localStorage.setItem("currentUser", username);
        alert(`Inicio de sesión exitoso. Bienvenido ` + username + `!`);
        window.location.href = "index.html";
      }
      else {
        alert(`Contraseña incorrecta.`);
      }
    }
    else {
      alert(`Usuario no encontrado. Por favor, regístrate.`);
    }
  });

  let currentLang = 'en'
  // Función que traduce el contenido
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
      langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN'; // opcional
    });
  }

  // Traducir al cargar
  document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLang);
  });
  // Password recovery manager
  const recoverPasswordForm = document.querySelector("#recover-password-form");
  recoverPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#recovery-email").value.trim();

    if (email) {
      alert(`Se ha enviado un enlace de recuperación a ${email}`);

      document.querySelector("#recovery-email").value = "";

    } else {
      alert("Email no registrado.");
    }
  });
});

function simulateLogin(platform) {
  switch (platform) {
    case "Google":
      window.location.href = "https://accounts.google.com/o/oauth2/v2/auth";
      break;
    case "Facebook":
      window.location.href = "https://www.facebook.com/v12.0/dialog/oauth";
      break;
    case "Apple":
      window.location.href = "https://support.apple.com/es-cl/111001?device-type=iphone";
      break;
    default: break;
  }
}

