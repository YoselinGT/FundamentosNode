const fs = require('fs');
const stream = require('stream')
const util = require('util')

/*
let data = '';

let readableStream = fs.createReadStream(__dirname+'/input.txt');
readableStream.setEncoding("UTF8")
readableStream.on('data',(chunk)=>{
    console.log(chunk)
})

readableStream.on('end',() => {
    console.log(data)
})*/

/*
process.stdout.write("Hola")
process.stdout.write("Que")
process.stdout.write("Tal")
*/

const Transform = stream.Transform;

const Mayus = () => {
    Transform.call(this)
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = (chunk, codif, cb) => {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus);
    cb();
}

var mayus = new Mayus();

readableStream
.pipe(mayus)
.pipe(proces.stdout)