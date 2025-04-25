document.addEventListener("DOMContentLoaded", () => { 
  console.log("DOM completamente cargado");

  //Cambiar entre las vistas
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

  // Manejador de registro
  const signUpForm = document.querySelector("#sign-up-form");
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Evento de registro activado");

    const username = document.querySelector("#register-username").value.trim();
    const email = document.querySelector("#register-email").value.trim();
    const password = document.querySelector("#register-password").value();

    if(username && email && password)
    {
      if(localStorage.getItem(username))
      {
        alert("Este usuario ya está registrado. Por favor, inicia sesión.");
      }
      else
      {
        localStorage.setItem(username, JSON.stringify({ email, password }));
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        signUpForm.reset();
      }
    }
    else
    {
      alert("Por favor, completa todos los campos.");
    } 
  });

  // Manejador de inicio de sesión
  const signInForm = document.querySelector("#sign-in-form");
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    const storedUser = localStorage.getItem(username);

    if(storedUser)
    {
      const userData = JSON.parse(storedUser);
      if(userData.password == password)
      {
        localStorage.setItem("currentUser", username);
        alert("Inicio de sesión exitoso. Bienvenido " + username + "!");
        window.location.href = "index.html"; // Redirigir a la página principal
      } 
      else 
      {
        alert("Contraseña incorrecta.");
      }
    }
    else
    {
      alert("Usuario no encontrado. Por favor, regístrate.");
    }
  }); 


  // Manejador de recuperar contraseña
  const recoverPasswordForm = document.querySelector("#recover-password-form");
  recoverPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#recovery-email").value.trim();  

    if(email)
    {
      
    }
    else
    {
      alert("Email no registrado.");
    }
  }); 
});

function simulateLogin(platform) 
{
  switch(platform)
  {
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

