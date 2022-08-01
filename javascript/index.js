const showToast = () =>{
    Toastify({
        text: "Nuevos cursos disponibles!",
        duration: 5000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){}
      }).showToast();
  }
  
  let button = document.getElementById("alert1")
  button.onclick = showToast