document.addEventListener("DOMContentLoaded", function() {
    const bienvenidaUsuario = document.getElementById("bienvenidaUsuario");
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    if (usuarioActual) {
        bienvenidaUsuario.innerHTML = `Usuario: ${usuarioActual.nombre}`;
    } else {
        bienvenidaUsuario.innerHTML = "No se ha iniciado sesión";
    }
});