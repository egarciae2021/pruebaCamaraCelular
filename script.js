document.addEventListener('DOMContentLoaded', () => {
    const openCameraButton = document.getElementById('openCameraButton');
    const cameraInput = document.getElementById('cameraInput');
    const preview = document.getElementById('preview');
    const locationDiv = document.getElementById('location');

    openCameraButton.addEventListener('click',  () => {
        cameraInput.click();
    });

    cameraInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Obtener la ubicación
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        locationDiv.innerHTML = "La geolocalización no es soportada por este navegador.";
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        locationDiv.innerHTML = `Latitud: ${latitude} <br> Longitud: ${longitude}`;
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                locationDiv.innerHTML = "El usuario ha denegado la solicitud de geolocalización.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationDiv.innerHTML = "La información de la ubicación no está disponible.";
                break;
            case error.TIMEOUT:
                locationDiv.innerHTML = "La solicitud para obtener la ubicación ha caducado.";
                break;
            case error.UNKNOWN_ERROR:
                locationDiv.innerHTML = "Ha ocurrido un error desconocido.";
                break;
        }
    }
});
