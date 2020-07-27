const fs = require("fs")

function base64_decode(base64String, fileName){
    let bitmap = new Buffer (base64String, 'base64')
    fs.writeFileSync('src/temp/' + fileName +'', bitmap, 'binary', function(err){
        if(err){
            console.log("erro")
        }
    })
}

module.exports = base64_decode