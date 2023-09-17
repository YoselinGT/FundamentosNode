function hola(nombre, miCallback){
    setTimeout(function () {
        console.log("Hola" + nombre)
        miCallback(nombre);
    })
}

function adios(nombre,otroCallback){
    setTimeout(function () {
        console.log("Adios",nombre)
        otroCallback();
    },1000)
}

console.log("Iniciando proceso...")

hola("Yos",function (nombre){
    adios(nombre,function () {
        console.log("Terminando proceso...")
    })
})