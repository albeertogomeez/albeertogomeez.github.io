// Función de JavaScript para detectar si el formulario está bien rellenado o no. Utilizado directamente desde el apartado Validation de Bootstrap
(function () {
'use strict'

var forms = document.querySelectorAll('.needs-validation')

Array.prototype.slice.call(forms)
.forEach(function (form) {
form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }
    form.classList.add('was-validated')
}, false)
})
})()

// Función de JavaScript que muestra un alert por pantalla si uno (o más) campos no han sido rellenados.
document.getElementById('formCrash').addEventListener('submit', function() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellidos').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;
    var numero = document.getElementById('numero').value;
    var piso = document.getElementById('piso').value;
    var localidad = document.getElementById('localidad').value;
    var ciudad = document.getElementById('ciudad').value;
    var cp = document.getElementById('cp').value;
    var correo = document.getElementById('correo').value;
    var siono = document.getElementById('siono').value;

    if (!nombre || !apellido || !telefono || !direccion || !numero || !piso || !localidad || !ciudad || !cp || !correo || !siono) {
        alert('El documento no está completamente rellenado. Por favor, revíselo y rellene correctamente los datos.');
    } else {
        alert('Documento enviado correctamente');
    }
}); 

// Función de JavaScript para hacer funcionales los modals, usando un GetElementById para cada Modal. Utilizado directamente desde el apartado Modal de Bootstrap
var modalND = document.getElementById('modalND')
var modalND2 = document.getElementById('modalND2')
var modalND3 = document.getElementById('modalND3')
var modalND4 = document.getElementById('modalND4')
var modalVV = document.getElementById('modalVV1')
var modalVV2 = document.getElementById('modalVV2')
var modalSE = document.getElementById('modalSE1')
var modalSE2 = document.getElementById('modalSE2')

var boton = document.getElementById('boton')

myModal.addEventListener('shown.bs.modal', function () {
    boton.focus()
})