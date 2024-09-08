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

// Obtener el elemento de audio
const audio = document.getElementById('bg-audio');

// Reproducir el audio
audio.play().catch(error => {
    console.error('Error al reproducir el audio:', error);
});