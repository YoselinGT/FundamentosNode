let suma = 0;

console.time('bucle')
for(let i=0; i<10000000000; i++){
    suma += 1;
}

console.log("suma",suma)
console.timeEnd('bucle');


const asincrona = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Termina el proceso asincrono")
            resolve()
        },10000)
    })
}

console.time('asincrona')
asincrona()
console.timeEnd('asincrona');

