document.addEventListener('DOMContentLoaded', () => {
    const openCameraButton = document.getElementById('openCameraButton');
    const cameraInput = document.getElementById('cameraInput');
    const preview = document.getElementById('preview');

    openCameraButton.addEventListener('click', () => {
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
});
