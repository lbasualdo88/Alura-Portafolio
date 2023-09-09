const inputs = document.querySelectorAll(".input-text");


inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});


function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
    if (input.validity.valid) { 
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = ""
      }  else {       
        input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
  ]
  const mensajeDeError = {
    nombre: {
      valueMissing: "Este campo no puede estar vacio"
    },
    email: {
      valueMissing: "Este campo no puede estar vacio",
      typeMismatch: "El correo no es válido"
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacio",
    },
    textarea: {
        valueMissing: "Este campo no puede estar vacio"
    }
  }
  function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ""
    tipoDeErrores.forEach( error => {
      if (input.validity[error]) {       
       mensaje = mensajeDeError[tipoDeInput][error];      
      }
    });
    return mensaje
  }