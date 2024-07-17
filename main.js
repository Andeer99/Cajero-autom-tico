
const username = document.getElementById("username");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

const cuentas = {
    "ander@gmail.com": { nombre: "Ander", saldo: 300 },
    "hiram@gmail.com": { nombre: "Hiram", saldo: 200 },
    "emiliano@gmail.com": { nombre: "Emiliano", saldo: 290 }
};

function ingresar() {
    const user = username.value;
    const pass = password.value;

    if (cuentas[user] && ((user === "ander@gmail.com" && pass === "1234") ||
        (user === "hiram@gmail.com" && pass === "zorro12") ||
        (user === "emiliano@gmail.com" && pass === "emiñol88"))) {
        
        localStorage.setItem("usuarioActual", JSON.stringify(cuentas[user]));
        window.location.href = "inicio.html";
    } else {
        mensaje.style.color = "white";
        mensaje.innerHTML = "Error al iniciar sesión";
    }
}
