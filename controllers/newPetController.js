const Pet = require("../database/Pet")

//terminar isso depois que escrever o script de imagens

class NewPet{
    static create(req, res){
        let name = req.body.name
        let specie = req.body.specie
        let port = req.body.port
        let age = req.body.age
        let description = req.body.description
        Pet.create({
            name: name
            // specie: specie,
            // port: port,
            // age: age,
            // image: image,
        }).then(() => {
            res.redirect("/")
        }).catch((err) => {
            console.log(err)
        })
    }
}

module.exports = NewPet