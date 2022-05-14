function cancelHoverEffect(e, bgColor){
    e.currentTarget.style.background = bgColor;
    e.currentTarget.style.borderImage = null;
}

function hoverEffect(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.7),rgba(255,255,255,0.3) )`;
    e.currentTarget.style.borderImage = `radial-gradient(20% 75% at ${x}px ${y}px ,rgba(255,255,255,0.7),rgba(255,255,255,0.4) ) 1 / 2px / 0px stretch `;
}

export { cancelHoverEffect, hoverEffect };