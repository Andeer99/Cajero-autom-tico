function ingresar(event){
    let username = document.getElementById("username");
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if(username.value === "ander@gmail.com" && password === "1234"){
        window.location.href = "inicio.html";
        //Pendiente, inhabilitar boton de ingresar 
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
let usuarios = [
    {
    user: "Hiram",
    pass: "1234"
    },
    {
    user: "Emiliano",
    pass: "12345"
    },
    {
    user: "Ander",
    pass: "123456"
    }
] 