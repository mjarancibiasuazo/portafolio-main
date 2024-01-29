function copiarCorreo() {
    // Selecciona el elemento span que contiene el correo electrónico
    var emailSpan = document.getElementById("email");
  
    // Verifica si el elemento existe
    if (emailSpan) {
      // Crea un campo de entrada de texto temporal
      var tempInput = document.createElement("input");
      tempInput.value = emailSpan.textContent;
      document.body.appendChild(tempInput);
  
      // Selecciona y copia el contenido del campo de entrada de texto temporal
      tempInput.select();
      document.execCommand("copy");
  
      // Elimina el campo de entrada de texto temporal
      document.body.removeChild(tempInput);
  
      // Puedes mostrar un mensaje de éxito si lo deseas
      alert("Correo electrónico copiado: " + emailSpan.textContent);
    } else {
      console.error("Elemento con id 'email' no encontrado.");
    }
  }
  