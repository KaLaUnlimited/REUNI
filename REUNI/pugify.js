
const pug = require('pug')
const compiled = pug.compileFile(process.argv[2])

let data = {title: process.argv[2]}

console.log(compiled(data))

// for file in *pug ; do node pugify.js $file > $file.html; done
//open index.pug.html

