gsap.config({
    trialWarn: false,
  })

/* ---  

EJERCICIO 02: 
Animar el mouse:      
*/

const cursor = document.querySelector('.cursor');
const rect = cursor.getBoundingClientRect();

const positionX = {
    target: rect.width / 2, 
    current: rect.width / 2,
};
const positionY = {
    target: rect.height / 2, 
    current: rect.height / 2,
};

window.addEventListener('mousemove', (e) => {
    positionX.target = e.clientX - rect.left - rect.width / 2;
    positionY.target = e.clientY - rect.top - rect.height / 2;
});

function update() {
    cursor.style.transform = `translate(${positionX.target}px, ${positionY.target}px)`;
}

function animate() {
    update();
    positionX.current = lerp(positionX.current, positionX.target, 0.3);
    positionY.current = lerp(positionY.current, positionY.target, 0.3);
    cursor.style.transform = `translate(${positionX.current}px, ${positionY.current}px)`;
    
    requestAnimationFrame(animate);
}

animate();
