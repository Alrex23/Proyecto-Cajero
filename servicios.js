//Declarar las funciones para llamarlas 
window.addEventListener("DOMContentLoaded", () => {
    saldoEvento()
    ingresarEvento()
    retirarEvento()    
    depositousuario()
    retirousuario()
})
//Para poder observar el panel con los datos guardados despues de dar click a "Consultar saldo"
function saldoEvento() {
    console.log("entre")
    const saldo = document.querySelector("#consulta")
    const saldousuario=document.querySelector("#saldo")
    saldo.addEventListener("click", (e) => {
        e.preventDefault()
        const saldopanel = document.querySelector("#saldopanel")
        const ingresarpanel = document.querySelector("#ingresarpanel")
        const retirarpanel = document.querySelector("#retirarpanel")
        saldousuario.innerHTML=getLocalStorage().saldo
        ingresarpanel.classList.add("d-none")
        retirarpanel.classList.add("d-none")
        saldopanel.classList.remove("d-none")
    })
}
//Para poder observar el panel con los datos guardados despues de dar click a "Ingresar Monto"
function ingresarEvento() {
    console.log("entre")
    const ingresar = document.querySelector("#ingresar")
    console.log(saldo)
    ingresar.addEventListener("click", (e) => {
        e.preventDefault()
        const saldopanel = document.querySelector("#saldopanel")
        const ingresarpanel = document.querySelector("#ingresarpanel")
        const retirarpanel = document.querySelector("#retirarpanel")
        console.log(saldopanel)
        retirarpanel.classList.add("d-none")
        saldopanel.classList.add("d-none")
        ingresarpanel.classList.remove("d-none")

    })
}
//Para poder observar el panel con los datos guardados despues de dar click a "Retirar Monto"
function retirarEvento() {
    console.log("entre")
    const retirar = document.querySelector("#retirar")
    console.log(saldo)
    retirar.addEventListener("click", (e) => {
        e.preventDefault()
        const saldopanel = document.querySelector("#saldopanel")
        const ingresarpanel = document.querySelector("#ingresarpanel")
        const retirarpanel = document.querySelector("#retirarpanel")
        console.log(saldopanel)
        retirarpanel.classList.remove("d-none")
        saldopanel.classList.add("d-none")
        ingresarpanel.classList.add("d-none")
    })
}
//Crear una base de datos local
function setLocalStorage(data){
    localStorage.setItem("usuario",JSON.stringify(data))
}
function getLocalStorage(){
    const usuario=JSON.parse(localStorage.getItem("usuario"))
    return usuario
}
//Poder ingresar montos guardando la entrada 
function depositousuario(){
    const depositarmonto=document.querySelector("#depositarmonto")
    const depositarbtn=document.querySelector("#depositarbtn")
    const usuario=getLocalStorage()
    depositarbtn.addEventListener("click",()=>{
        if(depositarmonto.value=="" || /^[a-z A-z # . -]+$/i.test(depositarmonto.value)
        ){
            alert("Ingresar un monto valido")
            return 
        }
        if (parseInt(depositarmonto.value)+usuario.saldo > 990) { 
            alert("El monto no debe superar los $990") 
            return   
        } 
        actualizarsaldo(usuario,depositarmonto.value)
    })
}
function actualizarsaldo(usuario,montodeposito) {
    const ticket=document.querySelector("#ticket")
    const saldoanterior=document.querySelector("#saldoanterior")
    const nuevosaldo=document.querySelector("#nuevosaldo")
    ticket.classList.remove("d-none")
    ticket.classList.add("d-flex")
    saldoanterior.innerHTML=usuario.saldo
    usuario.saldo=parseInt(montodeposito)+usuario.saldo 
    nuevosaldo.innerHTML=usuario.saldo
    setLocalStorage(usuario)
    alert("Monto depositado correctamente")
    setTimeout(()=>{
        ticket.classList.remove("d-flex")
        ticket.classList.add("d-none")
    },4000)
}
function retirousuario(){
    const retirarmonto=document.querySelector("#retirarmonto")
    const retirarbtn=document.querySelector("#retirarbtn")
    const usuario=getLocalStorage()
    retirarbtn.addEventListener("click",()=>{
        if(retirarmonto.value=="" || /^[a-z A-z # . -]+$/i.test(retirarmonto.value)
        ){
            alert("Ingresar un monto valido")
            return 
        }
        if (usuario.saldo-parseInt(retirarmonto.value) < 10) { 
            alert("El monto no debe ser menor que $10") 
            return   
        } 
        actualizarsaldoretiro(usuario,retirarmonto.value)
    })
}
function actualizarsaldoretiro(usuario,montodeposito) {
    const ticket=document.querySelector("#ticketretirar")
    const saldoanterior=document.querySelector("#saldoanteriorretirar")
    const nuevosaldo=document.querySelector("#nuevosaldoretirar")
    ticket.classList.remove("d-none")
    ticket.classList.add("d-flex")
    saldoanterior.innerHTML=usuario.saldo
    usuario.saldo=usuario.saldo-parseInt(montodeposito) 
    nuevosaldo.innerHTML=usuario.saldo
    setLocalStorage(usuario)
    alert("Monto retirado correctamente")
    setTimeout(()=>{
        ticket.classList.remove("d-flex")
        ticket.classList.add("d-none")
    },4000)
}