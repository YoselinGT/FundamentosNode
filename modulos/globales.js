console.log(global)
console.log(setInterval)

let i = 0;
let intervalo =setInterval(function (){
    if(i === 3){
        clearInterval(intervalo)
    }
    i++;
    console.log("hola")
})

setImmediate(function() {
    console.log("Hola")
});


console.log(process)

console.log(__dirname)

console.log(__filename)