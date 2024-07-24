gsap.config({
  trialWarn: false,
})

// https://gsap.com/docs/v3/Eases/CustomEase/
gsap.registerPlugin(CustomEase)

// Si necesitáis convertir el 'circ' del cursor a path podéis usar esto, si le pasáis el 'circ' en una constante lo convierte a path.
// MorphSVGPlugin.convertToPath("#elementID");
// https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/

function map(x, a1, a2, b1, b2) {
  return ((x - a1) * (b2 - b1)) / (a2 - a1) + b1
}
function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v))
}
function lerp(v1, v2, alpha) {
  return v1 + (v2 - v1) * alpha
}

/*
  ENUNCIADO:
    En esta práctica vamos a tratar de acercarnos lo más posible a un ejemplo real.
    Podéis usar esta landing de ejemplo o, si preferís, usar una vuestra.
    No se valorará el diseño, solo las animaciones. Se puede usar el HTML y CSS que se crea oportuno, pero solo se tendrán en cuenta las que tengan JS.

    ¡Aplicad tantas de las herramientas que hemos aprendido como podáis!

  REQUISITOS MÍNIMOS:
    - Mínimo de 5 animaciones distintas. ¡Dejad escrito un listado en los comentarios para que no se me escape ninguna!
    - Al menos una timeline, al menos una animación con RaF.
    - Mínimo de una animación ligada a comportamientos del usuario (movimiento de mouse, scroll o cualquier otro evento).

  IDEAS - SUGERENCIAS:
    - Tenéis un cursor SVG con dos círculos preparado para animar.
    - Tenéis una hamburguesa y un menú Lorem preparados para animar.
    - Los estilos de colores vienen con variables de CSS, se podría aplicar un cambio de tema, incluso con iconos animados.
    - ¿Podéis alargar el scroll fácilmente duplicando bloques? Quizás alguna animación de entrada de bloques.
    - ¡Hay una '.intro' oculta! Por si queréis hacer una animación previa antes de mostrar la web.
    - Aplicar una barra de progreso del scroll.
    - Podéis poner bloques nuevos con lo que queráis, por si queréis hacer alguna animación en concreto.
    - Podéis poner hover a los botones u otros elementos.

  COMENTARIOS:
    - Según qué animaciones hagáis, ¡quizás haya que tener en cuenta la carga de las imágenes!
    - Recordad registrar los plugins de GSAP que necesitéis usar.
    - Un customEase hace maravillas.
    - Intentad ser ordenados con el código, siempre tratad de organizar bien en funciones distintas. Así se pueden volver a disparar partes que se necesiten recalcular. Ej.: en resize o al terminar la carga de imágenes.
    - Podéis editar el HTML y CSS tanto como queráis. ¡Incluso usar uno vuestro al 100%! Usar el que hay es completamente opcional.

*/


const progress ={
  current: 0,
  target: 0,
}

// ----- DESARROLLO DEL EJERCICIO ----- //


/* He separado cada ejercicio en un js diferente 
para enterarme mejor de lo que hacía 

El 5 no me funciona :(  quería que cambiase el menu de color */
 












const burguer = document.querySelector('.burguer svg line');

// RAF (Lógica)
function update() {

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
  update();
  requestAnimationFrame(animate) //Elemento por defecto que capa la velocidad a 60/s
}
animate()






