function openMap() {
    var url = "https://www.google.com/maps?q=Salón+Real+Zacatecas,Monclova,Coahuila&z=15";
    window.location.href = url;
}

function ConfirmMessage() {
    var primInv = document.getElementById("Priminv").value;
    var segInv = document.getElementById("Seginv").value;

    if (!primInv || !segInv) {
        alert("Por favor, llene ambos campos de invitados antes de confirmar.");
        return;
    }

    var mensaje = "GRACIAS POR INVITARNOS, " + primInv + " y " + segInv + " CONFIRMAMOS!!";
    var url = "https://api.whatsapp.com/send?phone=8129797754&text=" + encodeURIComponent(mensaje);

    window.location.href = url;
}

window.onload = function() {
    // Crear un nuevo elemento de audio
    var audio = new Audio('ARCHIVOS/BGMUSIC.ogg');
    audio.setAttribute('preload', 'auto'); // Pre-cargar el audio

    // Función para reproducir el audio
    function playAudio() {
        audio.play().catch(function(error) {
            console.error('Error al reproducir el audio:', error);
        });
        // Eliminar el evento para que no se reproduzca más de una vez
        window.removeEventListener('scroll', playAudio);
    }

    // Agregar el evento de scroll
    window.addEventListener('scroll', playAudio);
};

