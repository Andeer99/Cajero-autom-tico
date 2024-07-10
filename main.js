function ingresar(event){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if(username.value === "ander@gmail.com" && password === "1234"){
        window.location.href = "inicio.html";
        //Pendiente, inhabilitar boton de ingresar 
    } else{
        mensaje.style.color = "white";
        mensaje.innerHTML = "Error al iniciar sesión";
    }
}
let usuarios = [
    {
    user: "Antonio",
    pass: "1234"
    },
    {
    user: "Raul",
    pass: "12345"
    },
    {
    user: "Panarabit",
    pass: "123456"
    }
] 