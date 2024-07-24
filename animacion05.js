gsap.config({
    trialWarn: false,
  })

  function map(x, a1, a2, b1, b2) {
    return ((x - a1) * (b2 - b1)) / (a2 - a1) + b1
  }
  function clamp(v, min, max) {
    return Math.min(max, Math.max(min, v))
  }
  function lerp(v1, v2, alpha) {
    return v1 + (v2 - v1) * alpha
  }
  
// /* ---  

// EJERCICIO 05: 
// Cuando el scroll supera el módulo del contenido, el menu pasa a color blanco:      
// */



const burguer = document.querySelector('.burguer svg line');

function updateburguer() {

  window.addEventListener('scroll', (e) => {
    const windowheight = window.innerHeight; // altura de la ventana
    const totalScroll = document.body.scrollHeight; //altura del body
    const scroll = window.scrollY; // 
  
    const min = 0;
    const max = totalScroll - windowheight;
    progress.target = map(scroll, min, max, 0, 1); //Le indicas los valores entre los que se mueve (espacio, número asignado)
    progress.current = lerp(progress.current, progress.target, 0.3 ) // el valor que tienes ahora y al que quieres acercarte. 0.3 espara que vaya más suave.

    if (progress.current > 0.27) {
      burguerLine.style.color = 'white';
    } else {
      burguerLine.style.color = 'currentColor'; 
    }

    console.log(progress)
  })
  
}


//Funcion que dispara el RAF  (Siempre al final)
function animate() {
  updateburguer();
  requestAnimationFrame(animate) //Elemento por defecto que capa la velocidad a 60/s
}
animate()
