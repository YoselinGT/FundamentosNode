console.time();

console.log("Algo");


console.info("Paso algo")


console.error("Sucedio un error")

console.warn("Es una advertencia")


var table = [
    {
        a: "1",
        b: "2"

    },{
        a: "1",
        b: "2"
    }
]

console.group("conver")
console.log("Conversaciones")
console.log("Hola")
console.log("Blablabla")
console.log("Adios")
console.groupEnd("conver")

console.table(table)

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')

console.timeEnd();