function serompe(){
    return 3 + z
}

function otraFunction() {
    return serompe();
}

function serRompeAsync(cb) {
    setTimeout(function (){
        try {
            return 3 + z
        } catch (err){
            console.error("Erro en mi funcion asincrona")
            cb(err)
        }

    })
}

try {
    //otraFunction()
    serRompeAsync( (error) => { console.log("Hay error",error.message)})
} catch (err){
    console.error("Algo se rompio", err.message)
}

console.log("Esto esta al final")