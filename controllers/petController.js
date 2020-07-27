//importação de modulos
const Pet = require("../database/Pet")
const PetImage = require("../database/PetImage")
const multer = require("multer")
const path = require("path")

const encodeBase64 = require("../script/base64_encode")

//terminar isso depois que escrever o script de imagens

class PetController{ //cadastro de um novo pet

    static petForm(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/cadastro-pet/cadastroPet.html"))
    }
    static create(req, res){
        let {name, specie, port, age, historiaPet: description} = req.body
            let image = encodeBase64(req.file.filename)
            Pet.create({
                name,
                specie,
                port,
                age,
                description
            }).then(() => {
                res.redirect("/")
            }).catch((err) => {
                console.log(err)
            })
    }
}

module.exports = PetController