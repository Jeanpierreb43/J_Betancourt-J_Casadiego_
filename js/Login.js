var Correcto =""
var cont = 1
function entrar(){
    var usuario1 = document.getElementById("usuario").value;
    var contraseña1 = document.getElementById("contraseña").value;
 if((usuario1.length == 0) & (contraseña1.length == 0)){
     alert("Llenar ambos campos")
    }else if(usuario1.length == 0){
     alert("Ingrese un usuario")
    }else if (contraseña1.length == 0){
     alert("Ingrese una contraseña")
    }else if(usuario1.length<4){
        alert("El usuario debe tener minimo 4 caracteres")
    }else{
 fetch("./js/usuarios.json")

 
 .then(function(res){
 return res.json()
 })
 .then(function(datos){
 datos.forEach(function(jason) {
 if(jason.Usuario==usuario1){
     if(jason.Contraseña==contraseña1){
     alert("Bienvenido: "+ jason.Nombre  +" " + jason.Apellido)
    Correcto= (jason.Nombre) + " "+ (jason.Apellido)
    cont=2
     localStorage.setItem("Nombre", Correcto);
 
     window.location='./html/inicio.html'
     }else{
         alert("Contraseña incorrecta")
         cont=2
     }
}
})
if(cont==1){

    alert("Usuario no registrado")
}
})
.catch(function(error){

    alert(error)
})
}
}

function mostrar(){
var Nom= localStorage.getItem('Nombre');
document.getElementById('Datos').innerHTML = " "+Nom
}
