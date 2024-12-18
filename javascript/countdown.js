// Asegurarse de que el script funcione solo después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Configuración de la fecha objetivo: 2 de marzo de 2025, hora Perú
  const targetDate = new Date("March 2, 2025 00:00:00 GMT-5").getTime();

  // Función para calcular y actualizar el tiempo restante
  function updateCountdown() {
    const now = new Date().getTime(); // Obtener el tiempo actual en milisegundos
    const timeLeft = targetDate - now; // Calcular el tiempo restante

    if (timeLeft > 0) {
      // Cálculo del tiempo restante en días, horas, minutos y segundos
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Mostrar el contador en pantalla
      const countdownElement = document.getElementById("countdown");
      countdownElement.innerText = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos.`;
    } else {
      // Mostrar un mensaje si ya se alcanzó la fecha
      document.getElementById("countdown").innerText = "¡La cuenta regresiva ha terminado!";
      clearInterval(interval); // Detener el contador
    }
  }

  // Llamar a la función cada segundo
  const interval = setInterval(updateCountdown, 1000);
});
