function baseDatos(){
    const usuarios=[
        {
            usuario:"Alan",
            contrasena:123,
            saldo:200
        },
        {
            usuario:"Pedro",
            contrasena:456,
            saldo:150
        },
        {
            usuario:"Juan",
            contrasena:789,
            saldo:300
        }
    ]
    return usuarios
}
function login(){
    const error=document.getElementById("errores")
    const usuario=document.inicio.usuario.value
    const contrasena=document.inicio.contrasena.value
    const usuarios=baseDatos()
    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if(element.usuario==usuario && element.contrasena==contrasena){
            localStorage.setItem("usuario",JSON.stringify({
                usuario:element.usuario,saldo:element.saldo
            }))
            window.location.href="./Servicios.html"
            break
        }
        else if(index==usuarios.length-1) {
            error.classList.remove("d-none")
        }
      
    }
}



