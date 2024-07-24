gsap.config({
    trialWarn: false,
  })

// /* ---  

// EJERCICIO 01: 
// Animar como aparece el contenido:      
// */


document.addEventListener('DOMContentLoaded', function() {
    const tl = gsap.timeline();
  
	tl.to('.intro', {
      duration: 0.5,
      opacity: 0,
      delay: 1, 
      onComplete: function() {
      }
    });
  
    // Carga de contenido
    tl.from('header', {
      duration: 0.5,
      opacity: 0,
      y: -50,
      ease: 'power2.out'
    });
  
    tl.from('.cursor', {
      duration: 0.5,
      opacity: 0,
      y: -50,
      ease: 'power2.out'
    });

    tl.from('.container', {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.3'); 
  
  });

 

  window.addEventListener('load', () => {
    const intro = document.querySelector('.intro');
    tl.play();
    intro.style.display = 'none'; 
  });