// En el JavaScript
document.getElementById('descargarCV').addEventListener('click', function() {
    // Cambia la ruta al archivo PDF o el formato que prefieras
    var rutaArchivoCV = 'file:///C:/Users/jaran/OneDrive/Documentos/CV%20MJ%202024/CV%20MJARANCIBIA-2024.pdf';
  
    // Modifica el formulario oculto y envía la solicitud
    var downloadForm = document.getElementById('downloadForm');
    downloadForm.action = rutaArchivoCV;
    downloadForm.querySelector('#downloadButton').click();
  });
  