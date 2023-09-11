function validarEdad() {
    var edad = document.getElementById('edad').value;

    if (edad < 1 || edad > 100) {
        alert("incorrecto");
    } else {
        if (edad < 18) {
            alert("usted es menor de edad");
        } else {
            alert("usted es mayor de edad");
        }
    }
}
