gsap.config({
    trialWarn: false,
  })


/* ---  

EJERCICIO 03: 
Animar menú:      
*/

const button = document.querySelector('.burguer');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelectorAll('.navigation a');
let isOpen = false;

button.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    toggleMenu(); // Ocultar la navegación al hacer clic en un enlace
  });
});

function toggleMenu() {
  if (!isOpen) {
    // Mostrar la navegación
    gsap.set(navigation, { display: 'flex' });
    gsap.to(navigation, {
      duration: 0.3,
      autoAlpha: 1,
      ease: "power2.inOut"
    });

    // Expandir el header para ocupar toda la pantalla
    gsap.to('header', {
      duration: 0.3,
      height: "100vh",
      ease: "power2.inOut"
    });

    // Cambiar el ícono de la hamburguesa a "X"
    gsap.to('.burguer svg', {
      duration: 0.3,
      rotate: 90,
      ease: "power2.inOut"
    });

    isOpen = true;
  } else {
    // Ocultar la navegación
    gsap.to(navigation, {
      duration: 0.3,
      autoAlpha: 0,
      ease: "power2.inOut",
      onComplete: function() {
        gsap.set(navigation, { display: 'none' });
      }
    });

    // Restaurar el tamaño original del header
    gsap.to('header', {
      duration: 0.3,
      height: "auto",
      ease: "power2.inOut"
    });

    // Restaurar el ícono a la hamburguesa
    gsap.to('.burguer svg', {
      duration: 0.3,
      rotate: 0,
      ease: "power2.inOut"
    });

    isOpen = false;
  }
}