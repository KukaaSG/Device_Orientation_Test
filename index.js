let mensaje = document.getElementById("mensaje");
let btn = document.getElementById("boton").addEventListener("click",onClick);
window.addEventListener('deviceorientation', manejarOrientacion);


function manejarOrientacion(event) {
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  
    mensaje.innerHTML = "alpha: " + alpha.toFixed(2) + "beta: " + beta.toFixed(2) + "gamma: " + gamma.toFixed();
}

function onClick() {
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // Handle iOS 13+ devices.
    DeviceMotionEvent.requestPermission()
      .then((state) => {
        if (state === 'granted') {
          window.addEventListener('devicemotion', manejarOrientacion);
        } else {
          console.error('Se rechazo la peticion de acceso');
        }
      })
      .catch(console.error);
  } else {
    // Handle regular non iOS 13+ devices.
    window.addEventListener('devicemotion', manejarOrientacion);
  }
}