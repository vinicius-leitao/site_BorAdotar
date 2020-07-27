//importação de modulos
const Pet = require("../database/Pet")
const multer = require("multer")
const path = require("path")

const upload = multer({dest: 'upload/'})
const base64 = require("../script/base64_encode")

//terminar isso depois que escrever o script de imagens

class PetController{ //cadastro de um novo pet

    static petForm(req, res){
        res.sendFile(path.resolve(__dirname, "../static/views/cadastro-pet/cadastroPet.html"))
    }

    static create(req, res){
        let {name, specie, port, age, img} = req.body
        if(img){
            let image = base64(img)
            Pet.create({
                name,
                specie,
                port,
                age,
                image
            }).then(() => {
                res.redirect("/")
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

module.exports = PetController