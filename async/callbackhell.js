function conversacion(nombre,veces,callback){
    if(veces >= 0){
        hablar(function (){
            conversacion(callback,--veces,callback)
        })
    } else {
        adios(nombre,callback)
    }

}

function hola(nombre, adios){
    conversacion(nombre,3,function (){
        console.log("Proceso termina")
    })
}
function adios(nombre,otroCallback){
    setTimeout(function () {
        console.log("Adios ",nombre)
        otroCallback();
    },1000)
}

console.log("Iniciando proceso...")

hola("Yos",function (nombre){
    hablar( function() {
    adios(nombre,function () {
        console.log("Terminando proceso...")
    })
    })
})

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("Bla bla bla bla bla ...")
        callbackHablar();
    },1060)
}