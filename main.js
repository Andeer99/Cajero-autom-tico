class cuentas{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarNombre(){
        let bienvenidaUsuario = document.getElementById("bienvenidaUsuario");
        bienvenidaUsuario.innerHTML = `Usuario: ${this.nombre}`;
    }
    consultarSaldo(){
        let mostrarSaldo = document.getElementById("consultarSaldo");
        mostrarSaldo.innerHTML = `${this.saldo}`;
    }
}
const cuentaAnder = new cuentas("Ander", 300);
const cuentaHiram = new cuentas("Hiram", 200);
const cuentaEmiliano = new cuentas("Emiliano", 290);


function ingresar(event){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje"); 
    if(username.value === "ander@gmail.com" && password === "1234"){
        window.location.href = "inicio.html";
    } else if(username.value === "hiram@gmail.com" && password === "zorr@12"){
        window.location.href = "inicio.html";
    } else if(username.value === "emiliano@gmail.com" && password === "emiñol88"){
        window.location.href = "inicio.html";
    }  
    else{
        mensaje.style.color = "white";
        mensaje.innerHTML = "Error al iniciar sesión";
    }
}

cuentaAnder.mostrarNombre();

