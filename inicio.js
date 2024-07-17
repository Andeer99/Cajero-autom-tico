const bienvenidaUsuario = document.getElementById("bienvenidaUsuario");
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
const mostrarDatos = document.getElementById("mostrarDatos");
const input = document.createElement('input');

document.addEventListener("DOMContentLoaded", function() {
    if (usuarioActual) {
        bienvenidaUsuario.innerHTML = `Usuario: ${usuarioActual.nombre}`;
    } else {
        bienvenidaUsuario.innerHTML = "No se ha iniciado sesión";
    }
});

function consultarSaldo() {
    if (usuarioActual) {
        mostrarDatos.innerHTML = `Saldo: ${usuarioActual.saldo}`;
    } else {
        mostrarDatos.innerHTML = "Error al revisar saldo";
    }
}

function ingresarMonto() {
    if (usuarioActual) {
        input.type = 'number';
        input.id = 'montoInput';
        input.placeholder = 'Ingrese el monto';
        input.value = '';  // Limpiar el campo de entrada
        mostrarDatos.innerHTML = ''; // Limpiar cualquier mensaje anterior
        mostrarDatos.appendChild(input);
        // Si ya existe un botón de confirmación, se elimina
        const existingButton = document.getElementById('confirmButton');
        if (existingButton) {
            existingButton.remove();
        }
        // Crea y añade botón de confirmación
        let confirmButton = document.createElement('button');
        confirmButton.id = 'confirmButton';
        confirmButton.textContent = 'Confirmar';
        confirmButton.onclick = function() {
            let monto = parseInt(input.value);
            let nuevoSaldo = usuarioActual.saldo + monto;
            if (nuevoSaldo > 990 || nuevoSaldo < 10) {
                mostrarDatos.innerHTML = "El saldo total no cumple con las normas del negocio";
            } else {
                usuarioActual.saldo = nuevoSaldo;
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
                mostrarDatos.innerHTML = `Nuevo Saldo: ${usuarioActual.saldo}`;
            }
        };
        mostrarDatos.appendChild(confirmButton);
    } else {
        mostrarDatos.innerHTML = "Error al ingresar monto";
    }
}

function retirarMonto() {
    if (usuarioActual) {
        input.type = 'number';
        input.id = 'montoInput';
        input.placeholder = 'Retire el monto';
        input.value = '';  
        mostrarDatos.innerHTML = ''; 
        mostrarDatos.appendChild(input);

        
        const existingButton = document.getElementById('confirmButton');
        if (existingButton) {
            existingButton.remove();
        }
        let confirmButton = document.createElement('button');
        confirmButton.id = 'confirmButton';
        confirmButton.textContent = 'Confirmar';
        confirmButton.onclick = function() {
            let monto = parseInt(input.value);
            let nuevoSaldo = usuarioActual.saldo - monto;
            if (nuevoSaldo > 990 || nuevoSaldo < 10) {
                mostrarDatos.innerHTML = "El saldo total no cumple con las normas del negocio";
            } else {
                usuarioActual.saldo = nuevoSaldo;
                localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));
                mostrarDatos.innerHTML = `Nuevo Saldo: ${usuarioActual.saldo}`;
            }
        };
        mostrarDatos.appendChild(confirmButton);
    } else {
        mostrarDatos.innerHTML = "Error al retirar monto";
    }
}
