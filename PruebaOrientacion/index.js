let mensaje = document.getElementById("mensaje");
window.addEventListener('deviceorientation', manejarOrientacion);

function manejarOrientacion(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  
    mensaje.innerHTML = "alpha: " + alpha.toFixed(2) + "beta: " + beta.toFixed(2) + "gamma: " + gamma.toFixed();
}