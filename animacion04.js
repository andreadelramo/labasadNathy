gsap.config({
    trialWarn: false,
  })


// /* ---  

// EJERCICIO 04: 
// Animación del texto de intro:      
// */

const p = document.querySelector('.intro p');
const h1 = document.querySelector('h1');
const splitp = new SplitText(p, { types: 'lines, words, chars' });
const splith1 = new SplitText(h1, { types: 'lines, words, chars' });

gsap.from(splitp.chars, {
	duration: 0.5,
	autoAlpha: 0,
	y: 20,
	stagger: 0.03,
	ease: "power2.inOut",
});

gsap.from(splith1.chars, {
	duration: 0.5,
	autoAlpha: 0,
	y: 20,
	stagger: 0.03,
    delay:2,
	ease: "power2.inOut",
});