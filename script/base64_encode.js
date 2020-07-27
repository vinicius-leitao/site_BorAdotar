const fs = require("fs")

function base64_encode(fileName){
    let bitmap = fs.readFileSync('src/temp/' + fileName)
    return new Buffer(bitmap).toString('base64')
}

module.exports = base64_encode