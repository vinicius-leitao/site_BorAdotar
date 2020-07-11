const Pet = require("../database/Pet")

//terminar isso depois que escrever o script de imagens
class NewPet{
    static create(req, res){
        let name = req.body.name
        let specie = req.body.specie
        let port = req.body.port
        let age = req.body.age
    }
}

module.exports = NewPet