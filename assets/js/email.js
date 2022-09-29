const btn = document.getElementById("btnEnviarCorreo");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";
  btn.style.backgroundColor = "#393e46fb";
  btn.style.color = "white";
  btn.style.fontWeight = "bold";

   const serviceID = 'default_service';
   const templateID = 'template_wmabv4e';
  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Mensaje enviado!",
            showConfirmButton: false,
            timer: 1500,
            color: "#FFFFFF",
            background: "#202020",
        });
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtAsunto").value = "";
        document.getElementById("txtTel").value = "";
        document.getElementById("txtCorreo").value = "";
        document.getElementById("txtMensaje").value = "";
        btn.value = "Enviar";
    },
    (err) => {
      btn.value = "Enviar";
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error al enviar mensaje",
        showConfirmButton: false,
        timer: 1500,
        color: "#FFFFFF",
        background: "#202020",
      });
    }
  );
});
