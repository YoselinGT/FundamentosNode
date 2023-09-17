const http = require('http');

http.createServer(function(req, res){
    console.log("Nueva peticion")
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.write("Hola, que tal")
            break;
        default:
            res.write("Error 404: No se lo que quieres")
            break;
    }


    res.end();
}).listen(3009);


console.log("Escuchando en el puerto 3000")