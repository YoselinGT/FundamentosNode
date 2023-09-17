//const process = require('process')

process.on('exit',() => {
    console.log("Ale, el proceso acabó");
})

process.on('beforeExit',() => {
    console.log("Ale, el proceso va a terminar");
})

process.on('uncaughtException', (err, origen) => {
    console.log("Vaya se nos ha olvidado capturar un error")
})

functionQueNoExiste();
//process.on('uncaughtRejection')

console.log("Esto si el erro no se recoje no sale")
